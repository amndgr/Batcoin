/*
 * dados.js · Batcoin
 * O único lugar do app que lê e grava dados. As telas só chamam Dados.carregar() e Dados.salvar().
 *
 * Grava no próprio celular (localStorage) e, se a planilha estiver conectada, sincroniza com ela
 * (Apps Script, ver Batcoin.gs). A tela aparece na hora com os dados do celular; a planilha
 * responde depois e, se trouxer novidade do outro celular, o app redesenha.
 *
 * Meses: dentro do app, o mês é uma posição na barra (0 = mês passado, 1 = este mês...).
 * No disco, cada mês é gravado como "AAAA-MM". Assim os dados não mudam de mês quando o mês vira.
 */
var Dados = (function () {
  'use strict';

  var PREFIXO = 'batcoin';
  var K_DADOS = PREFIXO + '-dados';          // contas, pagamentos, renda (o que vai para a planilha)
  var K_PREFS = PREFIXO + '-preferencias';   // quem está usando e qual tela estava aberta (só deste celular)
  var K_TEMAS = PREFIXO + '-temas-salvos';   // temas que a pessoa salvou com nome
  var VERSAO_FORMATO = 1;

  function ler(chave, padrao) {
    try { var v = JSON.parse(localStorage.getItem(chave)); return v == null ? padrao : v; } catch (e) { return padrao; }
  }
  function gravar(chave, valor) {
    try { localStorage.setItem(chave, JSON.stringify(valor)); return true; } catch (e) { return false; }
  }

  // ------------------------------------------------------------- meses
  function numeroBase(base) { return base.getFullYear() * 12 + base.getMonth(); }
  function paraChave(n) { var ano = Math.floor(n / 12), mes = n - ano * 12 + 1; return ano + '-' + (mes < 10 ? '0' : '') + mes; }
  function deChave(k) { var p = String(k).split('-'); return Number(p[0]) * 12 + Number(p[1]) - 1; }

  function trocarChaves(obj, troca) {
    var novo = {};
    Object.keys(obj || {}).forEach(function (k) { novo[troca(k)] = obj[k]; });
    return novo;
  }

  // ------------------------------------------------------------- formato do disco <-> formato das telas
  function paraDisco(S, base) {
    var b = numeroBase(base);
    var chave = function (m) { return paraChave(b + Number(m)); };
    var pagas = {};
    Object.keys(S.pagas || {}).forEach(function (k) {
      var i = k.lastIndexOf('|');
      pagas[k.slice(0, i) + '|' + chave(k.slice(i + 1))] = S.pagas[k];
    });
    var renda = {};
    Object.keys(S.renda || {}).forEach(function (p) {
      var R = S.renda[p];
      renda[p] = { salario: R.salario, extras: trocarChaves(R.extras, chave), meses: trocarChaves(R.meses, chave), bases: trocarChaves(R.bases, chave) };
    });
    return {
      formato: VERSAO_FORMATO,
      atualizadoEm: new Date().toISOString(),
      virada: S.virada || 1,
      contas: (S.contas || []).map(function (c) {
        var x = JSON.parse(JSON.stringify(c));
        x.ini = chave(c.ini);
        x.fim = c.fim == null ? null : chave(c.fim);
        x.val = trocarChaves(c.val, chave);
        return x;
      }),
      pagas: pagas,
      renda: renda
    };
  }

  function doDisco(D, base) {
    var b = numeroBase(base);
    var pos = function (k) { return deChave(k) - b; };
    var pagas = {};
    Object.keys(D.pagas || {}).forEach(function (k) {
      var i = k.lastIndexOf('|');
      pagas[k.slice(0, i) + '|' + pos(k.slice(i + 1))] = D.pagas[k];
    });
    var renda = {};
    Object.keys(D.renda || {}).forEach(function (p) {
      var R = D.renda[p];
      renda[p] = { salario: Number(R.salario) || 0, extras: trocarChaves(R.extras, pos), meses: trocarChaves(R.meses, pos), bases: trocarChaves(R.bases, pos) };
    });
    return {
      virada: D.virada || 1,
      contas: (D.contas || []).map(function (c) {
        var x = JSON.parse(JSON.stringify(c));
        x.ini = pos(c.ini);
        x.fim = c.fim == null ? null : pos(c.fim);
        x.val = trocarChaves(c.val, pos);
        return x;
      }),
      pagas: pagas,
      renda: renda
    };
  }

  // ------------------------------------------------------------- API usada pelo app
  var PREFS = ['pessoa', 'aba', 'filtro', 'vista', 'visao'];
  var ultimoGravado = '';

  /**
   * Devolve o estado das telas (meses como posição na barra) ou null na primeira abertura.
   * @param {Date} base primeiro mês da barra
   */
  function carregar(base) {
    var D = ler(K_DADOS, null);
    if (!D || !D.contas) return null;
    var S = doDisco(D, base);
    var P = ler(K_PREFS, {});
    PREFS.forEach(function (k) { if (P[k] != null) S[k] = P[k]; });
    ultimoGravado = JSON.stringify(D.contas) + JSON.stringify(D.pagas) + JSON.stringify(D.renda) + D.virada;
    return S;
  }

  /** Grava o estado. Só escreve os dados quando algo mudou de verdade. */
  function salvar(S, base) {
    var P = {};
    PREFS.forEach(function (k) { P[k] = S[k]; });
    gravar(K_PREFS, P);
    var D = paraDisco(S, base);
    var assinatura = JSON.stringify(D.contas) + JSON.stringify(D.pagas) + JSON.stringify(D.renda) + D.virada;
    if (assinatura === ultimoGravado) return;
    ultimoGravado = assinatura;
    gravar(K_DADOS, D);
    agendar();
  }

  /** Novo número de conta que não se repete entre os dois celulares (usa o relógio). */
  function novoId(contas) {
    var maior = 0;
    (contas || []).forEach(function (c) { if (c.id > maior) maior = c.id; });
    return Math.max(Date.now(), maior + 1);
  }

  // ------------------------------------------------------------- temas salvos
  var temas = {
    listar: function () {
      return ler(K_TEMAS, []).slice().sort(function (a, b) { return String(b.criadoEm).localeCompare(String(a.criadoEm)); });
    },
    adicionar: function (t) {
      var lista = ler(K_TEMAS, []);
      var novo = { id: 't' + Date.now().toString(36), nome: t.nome, criadoEm: t.criadoEm, tema: t.tema };
      lista.push(novo);
      return gravar(K_TEMAS, lista) ? Promise.resolve(novo) : Promise.reject({ code: 'cheio' });
    },
    apagar: function (id) {
      gravar(K_TEMAS, ler(K_TEMAS, []).filter(function (x) { return x.id !== id; }));
      return Promise.resolve();
    }
  };

  // ------------------------------------------------------------- planilha (sincronização)
  var K_PLAN = PREFIXO + '-planilha';        // { url, token } do App da Web
  var K_SYNC = PREFIXO + '-sincronia';       // { versao, base, quando }: o que a planilha tinha na última vez
  var ganchos = { receber: null, estado: null, ocupado: null };
  var est = { fase: 'desligada', msg: '', quando: null };
  var rodando = null, deNovo = false, timerAgenda = null, timerOcupado = null;

  function mudarEstado(fase, msg) {
    est = { fase: fase, msg: msg || '', quando: fase === 'ok' ? new Date().toISOString() : est.quando };
    if (ganchos.estado) try { ganchos.estado(estado()); } catch (e) {}
  }
  function estado() {
    var conf = ler(K_PLAN, null), sync = ler(K_SYNC, null);
    var pendente = !!conf && (!sync || !igual(sync.base, soDados(ler(K_DADOS, null))));
    return { conectada: !!conf, fase: conf ? est.fase : 'desligada', msg: est.msg, quando: est.quando || (sync && sync.quando) || null, pendente: pendente };
  }

  // JSON com as chaves em ordem: dois objetos iguais sempre viram o mesmo texto
  function estavel(x) {
    if (Array.isArray(x)) return '[' + x.map(estavel).join(',') + ']';
    if (x && typeof x === 'object') return '{' + Object.keys(x).sort().filter(function (k) { return x[k] !== undefined; }).map(function (k) { return JSON.stringify(k) + ':' + estavel(x[k]); }).join(',') + '}';
    return JSON.stringify(x === undefined ? null : x);
  }
  function igual(a, b) { return estavel(a) === estavel(b); }
  function soDados(D) {
    D = D || {};
    return { virada: D.virada || 1, contas: D.contas || [], pagas: D.pagas || {}, renda: D.renda || {} };
  }

  /**
   * Junta três versões: base (o que os dois tinham), local (este celular) e remoto (a planilha).
   * Cada conta, cada pagamento e cada parte da renda é decidida sozinha: o que este celular
   * mudou desde a base vale; o resto vem da planilha. Assim o que o outro celular fez não se perde.
   */
  function juntar(base, local, remoto) {
    var escolhe = function (b, l, r) { return igual(b, l) ? r : l; };
    var mapa = function (b, l, r, fn) {
      var out = {}, ks = {};
      [b, l, r].forEach(function (o) { Object.keys(o || {}).forEach(function (k) { ks[k] = 1; }); });
      Object.keys(ks).forEach(function (k) { var v = fn((b || {})[k], (l || {})[k], (r || {})[k]); if (v !== undefined) out[k] = v; });
      return out;
    };
    var porId = function (lista) { var o = {}; (lista || []).forEach(function (c) { o[c.id] = c; }); return o; };
    var cb = porId(base.contas), cl = porId(local.contas), cr = porId(remoto.contas);
    var contas = mapa(cb, cl, cr, escolhe), ordem = [], visto = {};
    (remoto.contas || []).concat(local.contas || []).forEach(function (c) { if (contas[c.id] && !visto[c.id]) { visto[c.id] = 1; ordem.push(contas[c.id]); } });
    var renda = mapa(base.renda, local.renda, remoto.renda, function (b, l, r) {
      if (l === undefined || r === undefined) return escolhe(b, l, r);
      return mapa(b, l, r, escolhe);
    });
    return {
      virada: escolhe(base.virada, local.virada, remoto.virada) || 1,
      contas: ordem,
      pagas: mapa(base.pagas, local.pagas, remoto.pagas, escolhe),
      renda: renda
    };
  }

  function pedir(conf, metodo, corpo) {
    var ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
    var limite = setTimeout(function () { if (ctrl) ctrl.abort(); }, 30000);
    var req = metodo === 'GET'
      ? fetch(conf.url + '?acao=' + corpo.acao + '&token=' + encodeURIComponent(conf.token) + '&t=' + Date.now(), { cache: 'no-store', signal: ctrl && ctrl.signal })
      : fetch(conf.url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(Object.assign({ token: conf.token }, corpo)), signal: ctrl && ctrl.signal });
    return req.then(function (r) {
      clearTimeout(limite);
      if (!r.ok) throw new Error('a planilha respondeu ' + r.status);
      return r.text();
    }, function (e) { clearTimeout(limite); throw new Error(navigator.onLine === false ? 'sem internet' : 'não consegui falar com a planilha'); })
      .then(function (t) {
        var j; try { j = JSON.parse(t); } catch (e) { throw new Error('resposta estranha da planilha (o script foi implantado como App da Web?)'); }
        if (j.erro) throw new Error(j.erro);
        return j;
      });
  }

  function gravarDados(d) {
    var D = ler(K_DADOS, null) || { formato: VERSAO_FORMATO };
    D.virada = d.virada; D.contas = d.contas; D.pagas = d.pagas; D.renda = d.renda;
    D.atualizadoEm = new Date().toISOString();
    gravar(K_DADOS, D);
  }

  function aplicar(conf, resp, op, tentativa) {
    var sync = ler(K_SYNC, null);
    var remoto = soDados(resp.dados), local = soDados(ler(K_DADOS, null));
    // primeira conexão: "planilha" fica só com o que está na planilha; "juntar" soma as contas deste celular
    var base = sync && sync.base ? sync.base : (op.modo === 'juntar' ? soDados(null) : local);
    var junto = juntar(base, local, remoto);
    if (!igual(junto, local)) {
      if (ganchos.ocupado && ganchos.ocupado()) { var e = new Error('ocupado'); e.ocupado = true; throw e; }
      gravarDados(junto);
      if (ganchos.receber) ganchos.receber();
    }
    if (igual(junto, remoto)) { gravar(K_SYNC, { versao: resp.versao, base: junto, quando: new Date().toISOString() }); return null; }
    mudarEstado('enviando');
    var D = ler(K_DADOS, null) || {};
    return pedir(conf, 'POST', { acao: 'salvar', versao: resp.versao,
      dados: { formato: VERSAO_FORMATO, atualizadoEm: new Date().toISOString(), virada: junto.virada, contas: junto.contas, pagas: junto.pagas, renda: junto.renda } })
      .then(function (r) {
        if (r.conflito) {
          if (tentativa >= 3) throw new Error('a planilha está ocupada, tento de novo daqui a pouco');
          return aplicar(conf, r, op, tentativa + 1);   // o outro celular gravou antes: junta de novo
        }
        gravar(K_SYNC, { versao: r.versao, base: junto, quando: new Date().toISOString() });
        return r.aviso || null;
      });
  }

  /** Busca a planilha, junta com o celular e envia o que faltar. Nunca roda duas vezes ao mesmo tempo. */
  function sincronizar(op) {
    var conf = ler(K_PLAN, null);
    if (!conf) return Promise.resolve(estado());
    if (rodando) { deNovo = true; return rodando; }
    op = op || {};
    mudarEstado('buscando');
    rodando = pedir(conf, 'GET', { acao: 'ler' })
      .then(function (resp) { return aplicar(conf, resp, op, 0); })
      .then(function (aviso) { mudarEstado('ok', aviso || ''); }, function (e) {
        if (e.ocupado) { mudarEstado('ok'); clearTimeout(timerOcupado); timerOcupado = setTimeout(sincronizar, 2500); return; }
        mudarEstado(navigator.onLine === false ? 'offline' : 'erro', e.message);
      })
      .then(function () {
        rodando = null;
        if (deNovo) { deNovo = false; agendar(400); }
        return estado();
      });
    return rodando;
  }

  function agendar(ms) {
    if (!ler(K_PLAN, null)) return;
    clearTimeout(timerAgenda);
    timerAgenda = setTimeout(sincronizar, ms == null ? 1500 : ms);
  }

  var planilha = {
    /** Cola o código "URL#token" mostrado no menu da planilha. modo: 'planilha' ou 'juntar'. */
    conectar: function (codigo, modo) {
      var t = String(codigo || '').trim(), i = t.lastIndexOf('#');
      var url = i > 0 ? t.slice(0, i) : '', token = i > 0 ? t.slice(i + 1) : '';
      if (!/^https:\/\/script\.google(usercontent)?\.com\//.test(url) || token.length < 20) return Promise.reject(new Error('código inválido: copie o código inteiro do menu da planilha'));
      var conf = { url: url, token: token };
      return pedir(conf, 'GET', { acao: 'ping' }).then(function () {
        gravar(K_PLAN, conf);
        localStorage.removeItem(K_SYNC);
        return sincronizar({ modo: modo });
      });
    },
    desconectar: function () { localStorage.removeItem(K_PLAN); localStorage.removeItem(K_SYNC); mudarEstado('desligada'); },
    sincronizar: sincronizar,
    estado: estado,
    /** fn() é chamada quando chegam dados novos da planilha (o app relê com Dados.carregar). */
    aoReceber: function (fn) { ganchos.receber = fn; },
    aoMudarEstado: function (fn) { ganchos.estado = fn; },
    /** fn() devolve true enquanto o app não pode trocar os dados (ex.: janela de edição aberta). */
    ocupado: function (fn) { ganchos.ocupado = fn; }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('online', function () { agendar(300); });
    document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'visible') agendar(300); });
  }

  /** Cópia de tudo, para guardar ou mandar para o Claude (Tema › fazer cópia dos dados). */
  function exportar() {
    return { app: 'batcoin', exportadoEm: new Date().toISOString(), dados: ler(K_DADOS, null), temas: ler(K_TEMAS, []) };
  }

  return {
    carregar: carregar,
    salvar: salvar,
    novoId: novoId,
    temas: temas,
    exportar: exportar,
    planilha: planilha,
    ler: ler,
    gravar: gravar,
    // para testes
    _paraDisco: paraDisco,
    _doDisco: doDisco,
    _juntar: juntar
  };
})();
