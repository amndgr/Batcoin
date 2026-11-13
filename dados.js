/*
 * dados.js · Batcoin
 * O único lugar do app que lê e grava dados. As telas só chamam Dados.carregar() e Dados.salvar().
 *
 * Hoje grava no próprio celular (localStorage). Na etapa 5 estas mesmas funções passam a
 * conversar com a planilha (Apps Script), sem mudar nada nas telas.
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
    ler: ler,
    gravar: gravar,
    // para testes
    _paraDisco: paraDisco,
    _doDisco: doDisco
  };
})();
