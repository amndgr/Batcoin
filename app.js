
(function () {
  // ======================================================== PEÇAS DO TEMA
  var PALETAS = {
    algodao:  { nome: 'Algodão', familia: 'rosa', escuro: false, c: { fundo:'#FCE8F1',sup:'#FFFFFF',sup2:'#FFF4F9',destaque:'#F9D3E4',acento:'#EE8DB8','acento-texto':'#B83A72',sec:'#D9CCF4','sec-texto':'#6C55B0',contorno:'#48434F',texto:'#3A3540',apagado:'#857887',tracejado:'#D7AFC3','tag-fundo':'#48434F','tag-texto':'#FFFFFF',verde:'#2E8A62',coral:'#C93F5B',nav:'#48434F','nav-icone':'#F9D3E4','nav-ativo':'#FFFFFF',pagina:'#F4DCE8',bc:'#FFFFFF',be:'#C7A3B6','btn-texto':'#2A272F' }, padrao: '#F6D2E2' },
    rosaexe:  { nome: 'Rosa.exe', familia: 'rosa', escuro: false, c: { fundo:'#E9B9CF',sup:'#F8E6EF',sup2:'#FFF3F8',destaque:'#F4CFE0',acento:'#D35A92','acento-texto':'#A82D66',sec:'#CDEBE5','sec-texto':'#2C6D62',contorno:'#6E3653',texto:'#3A1F2D',apagado:'#82596C',tracejado:'#DDB0C5','tag-fundo':'#D35A92','tag-texto':'#FFFFFF',verde:'#2D7F4F',coral:'#B8324F',nav:'#D35A92','nav-icone':'#FFE3EF','nav-ativo':'#FFFFFF',pagina:'#E2AFC6',bc:'#FFFFFF',be:'#B98AA0','btn-texto':'#FFFFFF' }, padrao: '#E2AAC3' },
    morango:  { nome: 'Morango com leite', familia: 'rosa', escuro: false, c: { fundo:'#FFF5F8',sup:'#FFFFFF',sup2:'#FFF9FB',destaque:'#FFE1EA',acento:'#F48FB1','acento-texto':'#C2416F',sec:'#FFEBC8','sec-texto':'#9A5B1F',contorno:'#E58BB0',texto:'#6B3A4E',apagado:'#A27586',tracejado:'#F7C6D8','tag-fundo':'#FFFFFF','tag-texto':'#C2416F',verde:'#3F8F5F',coral:'#D24766',nav:'#FFFFFF','nav-icone':'#E58BB0','nav-ativo':'#C2416F',pagina:'#FFE9F0',bc:'#FFFFFF',be:'#F2B3CA','btn-texto':'#FFFFFF' }, padrao: '#F9D6E3' },
    chiclete: { nome: 'Chiclete e menta', familia: 'rosa', escuro: false, c: { fundo:'#FFE4F0',sup:'#FFFFFF',sup2:'#F2FFFB',destaque:'#FFC8E1',acento:'#FF5FA8','acento-texto':'#C71F6E',sec:'#BFF0E3','sec-texto':'#1F7A62',contorno:'#5A2E45',texto:'#3E2232',apagado:'#8E6A7C',tracejado:'#F5B3D0','tag-fundo':'#5A2E45','tag-texto':'#FFFFFF',verde:'#1F7A62',coral:'#C42A55',nav:'#5A2E45','nav-icone':'#BFF0E3','nav-ativo':'#FFFFFF',pagina:'#FFD6E8',bc:'#FFFFFF',be:'#E39CBE','btn-texto':'#FFFFFF' }, padrao: '#FFCDE2' },
    lavanda:  { nome: 'Lavanda clarinha', familia: 'rosa', escuro: false, c: { fundo:'#F3EDFF',sup:'#FFFFFF',sup2:'#FAF7FF',destaque:'#E4D9FF',acento:'#B79CF2','acento-texto':'#6C47C9',sec:'#FFD6E8','sec-texto':'#B23A72',contorno:'#4B3F66',texto:'#352B4A',apagado:'#7A6E91',tracejado:'#D3C5F2','tag-fundo':'#4B3F66','tag-texto':'#FFFFFF',verde:'#2E8A62',coral:'#C93F5B',nav:'#4B3F66','nav-icone':'#E4D9FF','nav-ativo':'#FFFFFF',pagina:'#E8DEFB',bc:'#FFFFFF',be:'#B9AAD9','btn-texto':'#2A2140' }, padrao: '#E2D6FB' },
    pessego:  { nome: 'Pêssego', familia: 'rosa', escuro: false, c: { fundo:'#FFF0EC',sup:'#FFFFFF',sup2:'#FFF7F4',destaque:'#FFDCD3',acento:'#F59E9E','acento-texto':'#B8484D',sec:'#FFE7B8','sec-texto':'#8A5A16',contorno:'#6B4048',texto:'#4A2C33',apagado:'#946B73',tracejado:'#F5C3BA','tag-fundo':'#6B4048','tag-texto':'#FFFFFF',verde:'#3F8F5F',coral:'#C93F5B',nav:'#6B4048','nav-icone':'#FFDCD3','nav-ativo':'#FFFFFF',pagina:'#FFE3DB',bc:'#FFFFFF',be:'#DDA79F','btn-texto':'#3A1F25' }, padrao: '#FAD3C9' },
    bebe:     { nome: 'Rosa e azul bebê', familia: 'rosa', escuro: false, c: { fundo:'#FDEFF6',sup:'#FFFFFF',sup2:'#F3F9FF',destaque:'#FFD6EA',acento:'#F7A1C8','acento-texto':'#B8397A',sec:'#CFE6FF','sec-texto':'#2F5F9E',contorno:'#4A4766',texto:'#33304A',apagado:'#77738F',tracejado:'#DCCFE8','tag-fundo':'#4A4766','tag-texto':'#FFFFFF',verde:'#2E8A62',coral:'#C93F5B',nav:'#4A4766','nav-icone':'#CFE6FF','nav-ativo':'#FFFFFF',pagina:'#EAF3FF',bc:'#FFFFFF',be:'#BDB3D3','btn-texto':'#33304A' }, padrao: '#D8E9FF' },
    cereja:   { nome: 'Cereja', familia: 'rosa', escuro: false, c: { fundo:'#FFF1F3',sup:'#FFFFFF',sup2:'#FFF8F9',destaque:'#FFD3DA',acento:'#E0566F','acento-texto':'#B0233F',sec:'#FFE0E6','sec-texto':'#8A2D44',contorno:'#5A2330',texto:'#3E1A23',apagado:'#87606A',tracejado:'#F2B5C0','tag-fundo':'#E0566F','tag-texto':'#FFFFFF',verde:'#2E8A62',coral:'#B0233F',nav:'#5A2330','nav-icone':'#FFD3DA','nav-ativo':'#FFFFFF',pagina:'#FFE1E6',bc:'#FFFFFF',be:'#D99AA6','btn-texto':'#FFFFFF' }, padrao: '#FBC8D1' },
    carvao:   { nome: 'Carvão', familia: 'roxo', escuro: true, c: { fundo:'#2A272F',sup:'#3A3641',sup2:'#332F39',destaque:'#5A4658',acento:'#F2A2C6','acento-texto':'#F7B6D2',sec:'#4A4063','sec-texto':'#CDBDF3',contorno:'#F4DDE8',texto:'#FBEFF5',apagado:'#B8AABA',tracejado:'#6E5E70','tag-fundo':'#F2A2C6','tag-texto':'#2A272F',verde:'#8EE3BC',coral:'#FF9AAE',nav:'#1C1A20','nav-icone':'#F2A2C6','nav-ativo':'#FFFFFF',pagina:'#201D24',bc:'#4E4957',be:'#1C1A20','btn-texto':'#2A272F' }, padrao: '#9F8BD0' },
    ametista: { nome: 'Ametista', familia: 'roxo', escuro: true, c: { fundo:'#1F1430',sup:'#2E1F45',sup2:'#271A3B',destaque:'#4A3270',acento:'#B48CFF','acento-texto':'#CDB4FF',sec:'#5A2F55','sec-texto':'#F7B6D2',contorno:'#CDB4FF',texto:'#F3EBFF',apagado:'#A99BC2',tracejado:'#4F3A72','tag-fundo':'#B48CFF','tag-texto':'#1F1430',verde:'#8EE3BC',coral:'#FF9AAE',nav:'#140C22','nav-icone':'#B48CFF','nav-ativo':'#FFFFFF',pagina:'#170E25',bc:'#45306A',be:'#120A1E','btn-texto':'#1F1430' }, padrao: '#B48CFF' },
    renda:    { nome: 'Renda negra', familia: 'roxo', escuro: true, c: { fundo:'#141216',sup:'#232027',sup2:'#1B191F',destaque:'#3A2A4A',acento:'#9B6BD6','acento-texto':'#C7A6F2',sec:'#3A3740','sec-texto':'#E0DAE6',contorno:'#C9C3CF',texto:'#EEE9F2',apagado:'#9C95A3',tracejado:'#3F3A46','tag-fundo':'#C9C3CF','tag-texto':'#141216',verde:'#8EE3BC',coral:'#FF9AAE',nav:'#0B0A0D','nav-icone':'#C7A6F2','nav-ativo':'#FFFFFF',pagina:'#0E0D10',bc:'#3A3640',be:'#08070A','btn-texto':'#141216' }, padrao: '#9B6BD6' },
    meianoite:{ nome: 'Meia-noite', familia: 'roxo', escuro: true, c: { fundo:'#161A33',sup:'#222849',sup2:'#1C213E',destaque:'#33386B',acento:'#F2A2C6','acento-texto':'#F7B6D2',sec:'#2E3F6B','sec-texto':'#B9CCFF',contorno:'#C9D3FF',texto:'#EEF0FF',apagado:'#9AA2C7',tracejado:'#3A4275','tag-fundo':'#F2A2C6','tag-texto':'#161A33',verde:'#8EE3BC',coral:'#FF9AAE',nav:'#0F1226','nav-icone':'#F2A2C6','nav-ativo':'#FFFFFF',pagina:'#0E1124',bc:'#343B66',be:'#0C0F20','btn-texto':'#161A33' }, padrao: '#B9CCFF' },
    vinho:    { nome: 'Vinho', familia: 'roxo', escuro: true, c: { fundo:'#2A1219',sup:'#3B1B25',sup2:'#33161F',destaque:'#5A2433',acento:'#F08AA6','acento-texto':'#F7A8BE',sec:'#4A2A3A','sec-texto':'#F2C9D6',contorno:'#F4C6D3',texto:'#FCEEF2',apagado:'#C29AA6',tracejado:'#5E2D3B','tag-fundo':'#F08AA6','tag-texto':'#2A1219',verde:'#8EE3BC',coral:'#FF9AAE',nav:'#1C0B10','nav-icone':'#F08AA6','nav-ativo':'#FFFFFF',pagina:'#1E0C12',bc:'#4F2532',be:'#18090D','btn-texto':'#2A1219' }, padrao: '#F08AA6' },
    berinjela:{ nome: 'Berinjela', familia: 'roxo', escuro: true, c: { fundo:'#24142A',sup:'#33203B',sup2:'#2C1A33',destaque:'#4F2D5C',acento:'#D59BF2','acento-texto':'#E4BBF7',sec:'#3D2A55','sec-texto':'#C9B8FF',contorno:'#E4BBF7',texto:'#F7ECFB',apagado:'#B49BBF',tracejado:'#4E3359','tag-fundo':'#D59BF2','tag-texto':'#24142A',verde:'#9BE7C0',coral:'#FF9AAE',nav:'#170C1C','nav-icone':'#D59BF2','nav-ativo':'#FFFFFF',pagina:'#1A0E1F',bc:'#463050',be:'#130917','btn-texto':'#24142A' }, padrao: '#D59BF2' },
    fumaca:   { nome: 'Fumaça', familia: 'roxo', escuro: true, c: { fundo:'#26262B',sup:'#34343B',sup2:'#2D2D33',destaque:'#45404F',acento:'#C7B3E8','acento-texto':'#D9CBF2',sec:'#4A3F45','sec-texto':'#F2C2D6',contorno:'#D8D4DE',texto:'#F1EFF4',apagado:'#A6A2AD',tracejado:'#4A4852','tag-fundo':'#D8D4DE','tag-texto':'#26262B',verde:'#8EE3BC',coral:'#FF9AAE',nav:'#19191C','nav-icone':'#C7B3E8','nav-ativo':'#FFFFFF',pagina:'#1B1B1F',bc:'#46464E',be:'#141417','btn-texto':'#26262B' }, padrao: '#C7B3E8' },
    basicoClaro: { nome: 'Básico claro', familia: 'basico', escuro: false, c: { fundo:'#F6F5F8',sup:'#FFFFFF',sup2:'#FAFAFC',destaque:'#EFEAF6',acento:'#8E6BD6','acento-texto':'#5B3FA8',sec:'#ECE8F2','sec-texto':'#4F4766',contorno:'#DCD7E4',texto:'#26232B',apagado:'#75707E',tracejado:'#E6E2EC','tag-fundo':'#EFEAF6','tag-texto':'#5B3FA8',verde:'#23825A',coral:'#C2384F',nav:'#FFFFFF','nav-icone':'#8B8594','nav-ativo':'#5B3FA8',pagina:'#ECEAF0',bc:'#FFFFFF',be:'#C9C4D1','btn-texto':'#FFFFFF' }, padrao: '#E6E2EC' },
    basicoEscuro: { nome: 'Básico escuro', familia: 'basico', escuro: true, c: { fundo:'#2C2A33',sup:'#3A3742',sup2:'#34313C',destaque:'#47425A',acento:'#BCA3F5','acento-texto':'#D3C1FB',sec:'#423E4B','sec-texto':'#D6CFE3',contorno:'#55505F',texto:'#F5F3F8',apagado:'#B9B3C4',tracejado:'#4A4654','tag-fundo':'#47425A','tag-texto':'#D3C1FB',verde:'#93E6C0',coral:'#FFA3B5',nav:'#34313C','nav-icone':'#A9A3B4','nav-ativo':'#FFFFFF',pagina:'#24222A',bc:'#55505F',be:'#1F1D24','btn-texto':'#232129' }, padrao: '#3A3742' },
    neon:     { nome: 'Neon malva', familia: 'roxo', escuro: true, c: { fundo:'#24151F',sup:'#33202D',sup2:'#2B1A26',destaque:'#4D2A43',acento:'#FF7AC8','acento-texto':'#FF9BD6',sec:'#3E2A4A','sec-texto':'#D9B8F5',contorno:'#FF9BD6',texto:'#FBE9F4',apagado:'#B796AC',tracejado:'#5A3550','tag-fundo':'#FF7AC8','tag-texto':'#24151F',verde:'#8EF0C8',coral:'#FF9AAE',nav:'#180E15','nav-icone':'#FF9BD6','nav-ativo':'#FFFFFF',pagina:'#1A0F17',bc:'#4A2E42',be:'#150B12','btn-texto':'#24151F' }, padrao: '#FF7AC8' }
  };
  var DESTAQUES = {
    auto: { nome: 'Da paleta' },
    rosa: { nome: 'Rosa', a: '#EE8DB8', claro: '#B83A72', escuro: '#F7B6D2', btn: '#2A272F' },
    chiclete: { nome: 'Chiclete', a: '#FF5FA8', claro: '#C71F6E', escuro: '#FF9BD0', btn: '#FFFFFF' },
    cereja: { nome: 'Cereja', a: '#E0567A', claro: '#B32D52', escuro: '#FF9AB2', btn: '#FFFFFF' },
    lilas: { nome: 'Lilás', a: '#B48CFF', claro: '#6C47C9', escuro: '#CDB4FF', btn: '#1F1430' },
    uva: { nome: 'Uva', a: '#8E5BD6', claro: '#5E35A6', escuro: '#C3A2F5', btn: '#FFFFFF' },
    menta: { nome: 'Menta', a: '#7FD8BE', claro: '#1F7A62', escuro: '#A8EBD8', btn: '#14352C' },
    pessego: { nome: 'Pêssego', a: '#F7A98B', claro: '#B5553A', escuro: '#FFC4AE', btn: '#3A1F18' },
    azul: { nome: 'Azul bebê', a: '#8EC5FF', claro: '#2F67B0', escuro: '#B9DAFF', btn: '#14284A' },
    vermelho: { nome: 'Vermelho', a: '#D9364F', claro: '#A81E36', escuro: '#FF8094', btn: '#FFFFFF' },
    dourado: { nome: 'Dourado', a: '#E8B44C', claro: '#8C6312', escuro: '#F5D08A', btn: '#3A2A08' },
    prata: { nome: 'Prata', a: '#B9B6C2', claro: '#5A5766', escuro: '#DAD7E2', btn: '#26242C' },
    preto: { nome: 'Preto', a: '#2B2830', claro: '#2B2830', escuro: '#E9E4EF', btn: '#FFFFFF' }
  };
  var MOLDURAS = {
    limpa:    { nome: 'Limpa', dica: 'sem enfeite', vars: { raio:'14px', 'raio-p':'10px', borda:'1.5px', 'sombra-btn':'none', 'sombra-peca':'none' } },
    widget:   { nome: 'Widget de chat', dica: 'etiqueta + costura', vars: { raio:'16px', 'raio-p':'12px', borda:'2px', 'sombra-btn':'3px 3px 0 var(--contorno)', 'sombra-peca':'none' } },
    janela:   { nome: 'Janela Windows 98', dica: 'barra + relevo', vars: { raio:'3px', 'raio-p':'2px', borda:'2px', 'sombra-btn':'inset 2px 2px 0 var(--bc), inset -2px -2px 0 var(--be)', 'sombra-peca':'inset 2px 2px 0 var(--bc), inset -2px -2px 0 var(--be)' } },
    caderno:  { nome: 'Caderninho DS', dica: 'abinha + linhas', vars: { raio:'8px', 'raio-p':'7px', borda:'2px', 'sombra-btn':'0 3px 0 var(--acento)', 'sombra-peca':'none' } },
    terminal: { nome: 'Terminal cromado', dica: 'C:/> + brilho', vars: { raio:'3px', 'raio-p':'3px', borda:'1.5px', 'sombra-btn':'0 0 12px var(--brilho)', 'sombra-peca':'0 0 10px var(--brilho)' } }
  };
  var CANTOS = { auto: { nome: 'Da moldura' }, retos: { nome: 'Retos', r: '2px', p: '2px' }, suaves: { nome: 'Suaves', r: '8px', p: '6px' }, redondos: { nome: 'Redondos', r: '16px', p: '12px' }, bolha: { nome: 'Bolinha', r: '24px', p: '16px' } };
  var FUNDOS = { coracoes: 'Corações pixel', estrelas: 'Estrelas e luas', morcegos: 'Morceguinhos', caveiras: 'Caveirinhas', teia: 'Teias', lacinhos: 'Lacinhos', nuvens: 'Nuvens', vichy: 'Xadrez vichy', xadrez: 'Xadrez escocês', listras: 'Listras', linhas: 'Linhas de caderno', pontos: 'Bolinhas', grade: 'Grade cyber', tartan: 'Xadrez gótico', rendaFundo: 'Renda floral', cruzinhas: 'Cruzinhas', morangos: 'Morangos', docinhos: 'Docinhos', coelhinhos: 'Coelhinhos', liso: 'Liso' };
  var ENFEITES = { chifres: 'Chifrinhos', asas: 'Asas de morcego', lacos: 'Laços', coracoes: 'Coraçõezinhos', caveiras: 'Caveirinhas', estrelas: 'Brilhos', curativo: 'Curativo', babado: 'Babado de renda', morceguinhos: 'Morceguinhos voando', teias: 'Teias com aranhinha', cruzes: 'Cruzes góticas', renda: 'Renda com furinhos', patch: 'Coração de renda', cantoneiras: 'Moldura gótica (no fundo)', cauda: 'Cauda de diabinho', comidinhas: 'Comidinhas', kaomoji: 'Carinhas (kaomoji)', vidas: 'Vidas do mês' };
  var MASCOTES = { gato: 'Gatinho', coelho: 'Coelhinho', ursinho: 'Ursinho', sapinho: 'Sapinho', morcego: 'Morceguinho', aranhinha: 'Aranhinha', fantasminha: 'Fantasminha', fantasma: 'Fantasma', caveira: 'Caveirinha', monstro: 'Monstrinho', figurinha: 'Sua figurinha', nenhum: 'Sem mascote' };
  var CORES_CORPO = { auto: { nome: 'Combina com o tema' }, branco: { nome: 'Branco', c: '#FFFFFF' }, preto: { nome: 'Preto', c: '#2A2630' }, caramelo: { nome: 'Caramelo', c: '#E2B98F' }, tema1: { nome: 'Cor do tema', dyn: 'acento' }, tema2: { nome: 'Clarinha do tema', dyn: 'destaque' }, tema3: { nome: 'Segunda cor do tema', dyn: 'sec' }, tema4: { nome: 'Contorno do tema', dyn: 'contorno' }, verdinho: { nome: 'Verdinho', c: '#A8DDA0' }, rosa: { nome: 'Rosa', c: '#F9B8D3' }, lilas: { nome: 'Lilás', c: '#C9B3F5' }, menta: { nome: 'Menta', c: '#A8E8D4' }, lavanda: { nome: 'Lavanda', c: '#E2D6FF' }, pessego: { nome: 'Pêssego', c: '#FFCFC0' }, azul: { nome: 'Azul bebê', c: '#BFDDFF' }, creme: { nome: 'Creme', c: '#FFF4DC' }, cinza: { nome: 'Cinza', c: '#BDB8C6' }, vinho: { nome: 'Vinho', c: '#7A2E45' } };
  var CORPOS_ESCUROS = { preto: 1, vinho: 1 };
  var COR_PADRAO_MASCOTE = { ursinho: 'caramelo', sapinho: 'verdinho', aranhinha: 'preto', morcego: 'preto', fantasma: 'branco', fantasminha: 'branco', caveira: 'creme', monstro: 'lilas', coelho: 'branco' };
  var TITULOS = {
    pixelify: { nome: 'Pixel redondinho', css: '"Pixelify Sans",ui-monospace,monospace', escala: 1 },
    silkscreen: { nome: 'Pixel quadrado', css: '"Silkscreen",ui-monospace,monospace', escala: .85 },
    ds: { nome: 'Videogame japonês', css: '"DotGothic16",ui-monospace,monospace', escala: 1 },
    terminal: { nome: 'Terminal', css: '"VT323",ui-monospace,monospace', escala: 1.22 },
    fredoka: { nome: 'Redondinha', css: '"Fredoka","Quicksand",ui-rounded,sans-serif', escala: 1 },
    quicksand: { nome: 'Delicada', css: '"Quicksand",ui-rounded,sans-serif', escala: 1 }
  };
  var NUMEROS = {
    fredoka: { nome: 'Redondinha', css: '"Fredoka","Quicksand",ui-rounded,sans-serif' },
    nunito: { nome: 'Firme', css: '"Nunito","Quicksand",ui-rounded,sans-serif' },
    quicksand: { nome: 'Delicada', css: '"Quicksand",ui-rounded,sans-serif' }
  };
  var TAMANHOS = { p: { nome: 'Pequeno', v: .93 }, m: { nome: 'Médio', v: 1 }, g: { nome: 'Grande', v: 1.1 } };
  var BLOCOS = { numeros: 'Números do mês', pagamentos: 'Pagamentos', nos: 'Nós dois' };
  var FUNDO_CORES = {
    claro: { neutro: ['Neutro', '#F6F5F8'], nevoa: ['Névoa', '#EEF1F5'], rosado: ['Rosado', '#FBF1F5'], lavanda: ['Lavanda', '#F3F0FB'], menta: ['Menta', '#EEF7F2'], areia: ['Areia', '#F8F4EC'] },
    escuro: { grafite: ['Grafite', '#2C2A33'], noite: ['Noite', '#262E3E'], ameixa: ['Ameixa', '#33283A'], floresta: ['Floresta', '#24322C'], carvao: ['Carvão', '#2A2A2C'] }
  };
  var PAPEIS_BASICOS = { liso: 'Liso', pontos: 'Pontinhos', grade: 'Grade', listras: 'Listras' };
  var MODELOS = {
    basicoClaro: { nome: 'Básico claro', familia: 'basico', desc: 'limpo, só cor e números', paleta: 'basicoClaro', moldura: 'limpa', fundo: 'liso', enfeites: [], mascote: 'nenhum', titulos: 'fredoka' },
    basicoEscuro: { nome: 'Básico escuro', familia: 'basico', desc: 'limpo, fundo grafite', paleta: 'basicoEscuro', moldura: 'limpa', fundo: 'liso', enfeites: [], mascote: 'nenhum', titulos: 'fredoka' },
    goticoClaro: { nome: 'Gótico Fofo · claro', familia: 'rosa', desc: 'o tema 1 que você aprovou', paleta: 'algodao', moldura: 'widget', fundo: 'coracoes', enfeites: ['chifres', 'asas', 'curativo', 'babado'], mascote: 'gato', titulos: 'pixelify' },
    rosaExe: { nome: 'Rosa.exe', familia: 'rosa', desc: 'Windows 98 e Winamp rosa', paleta: 'rosaexe', moldura: 'janela', fundo: 'liso', enfeites: ['coracoes', 'estrelas'], mascote: 'gato', titulos: 'ds' },
    coracaoPixel: { nome: 'Coração Pixel', familia: 'rosa', desc: 'chat do DS com fantasminha', paleta: 'morango', moldura: 'caderno', fundo: 'linhas', enfeites: ['coracoes', 'lacos', 'babado'], mascote: 'fantasma', titulos: 'ds' },
    coelhinha: { nome: 'Coelhinha nas Nuvens', familia: 'rosa', desc: 'rosa e azul bebê com coelhinho', paleta: 'bebe', moldura: 'widget', fundo: 'nuvens', enfeites: ['lacos', 'coracoes', 'babado'], mascote: 'coelho', titulos: 'pixelify' },
    fantasminhaLilas: { nome: 'Fantasminha Lilás', familia: 'rosa', desc: 'lavanda, estrelas e fantasminha', paleta: 'lavanda', moldura: 'caderno', fundo: 'estrelas', enfeites: ['estrelas', 'coracoes', 'morceguinhos'], mascote: 'fantasminha', titulos: 'silkscreen' },
    goticoEscuro: { nome: 'Gótico Fofo · escuro', familia: 'roxo', desc: 'o tema 1 no escuro', paleta: 'carvao', moldura: 'widget', fundo: 'xadrez', enfeites: ['chifres', 'asas', 'curativo', 'babado'], mascote: 'gato', titulos: 'pixelify' },
    rendaXadrez: { nome: 'Renda & Xadrez', familia: 'roxo', desc: 'morceguinho, laços e caveirinhas', paleta: 'renda', moldura: 'widget', fundo: 'xadrez', enfeites: ['lacos', 'caveiras', 'estrelas', 'babado'], mascote: 'morcego', titulos: 'silkscreen' },
    noiteMorcegos: { nome: 'Noite de Morcegos', familia: 'roxo', desc: 'azul meia-noite, teias e morceguinhos', paleta: 'meianoite', moldura: 'widget', fundo: 'morcegos', enfeites: ['morceguinhos', 'teias', 'estrelas'], mascote: 'morcego', titulos: 'silkscreen' },
    caveirinhaFofa: { nome: 'Caveirinha Fofa', familia: 'roxo', desc: 'vinho, caveirinhas e laços', paleta: 'vinho', moldura: 'janela', fundo: 'caveiras', enfeites: ['teias', 'lacos', 'coracoes'], mascote: 'caveira', titulos: 'pixelify' },
    capela: { nome: 'Capela de Renda', familia: 'roxo', desc: 'cruzes, renda e teias com orvalho', paleta: 'renda', moldura: 'widget', fundo: 'tartan', enfeites: ['cantoneiras', 'cruzes', 'teias', 'renda'], mascote: 'morcego', titulos: 'silkscreen' },
    vitral: { nome: 'Vitral Noturno', familia: 'roxo', desc: 'berinjela, cruzinhas e fantasma', paleta: 'berinjela', moldura: 'janela', fundo: 'cruzinhas', enfeites: ['cruzes', 'renda', 'morceguinhos', 'kaomoji'], mascote: 'fantasma', titulos: 'pixelify' },
    coracaoRenda: { nome: 'Coração de Renda', familia: 'rosa', desc: 'renda branca, cruzinha e vidas', paleta: 'algodao', moldura: 'widget', fundo: 'rendaFundo', enfeites: ['patch', 'cruzes', 'renda', 'vidas'], mascote: 'fantasminha', titulos: 'pixelify' },
    docinho: { nome: 'Docinho de Morango', familia: 'rosa', desc: 'morangos, bolinhos e carinhas', paleta: 'morango', moldura: 'caderno', fundo: 'morangos', enfeites: ['comidinhas', 'kaomoji', 'vidas'], mascote: 'coelho', titulos: 'ds' },
    coelhinhoKaomoji: { nome: 'Coelhinho Kaomoji', familia: 'rosa', desc: 'coelhinhos em pixel e carinhas', paleta: 'bebe', moldura: 'widget', fundo: 'coelhinhos', enfeites: ['kaomoji', 'vidas', 'estrelas'], mascote: 'coelho', titulos: 'pixelify' },
    cromoCyber: { nome: 'Cromo Cyber', familia: 'roxo', desc: 'terminal neon com monstrinho', paleta: 'neon', moldura: 'terminal', fundo: 'grade', enfeites: ['estrelas', 'caveiras'], mascote: 'monstro', titulos: 'terminal' }
  };

  var CHAVE = 'batcoin-app';
  function lerLocal(k, padrao) { try { var v = JSON.parse(localStorage.getItem(k)); return v || padrao; } catch (e) { return padrao; } }
  function gravarLocal(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function deModelo(id, base) {
    var m = MODELOS[id];
    return { modelo: id, paleta: m.paleta, destaque: 'auto', moldura: m.moldura, cantos: 'auto', fundo: m.fundo, enfeites: m.enfeites.slice(),
      mascote: m.mascote, corMascote: 'auto', titulos: m.titulos, numeros: (base && base.numeros) || 'fredoka', tamanho: (base && base.tamanho) || 'm',
      saudacao: (base && base.saudacao) || '♥ oi, oi', carinhas: (base && base.carinhas) || 'fofinha', blocos: (base && base.blocos) || { numeros: true, pagamentos: true, nos: true } };
  }
  var host = document.documentElement.getAttribute('data-theme');
  var prefEscuro = host === 'dark' || (host !== 'light' && window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches);
  var T = lerLocal(CHAVE + '-tema', null) || deModelo(prefEscuro ? 'goticoEscuro' : 'goticoClaro');
  if (!PALETAS[T.paleta] || !T.blocos) T = deModelo('goticoClaro');
  var figurinha = null;
  try { figurinha = localStorage.getItem(CHAVE + '-figurinha'); } catch (e) {}

  // ======================================================== DADOS DE EXEMPLO
  var NOMES = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
  var LONGOS = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  var MESES = [];
  var HOJE0 = new Date(); HOJE0 = new Date(HOJE0.getFullYear(), HOJE0.getMonth(), HOJE0.getDate());
  var BASE = new Date(HOJE0.getFullYear(), HOJE0.getMonth() - 1, 1); // a barra começa no mês passado
  function dataMes(m, dia) { var d = new Date(BASE.getFullYear(), BASE.getMonth() + m, 1); if (dia) d.setDate(Math.min(dia, new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate())); return d; }
  for (var i = 0; i < 13; i++) { var d = dataMes(i); MESES.push({ curto: NOMES[d.getMonth()] + '/' + String(d.getFullYear()).slice(2), longo: LONGOS[d.getMonth()] }); }
  function MES(m) { if (MESES[m]) return MESES[m]; var d = dataMes(m); return { curto: NOMES[d.getMonth()] + '/' + String(d.getFullYear()).slice(2), longo: LONGOS[d.getMonth()] }; }
  var CATEGORIAS = ['Moradia','Contas de Consumo','Alimentação','Serviços','Cartão de Crédito','Eletrônicos','Educação','Saúde & Beleza','Lazer & Assinaturas','Transporte','Outros'];
  var PESSOAS = ['Amanda', 'Luiz'];
  function exemplo() {
    return { pessoa: 'Amanda', mes: 0, aba: 'inicio', filtro: 'todas', vista: 'lista', visao: 'eu', proximoId: 14,
      contas: [
        { id: 1, nome: 'Aluguel', cat: 'Moradia', dono: 'comp', divA: 50, dia: 5, padrao: 1800, ini: 0, fim: null, val: {} },
        { id: 2, nome: 'Fatura do cartão', cat: 'Cartão de Crédito', dono: 'comp', divA: 50, dia: 8, padrao: 1250, ini: 0, fim: null, val: { 0: 1342.55, 1: 1890, 2: 980.40, 3: 1120 } },
        { id: 3, nome: 'Luz', cat: 'Contas de Consumo', dono: 'comp', divA: 50, dia: 12, padrao: 214.37, ini: 0, fim: null, val: {} },
        { id: 4, nome: 'Internet', cat: 'Serviços', dono: 'comp', divA: 60, dia: 15, padrao: 119.90, ini: 0, fim: null, val: {} },
        { id: 5, nome: 'Mercado', cat: 'Alimentação', dono: 'comp', divA: 50, dia: 20, padrao: 800, ini: 0, fim: null, val: {} },
        { id: 6, nome: 'Celular', cat: 'Contas de Consumo', dono: 'Amanda', dia: 10, padrao: 59.99, ini: 0, fim: null, val: {} },
        { id: 7, nome: 'Academia', cat: 'Saúde & Beleza', dono: 'Amanda', dia: 5, padrao: 99.90, ini: 0, fim: null, val: {} },
        { id: 8, nome: 'Curso de inglês', cat: 'Educação', dono: 'Amanda', dia: 18, padrao: 250, ini: 0, fim: 7, val: {} },
        { id: 9, nome: 'Fone parcelado', cat: 'Eletrônicos', dono: 'Amanda', dia: 22, padrao: 89.90, ini: 0, fim: 2, val: {} },
        { id: 10, nome: 'Moto', cat: 'Transporte', dono: 'Luiz', dia: 10, padrao: 480, ini: 0, fim: 8, val: {} },
        { id: 11, nome: 'Spotify', cat: 'Lazer & Assinaturas', dono: 'Luiz', dia: 28, padrao: 21.90, ini: 0, fim: null, val: {} },
        { id: 12, nome: 'Presente da mãe', cat: 'Outros', dono: 'Amanda', dia: 20, padrao: 150, ini: 0, fim: 0, val: {} },
        { id: 13, nome: 'Viagem de carnaval', cat: 'Lazer & Assinaturas', dono: 'comp', divA: 50, dia: 25, padrao: 640, ini: 2, fim: 2, val: {} }
      ],
      pagas: { '1|0': 1, '3|0': 1, '4|0': 1, '5|0': 1, '7|0': 1, '8|0': 1, '9|0': 1, '10|0': 1, '11|0': 1, '1|1': 1, '7|1': 1 },
      renda: { Amanda: { salario: 3200, extras: { 0: [{ desc: 'Venda do vestido', valor: 90 }] }, meses: { 0: 3050 }, bases: {} }, Luiz: { salario: 3500, extras: {}, meses: {}, bases: {} } } };
  }
  var PRIMEIRA_VEZ = false;
  function estadoVazio(p) { return { pessoa: p || PESSOAS[0], mes: 0, aba: 'inicio', filtro: 'todas', vista: 'lista', visao: 'eu', virada: 1, contas: [], pagas: {},
    renda: { Amanda: { salario: 0, extras: {}, meses: {}, bases: {} }, Luiz: { salario: 0, extras: {}, meses: {}, bases: {} } } }; }
  var S = Dados.carregar(BASE);
  if (!S) { S = estadoVazio(); PRIMEIRA_VEZ = true; }
  PESSOAS.forEach(function (p) { if (!S.renda[p]) S.renda[p] = { salario: 0, extras: {} }; S.renda[p].meses = S.renda[p].meses || {}; S.renda[p].bases = S.renda[p].bases || {}; });
  if (!S.pessoa) S.pessoa = PESSOAS[0]; if (!S.aba) S.aba = 'inicio'; if (!S.filtro) S.filtro = 'todas';
  if (!S.vista) S.vista = 'lista'; if (!S.visao) S.visao = 'eu'; if (!S.virada) S.virada = 1;
  function mesAtual() {
    var h = new Date(), i = (h.getFullYear() - BASE.getFullYear()) * 12 + h.getMonth() - BASE.getMonth();
    if (S.virada > 1 && h.getDate() >= S.virada) i++;
    return Math.max(0, Math.min(MESES.length - 1, i));
  }
  S.mes = mesAtual();
  var TP = lerLocal(CHAVE + '-temas-pessoa', null) || {};
  if (TP[S.pessoa] && PALETAS[TP[S.pessoa].paleta] && TP[S.pessoa].blocos) T = TP[S.pessoa];
  function temaInicial(p) { return deModelo(p === PESSOAS[1] ? 'basicoClaro' : 'goticoClaro'); }

  // ======================================================== utilidades
  function $(id) { return document.getElementById(id); }
  function brl(n) { return (Number(n) || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function num(v) { var s = String(v || '').replace('R$', '').replace(/\s/g, ''); if (!s) return null; if (s.indexOf(',') > -1) s = s.replace(/\./g, '').replace(',', '.'); var n = parseFloat(s); return isNaN(n) ? null : n; }
  function r2(n) { return Math.round(n * 100) / 100; }
  function campo(n) { return n == null ? '' : String(r2(n)).replace('.', ','); }
  function outra(p) { return p === PESSOAS[0] ? PESSOAS[1] : PESSOAS[0]; }
  function rgba(hex, a) { var n = parseInt(hex.slice(1), 16); return 'rgba(' + (n >> 16) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')'; }
  var tToast;
  function toast(msg) { $('toast-msg').textContent = msg; var t = $('toast'); t.classList.add('mostrar'); clearTimeout(tToast); tToast = setTimeout(function () { t.classList.remove('mostrar'); }, 2600); }
  function tem(e) { return T.enfeites.indexOf(e) > -1; }
  function paleta() { return PALETAS[T.paleta]; }

  // ======================================================== MASCOTES EM PIXEL ART (desenhos originais)
  function rep(c, n) { return new Array(n + 1).join(c); }
  function F(n) { return rep('f', n); }
  function rostoGato(h) { var r = {}; Object.keys(h).forEach(function (k) { r[k] = {}; Object.keys(h[k]).forEach(function (l) { r[k][l] = h[k][l].slice(1, 17).replace(/o/g, 'm'); }); }); return r; }
  var SPRITES = {
    gato: { base: ['..o' + rep('.', 12) + 'o..', '.ofo' + rep('.', 10) + 'ofo.', '.opfo' + rep('.', 8) + 'ofpo.', '.offf' + rep('o', 8) + 'fffo.',
        'o' + F(16) + 'o', 'o' + F(16) + 'o', 'o' + F(16) + 'o', 'o' + F(16) + 'o', 'offppfffppfffppffo', 'o' + F(16) + 'o', 'o' + F(16) + 'o', 'o' + F(16) + 'o', '.o' + F(14) + 'o.', '..' + rep('o', 14) + '..'],
      col: 1, humor: rostoGato({
        feliz: { 6: 'offffeffffffeffffo', 7: 'offfefeffffefefffo', 9: 'offfffofoofofffffo', 10: 'offffffoffoffffffo' },
        preocupado: { 5: 'offfeffffffffefffo', 6: 'offffeeffffeeffffo', 7: 'offffeeffffeeffffo', 9: 'offffffooooffffffo', 10: 'offfffoffffofffffo' },
        dormindo: { 7: 'offfeeffffffeefffo', 9: 'o' + F(7) + 'oo' + F(7) + 'o' } }),
      suor: [[3, 16], [4, 16]], extra: { '1,11': 'p', '1,13': 'p', '2,11': 'p', '2,13': 'p', '1,12': 'o', '2,12': 'o' } },
    morcego: { base: [rep('.', 18), '.....o......o.....', '.....oo....oo.....', '.....ofoooofo.....', 'oo..o' + F(8) + 'o..oo', 'oaaao' + F(8) + 'oaaao', 'oaaao' + F(8) + 'oaaao',
        '.oaao' + F(8) + 'oaao.', '..oao' + F(8) + 'oao..', '...o.o' + F(6) + 'o.o...', '......o' + F(4) + 'o......', '.......oooo.......', '.......o..o.......', rep('.', 18)],
      col: 5, humor: {
        feliz: { 5: 'feffffef', 6: 'feffffef', 7: 'pffffffp', 8: 'ffmwwmff' },
        preocupado: { 4: 'fmffffmf', 5: 'feffffef', 6: 'feffffef', 7: 'pffffffp', 8: 'fffmmfff' },
        dormindo: { 6: 'fmmffmmf', 7: 'pffffffp', 8: 'fffmmfff' } },
      suor: [[2, 14], [3, 14]] },
    fantasma: { base: ['.....' + rep('o', 8) + '.....', '....o' + F(8) + 'o....', '...o' + F(10) + 'o...', '..o' + F(12) + 'o..', '..o' + F(12) + 'o..', '..o' + F(12) + 'o..', '.o' + F(14) + 'o.',
        'o' + F(16) + 'o', '.o' + F(14) + 'o.', '..o' + F(12) + 'o..', '..o' + F(12) + 'o..', '..o' + F(12) + 'o..', '..offoffooffoffo..', '...oo.oo..oo.oo...'],
      col: 5, humor: {
        feliz: { 4: 'feffffef', 5: 'feffffef', 6: 'pffffffp', 7: 'ffmffmff', 8: 'fffmmfff' },
        preocupado: { 3: 'fmffffmf', 4: 'feffffef', 5: 'feffffef', 6: 'pffffffp', 7: 'fffmmfff', 8: 'ffmffmff' },
        dormindo: { 5: 'fmmffmmf', 6: 'pffffffp', 7: 'fffmmfff' } },
      suor: [[1, 14], [2, 15]] },
    monstro: { base: ['...o' + rep('.', 10) + 'o...', '...ow' + rep('.', 8) + 'wo...', '...ow' + rep('o', 8) + 'wo...', '..o' + F(12) + 'o..', '.o' + F(14) + 'o.', '.o' + F(14) + 'o.',
        'o' + F(16) + 'o', 'o' + F(16) + 'o', 'o' + F(16) + 'o', 'o' + F(16) + 'o', 'o' + F(16) + 'o', '.o' + F(14) + 'o.', '..off' + rep('o', 8) + 'ffo..', '..oooo' + rep('.', 6) + 'oooo..'],
      col: 4, humor: {
        feliz: { 6: 'ffeeffeeff', 7: 'ffeeffeeff', 8: 'fpffffffpf', 9: 'fmwwmmwwmf', 10: 'ffmmmmmmff' },
        preocupado: { 6: 'ffeeffeeff', 7: 'ffeeffeeff', 8: 'fpffffffpf', 9: 'fffmffmfff', 10: 'ffmfmmfmff' },
        dormindo: { 7: 'fmmffffmmf', 8: 'fpffffffpf', 9: 'ffffmmffff' } },
      suor: [[3, 15], [4, 16]] }
  };
  SPRITES.coelho = { base: ['....ooo....ooo....', '...ofpfo..ofpfo...', '...ofpfo..ofpfo...', '...ofpfo..ofpfo...', '...ofpfo..ofpfo...', '...offfoooofffo...',
      '..o' + F(12) + 'o..', '.o' + F(14) + 'o.', '.o' + F(14) + 'o.', '.o' + F(14) + 'o.', '.o' + F(14) + 'o.', '..o' + F(12) + 'o..', '...o' + F(10) + 'o...', '....' + rep('o', 10) + '....'],
    col: 3, humor: {
      feliz: { 7: 'ffeffffffeff', 8: 'ffeffffffeff', 9: 'fpfffppfffpf', 10: 'ffffmffmffff' },
      preocupado: { 7: 'ffeeffffeeff', 8: 'ffeeffffeeff', 9: 'fpfffppfffpf', 10: 'fffffmmfffff' },
      dormindo: { 8: 'ffmmffffmmff', 9: 'fpfffppfffpf', 10: 'ffffmffmffff' } },
    suor: [[5, 15], [6, 16]] };
  SPRITES.fantasminha = { base: [rep('.', 18), rep('.', 18), rep('.', 18), '......' + rep('o', 6) + '......', '.....o' + F(6) + 'o.....', '....o' + F(8) + 'o....', '....o' + F(8) + 'o....',
      '...o' + F(10) + 'o...', '....o' + F(8) + 'o....', '....o' + F(8) + 'o....', '....o' + F(8) + 'o....', '....offoffoffo....', '.....oo.oo.oo.....', rep('.', 18)],
    col: 5, humor: {
      feliz: { 5: 'ffeffeff', 6: 'fpffffpf', 7: 'ffmffmff', 8: 'fffmmfff' },
      preocupado: { 5: 'ffeffeff', 6: 'fpffffpf', 7: 'fffmmfff', 8: 'ffmffmff' },
      dormindo: { 5: 'fmmffmmf', 6: 'fpffffpf', 7: 'fffmmfff' } },
    suor: [[4, 13], [5, 14]] };
  SPRITES.caveira = { base: ['.....' + rep('o', 8) + '.....', '...oo' + F(8) + 'oo...', '..o' + F(12) + 'o..', '.o' + F(14) + 'o.', '.o' + F(14) + 'o.', 'o' + F(16) + 'o', 'o' + F(16) + 'o',
      'o' + F(16) + 'o', '.o' + F(14) + 'o.', '..o' + F(12) + 'o..', '...oo' + F(8) + 'oo...', '....o' + F(8) + 'o....', '....ofmfmmfmfo....', '.....' + rep('o', 8) + '.....'],
    col: 2, humor: {
      feliz: { 5: 'ffeweffffeweff', 6: 'ffeeeffffeeeff', 7: 'ffffffmmffffff', 8: 'fpffffffffffpf' },
      preocupado: { 4: 'ffmffffffffmff', 5: 'ffeeeffffeeeff', 6: 'ffeeeffffeeeff', 7: 'ffffffmmffffff', 8: 'fpffffffffffpf' },
      dormindo: { 6: 'ffmmmffffmmmff', 7: 'ffffffmmffffff', 8: 'fpffffffffffpf' } },
    suor: [[2, 15], [3, 16]] };

  // ======================================================== MASCOTES v2 (pixel art original, 22x20)
  // Cada mascote é feito de formas simples (elipses, triângulos, retângulos) numa grade.
  // O contorno, a sombra e o brilho saem sozinhos; o rosto muda com o humor.
  var MW = 22, MH = 20;
  var MASCOTES_V2 = {
    gato: { corPadrao: 'auto', formas: [
      { t: [[1.6, 11], [2.6, 0.6], [10, 5]] }, { t: [[20.4, 11], [19.4, 0.6], [12, 5]] },
      { e: [11, 12, 9.4, 7] },
      { t: [[3.8, 8.4], [3.8, 3], [7.8, 5.8]], c: 'p' }, { t: [[18.2, 8.4], [18.2, 3], [14.2, 5.8]], c: 'p' }
    ], olhos: [[6, 11], [14, 11]], boca: [11, 13], boca2: 'gato', bochechas: [[3, 14], [17, 14]], brilho: [[5, 7], [6, 7], [4, 8]], bigodes: [12, 14], suor: [18, 6] },
    coelho: { corPadrao: 'branco', formas: [
      { e: [7, 5, 2.4, 5.2] }, { e: [15, 5, 2.4, 5.2] },
      { e: [7, 5.4, 1, 3.6], c: 'p' }, { e: [15, 5.4, 1, 3.6], c: 'p' },
      { e: [11, 13.4, 8.8, 6.2] }
    ], olhos: [[6, 12], [14, 12]], boca: [11, 14], bochechas: [[3, 15], [17, 15]], brilho: [[5, 9], [6, 9]], suor: [19, 9] },
    ursinho: { corPadrao: 'caramelo', formas: [
      { e: [4.6, 5.4, 3, 3] }, { e: [17.4, 5.4, 3, 3] },
      { e: [4.6, 5.4, 1.4, 1.4], c: 'p' }, { e: [17.4, 5.4, 1.4, 1.4], c: 'p' },
      { e: [11, 11.8, 9.2, 7.4] }, { e: [11, 14.6, 3.6, 2.6], c: 'h' }
    ], olhos: [[6, 11], [14, 11]], boca: [11, 15], nariz: [[10, 13], [11, 13]], bochechas: [[3, 14], [17, 14]], brilho: [[5, 7], [6, 7]], suor: [19, 6] },
    morcego: { corPadrao: 'preto', formas: [
      { t: [[8, 8.4], [0.3, 2.6], [1.6, 12.6]], c: 'q' }, { t: [[8, 8.4], [1.6, 12.6], [8, 15]], c: 'q' },
      { t: [[14, 8.4], [21.7, 2.6], [20.4, 12.6]], c: 'q' }, { t: [[14, 8.4], [20.4, 12.6], [14, 15]], c: 'q' },
      { e: [3.4, 13.8, 1.8, 1.6], c: '.' }, { e: [6.6, 15.4, 1.6, 1.4], c: '.' }, { e: [18.6, 13.8, 1.8, 1.6], c: '.' }, { e: [15.4, 15.4, 1.6, 1.4], c: '.' },
      { t: [[7.4, 9], [7.8, 3.8], [10.6, 7.6]] }, { t: [[14.6, 9], [14.2, 3.8], [11.4, 7.6]] },
      { e: [11, 12, 4.8, 4.6] }
    ], linhas: [[6, 9, 1, 3], [6, 10, 2, 11], [6, 11, 5, 13], [15, 9, 20, 3], [15, 10, 19, 11], [15, 11, 16, 13]],
    olhos: [[8, 11], [12, 11]], boca: [11, 14], presas: true, bochechas: [[7, 13], [13, 13]], brilho: [[8, 8]], suor: [16, 6] },
    fantasminha: { corPadrao: 'branco', formas: [
      { e: [11, 9, 7, 6.6] }, { r: [4, 9, 18, 16] },
      { e: [5.6, 16, 1.7, 1.7] }, { e: [9.2, 16.3, 1.7, 1.7] }, { e: [12.8, 16.3, 1.7, 1.7] }, { e: [16.4, 16, 1.7, 1.7] },
      { e: [2.8, 11.6, 1.5, 1.2] }, { e: [19.2, 11.6, 1.5, 1.2] }
    ], olhos: [[7, 8], [13, 8]], boca: [11, 11], bochechas: [[5, 11], [15, 11]], brilho: [[6, 4], [7, 4], [5, 5]], suor: [18, 4] },
    fantasma: { corPadrao: 'branco', formas: [
      { e: [11, 8.6, 7.4, 7] }, { r: [3.6, 8.6, 18.4, 15.2] },
      { e: [5.4, 15.4, 2, 1.8] }, { e: [9.1, 15.9, 2, 1.8] }, { e: [12.9, 15.9, 2, 1.8] }, { e: [16.6, 15.4, 2, 1.8] },
      { e: [2.2, 7.6, 1.4, 2.2] }, { e: [19.8, 7.6, 1.4, 2.2] }
    ], olhos: [[7, 7], [13, 7]], boca: [10, 10], bocaAberta: true, bochechas: [[5, 10], [15, 10]], brilho: [[6, 3], [7, 3], [5, 4]], suor: [18, 2] },
    caveira: { corPadrao: 'creme', formas: [
      { e: [11, 9, 8.2, 7.2] }, { r: [6.4, 12, 15.6, 17.4] },
      { e: [17, 2.6, 1.8, 1.4], c: 'a' }, { e: [20, 2.6, 1.8, 1.4], c: 'a' }, { e: [18.5, 2.6, .7, .7], c: 'a' }
    ], olhos: [[6, 9], [14, 9]], olhosGrandes: true, dentes: true, nariz: [[10, 12], [11, 12]], bochechas: [[3, 12], [17, 12]], brilho: [[5, 4], [6, 4]], suor: [3, 3] },
    monstro: { corPadrao: 'lilas', formas: [
      { t: [[5, 6], [3.4, .4], [8.6, 4.4]], c: 'w' }, { t: [[17, 6], [18.6, .4], [13.4, 4.4]], c: 'w' },
      { e: [11, 11, 9, 7.4] }, { e: [6.4, 18.4, 2.2, 1.2] }, { e: [15.6, 18.4, 2.2, 1.2] }
    ], olhos: [[7, 10], [13, 10]], boca: [11, 13], boca2: 'largo', presas: true, bochechas: [[4, 13], [16, 13]], brilho: [[5, 6], [6, 5]], suor: [19, 6] },
    sapinho: { corPadrao: 'verdinho', formas: [
      { e: [5.6, 6.4, 3.6, 3.4] }, { e: [16.4, 6.4, 3.6, 3.4] },
      { e: [11, 13, 10, 6.2] },
      { e: [5.6, 6.4, 2.3, 2.2], c: 'w' }, { e: [16.4, 6.4, 2.3, 2.2], c: 'w' }
    ], olhos: [[5, 6], [15, 6]], boca: [11, 14], boca2: 'largo', bochechas: [[3, 14], [17, 14]], brilho: [[9, 9], [10, 8]], suor: [20, 9] },
    aranhinha: { corPadrao: 'preto', formas: [
      { e: [11, 11.4, 6.2, 5.6] },
      { e: [9.2, 5.8, 1.6, 1.1], c: 'a' }, { e: [12.8, 5.8, 1.6, 1.1], c: 'a' }, { e: [11, 5.8, .7, .7], c: 'a' }
    ], linhas: [[11, 0, 11, 4], [5, 9, 2, 6], [2, 6, 0, 8], [5, 11, 1, 10], [1, 10, 0, 13], [5, 13, 2, 14], [2, 14, 1, 17], [7, 15, 4, 17], [4, 17, 4, 19],
      [16, 9, 19, 6], [19, 6, 21, 8], [16, 11, 20, 10], [20, 10, 21, 13], [16, 13, 19, 14], [19, 14, 20, 17], [14, 15, 17, 17], [17, 17, 17, 19]],
    olhos: [[8, 10], [13, 10]], miniOlhos: [[7, 8], [15, 8]], boca: [11, 13], bochechas: [[6, 13], [15, 13]], brilho: [[8, 7], [7, 8]], suor: [17, 6] },
  };

  function hexRgb(h) { var n = parseInt(h.slice(1), 16); return [n >> 16, (n >> 8) & 255, n & 255]; }
  function mistura(a, b, t) { var x = hexRgb(a), y = hexRgb(b); return '#' + x.map(function (v, i) { return ('0' + Math.round(v + (y[i] - v) * t).toString(16)).slice(-2); }).join(''); }
  function dentro(f, x, y) {
    var cx = x + .5, cy = y + .5;
    if (f.e) { var dx = (cx - f.e[0]) / f.e[2], dy = (cy - f.e[1]) / f.e[3]; return dx * dx + dy * dy <= 1; }
    if (f.r) return cx >= f.r[0] && cx <= f.r[2] && cy >= f.r[1] && cy <= f.r[3];
    if (f.t) {
      var p = f.t, s = function (a, b) { return (cx - b[0]) * (a[1] - b[1]) - (a[0] - b[0]) * (cy - b[1]); };
      var d1 = s(p[0], p[1]), d2 = s(p[1], p[2]), d3 = s(p[2], p[0]);
      return !((d1 < 0 || d2 < 0 || d3 < 0) && (d1 > 0 || d2 > 0 || d3 > 0));
    }
    return false;
  }
  // monta a grade de letras: f corpo, q asa, p rosa, w branco, a destaque, h claro, o contorno, s sombra, b brilho
  function gradeMascote(sp, humor) {
    var g = [], x, y;
    for (y = 0; y < MH; y++) { g.push([]); for (x = 0; x < MW; x++) g[y].push('.'); }
    sp.formas.forEach(function (f) { for (y = 0; y < MH; y++) for (x = 0; x < MW; x++) if (dentro(f, x, y)) g[y][x] = f.c || 'f'; });
    (sp.linhas || []).forEach(function (L) {
      var x0 = L[0], y0 = L[1], x1 = L[2], y1 = L[3], dx = Math.abs(x1 - x0), dy = -Math.abs(y1 - y0), sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1, er = dx + dy;
      while (true) { if (x0 >= 0 && x0 < MW && y0 >= 0 && y0 < MH) g[y0][x0] = 'O'; if (x0 === x1 && y0 === y1) break; var e2 = 2 * er; if (e2 >= dy) { er += dy; x0 += sx; } if (e2 <= dx) { er += dx; y0 += sy; } }
    });
    if (sp.pernas) [[4, 9, -1, -1], [3, 12, -1, 0], [4, 15, -1, 1], [17, 9, 1, -1], [18, 12, 1, 0], [17, 15, 1, 1]].forEach(function (pp) {
      for (var k = 0; k < 4; k++) { var xx = pp[0] + pp[2] * k, yy = pp[1] + (k < 2 ? pp[3] * k : pp[3] + (k - 1)); if (xx >= 0 && xx < MW && yy >= 0 && yy < MH && g[yy][xx] === '.') g[yy][xx] = 'O'; }
    });
    var cheio = function (c) { return c !== '.' && c !== 'O'; };
    var sombra = {};
    for (y = 0; y < MH; y++) for (x = 0; x < MW; x++) if (g[y][x] === 'f' || g[y][x] === 'q') {
      var baixo = y + 1 >= MH || !cheio(g[y + 1][x]), dir = x + 1 >= MW || !cheio(g[y][x + 1]);
      if (baixo || (dir && y > MH * .45)) sombra[y + ',' + x] = 1;
    }
    Object.keys(sombra).forEach(function (k) { var a = k.split(','); g[+a[0]][+a[1]] = g[+a[0]][+a[1]] === 'q' ? 'Q' : 's'; });
    var borda = [];
    for (y = 0; y < MH; y++) for (x = 0; x < MW; x++) if (g[y][x] === '.') {
      if ((y > 0 && cheio(g[y - 1][x])) || (y < MH - 1 && cheio(g[y + 1][x])) || (x > 0 && cheio(g[y][x - 1])) || (x < MW - 1 && cheio(g[y][x + 1]))) borda.push([y, x]);
    }
    borda.forEach(function (b) { g[b[0]][b[1]] = 'o'; });
    for (y = 0; y < MH; y++) for (x = 0; x < MW; x++) if (g[y][x] === 'O') g[y][x] = 'L';
    var pinta = function (xx, yy, c) { if (xx >= 0 && xx < MW && yy >= 0 && yy < MH) g[yy][xx] = c; };
    (sp.brilho || []).forEach(function (b) { if (g[b[1]][b[0]] === 'f') pinta(b[0], b[1], 'b'); });
    // rosto
    var ol = sp.olhos, bo = sp.boca;
    if (humor === 'dormindo') {
      ol.forEach(function (e) { pinta(e[0] - (sp.olhosGrandes ? 0 : 0), e[1] + 1, 'k'); pinta(e[0] + 1, e[1] + 1, 'k'); pinta(e[0] - 1, e[1], 'k'); pinta(e[0] + 2, e[1], 'k'); });
    } else {
      ol.forEach(function (e) {
        var w = sp.olhosGrandes ? 3 : 2, hh = sp.olhosGrandes ? 3 : 2;
        for (var yy = 0; yy < hh; yy++) for (var xx = 0; xx < w; xx++) pinta(e[0] + xx - (sp.olhosGrandes ? 1 : 0), e[1] + yy, 'k');
        pinta(e[0] - (sp.olhosGrandes ? 1 : 0), e[1], 'w');
        if (humor === 'preocupado') pinta(e[0] + w - 1 - (sp.olhosGrandes ? 1 : 0), e[1] + hh - 1, 'w');
      });
    }
    (sp.miniOlhos || []).forEach(function (e) { pinta(e[0], e[1], humor === 'dormindo' ? 's' : 'k'); });
    if (sp.nariz) sp.nariz.forEach(function (n) { pinta(n[0], n[1], 'M'); });
    if (sp.dentes) { [8, 10, 12, 14].forEach(function (xx) { pinta(xx, 15, 'o'); pinta(xx, 16, 'o'); }); }
    else if (humor === 'dormindo') { pinta(bo[0] - 1, bo[1], 'M'); pinta(bo[0], bo[1], 'M'); }
    else if (sp.bocaAberta) { pinta(bo[0], bo[1], 'M'); pinta(bo[0] + 1, bo[1], 'M'); pinta(bo[0], bo[1] + 1, 'M'); pinta(bo[0] + 1, bo[1] + 1, humor === 'feliz' ? 'p' : 'M'); }
    else if (humor === 'preocupado') { pinta(bo[0] - 2, bo[1] + 1, 'M'); pinta(bo[0] - 1, bo[1], 'M'); pinta(bo[0], bo[1], 'M'); pinta(bo[0] + 1, bo[1] + 1, 'M'); }
    else if (sp.boca2 === 'gato') { pinta(bo[0] - 3, bo[1], 'M'); pinta(bo[0] - 2, bo[1] + 1, 'M'); pinta(bo[0] - 1, bo[1], 'M'); pinta(bo[0], bo[1], 'M'); pinta(bo[0] + 1, bo[1] + 1, 'M'); pinta(bo[0] + 2, bo[1], 'M'); pinta(bo[0] - 1, bo[1] - 1, 'p'); pinta(bo[0], bo[1] - 1, 'p'); }
    else if (sp.boca2 === 'largo') { for (var xx2 = -3; xx2 <= 2; xx2++) pinta(bo[0] + xx2, bo[1] + 1, 'M'); pinta(bo[0] - 4, bo[1], 'M'); pinta(bo[0] + 3, bo[1], 'M'); for (var xx3 = -2; xx3 <= 1; xx3++) pinta(bo[0] + xx3, bo[1] + 2, 'p'); }
    else { pinta(bo[0] - 2, bo[1], 'M'); pinta(bo[0] - 1, bo[1] + 1, 'M'); pinta(bo[0], bo[1] + 1, 'M'); pinta(bo[0] + 1, bo[1], 'M'); }
    if (sp.presas && humor !== 'dormindo') { pinta(bo[0] - 1, bo[1] + (sp.boca2 === 'largo' ? 2 : 2), 'w'); pinta(bo[0], bo[1] + 2, 'w'); }
    if (humor !== 'dormindo') sp.bochechas.forEach(function (b) { pinta(b[0], b[1], 'p'); pinta(b[0] + 1, b[1], 'p'); });
    if (sp.bigodes) sp.bigodes.forEach(function (yy) { pinta(0, yy, 'o'); pinta(1, yy, 'o'); pinta(20, yy, 'o'); pinta(21, yy, 'o'); });
    if (humor === 'preocupado' && sp.suor) { pinta(sp.suor[0], sp.suor[1], 'l'); pinta(sp.suor[0], sp.suor[1] + 1, 'l'); pinta(sp.suor[0] - 1, sp.suor[1] + 1, 'l'); }
    if (humor === 'dormindo') { pinta(MW - 3, 0, 'z'); pinta(MW - 2, 0, 'z'); pinta(MW - 2, 1, 'z'); pinta(MW - 3, 2, 'z'); pinta(MW - 2, 2, 'z'); }
    return g;
  }
  function coresMascote(corpo, escuroCorpo, pal) {
    var contorno = escuroCorpo ? (pal.escuro ? pal.c.contorno : '#14111A') : '#3D3346';
    return {
      f: corpo, s: escuroCorpo ? mistura(corpo, '#000000', .35) : mistura(corpo, '#8A7896', .28),
      b: mistura(corpo, '#FFFFFF', escuroCorpo ? .3 : .75), h: mistura(corpo, '#FFFFFF', .55),
      q: escuroCorpo ? (T.semRosa ? mistura(corpo, '#FFFFFF', .3) : '#E9A3BD') : mistura(corpo, '#3D3346', .42), Q: escuroCorpo ? (T.semRosa ? mistura(corpo, '#FFFFFF', .18) : '#C77898') : mistura(corpo, '#3D3346', .58),
      o: contorno, L: escuroCorpo ? contorno : mistura(corpo, '#3D3346', .62), k: escuroCorpo ? '#FFF6E0' : '#2B2433', M: escuroCorpo ? mistura(corpo, '#FFFFFF', .5) : '#7A4A60', w: escuroCorpo ? '#8C7E99' : '#FFFFFF',
      p: T.semRosa ? (escuroCorpo ? mistura(corpo, '#FFFFFF', .24) : mistura(corpo, '#3D3346', .16)) : '#F59BC2', l: '#8FC3EC', a: pal.c.acento, z: pal.c['acento-texto']
    };
  }
  function desenhoMascote(tipo, humor, cls, pal, corpo, escuroCorpo) {
    var sp = MASCOTES_V2[tipo] || MASCOTES_V2.gato, g = gradeMascote(sp, humor), cor = coresMascote(corpo, escuroCorpo, pal), r = '';
    for (var y = 0; y < MH; y++) for (var x = 0; x < MW; x++) { var ch = g[y][x]; if (cor[ch]) r += '<rect x="' + x + '" y="' + y + '" width="1.02" height="1.02" fill="' + cor[ch] + '"/>'; }
    return '<svg class="' + (cls || '') + '" viewBox="0 0 ' + MW + ' ' + MH + '" shape-rendering="crispEdges" aria-hidden="true">' + r + '</svg>';
  }

  // poses extras do morcego (asas para baixo, para voar; e dormindo de ponta-cabeça)
  MASCOTES_V2.morcegoAsaBaixa = { corPadrao: 'preto', formas: [
      { t: [[8, 9], [0.4, 9.6], [2.2, 18]], c: 'q' }, { t: [[8, 9], [2.2, 18], [7.8, 15.8]], c: 'q' },
      { t: [[14, 9], [21.6, 9.6], [19.8, 18]], c: 'q' }, { t: [[14, 9], [19.8, 18], [14.2, 15.8]], c: 'q' },
      { e: [4.4, 18.6, 1.6, 1.5], c: '.' }, { e: [17.6, 18.6, 1.6, 1.5], c: '.' },
      { t: [[7.4, 9], [7.8, 3.8], [10.6, 7.6]] }, { t: [[14.6, 9], [14.2, 3.8], [11.4, 7.6]] },
      { e: [11, 12, 4.8, 4.6] }
    ], linhas: [[6, 10, 1, 10], [6, 11, 3, 16], [15, 10, 20, 10], [15, 11, 18, 16]],
    olhos: [[8, 11], [12, 11]], boca: [11, 14], presas: true, bochechas: [[7, 13], [13, 13]], brilho: [[8, 8]], suor: [16, 6] };
  MASCOTES_V2.morcegoDormindo = { corPadrao: 'preto', formas: [
      { e: [11, 8.6, 5.8, 7.2], c: 'q' },
      { e: [11, 14.2, 4.4, 3.8] },
      { t: [[7.6, 15.4], [8, 19.4], [10, 16.8]] }, { t: [[14.4, 15.4], [14, 19.4], [12, 16.8]] }
    ], linhas: [[9, 0, 9, 1], [13, 0, 13, 1], [8, 4, 7, 10], [14, 4, 15, 10], [11, 3, 11, 9]],
    olhos: [[9, 13], [12, 13]], boca: [11, 16], bochechas: [[7, 15], [14, 15]], brilho: [[8, 3]], suor: [17, 6] };

  // ======================================================== ENFEITES EM PIXEL ART (v8)
  function pixLinhas(linhas, cores, cls, estilo) {
    var r = '', w = 0;
    linhas.forEach(function (l, y) { w = Math.max(w, l.length); for (var x = 0; x < l.length; x++) { var c = cores[l.charAt(x)]; if (c) r += '<rect x="' + x + '" y="' + y + '" width="1.02" height="1.02" fill="' + c + '"/>'; } });
    return '<svg class="' + (cls || '') + '"' + (estilo ? ' style="' + estilo + '"' : '') + ' viewBox="0 0 ' + w + ' ' + linhas.length + '" shape-rendering="crispEdges" aria-hidden="true">' + r + '</svg>';
  }
  function espelho(linhas) { return linhas.map(function (l) { return l.split('').reverse().join(''); }); }
  var PX_LACO = ['.qq.......qq.', 'qaaq.....qaaq', 'qabaq...qabaq', 'qaaaaqqqaaaaq', 'qaaaqbbbqaaaq', '.qaaqbbbqaaq.', '..qqqqqqqqq..', '....qaq.qaq..', '...qaq...qaq.', '...qq.....qq.'];
  var PX_CHIFRE = ['.....o', '....oa', '...oao', '..oaao', '.oaaao', 'oaaaao', 'oooooo'];
  var PX_ASA = ['oo..........', 'oaoo.......o', 'oaaaoo...ooo', 'oaaaaaoooaao', '.oaaaaaaaaao', '.oaaoaaaoaao', '..oo.oaao.oo', '.....oo.oo..'];
  var PX_CURATIVO = ['......oo.', '.....obbo', '....obbbo', '...opppo.', '..opdpo..', '.opppo...', 'obbbo....', 'obbo.....', '.oo......'];
  var PX_CANTO = ['kkkkkkkk.k.', 'kaaaaaakkak', 'kakkkkkk.k.', 'kak........', 'kak........', 'kak........', 'kak........', 'kak........', '.k.........', 'kak........', '.k.........'];
  var PX_PATA = ['.ooo.', 'offfo', 'ofofo', '.ooo.'];
  var PX_GOTA = ['.a.', 'aaa', '.a.'];
  function laco(cls, estilo) { return pixLinhas(PX_LACO, { q: 'var(--acento-texto)', a: 'var(--acento)', b: 'var(--destaque)' }, 'px-laco ' + (cls || ''), estilo); }
  function chifre(cls) { return '<svg class="' + cls + '" viewBox="0 0 16 14" aria-hidden="true"><path d="M2 13 Q4 4 13 1 Q10 7 13 13 Z" fill="var(--acento)" stroke="var(--contorno)" stroke-width="2" stroke-linejoin="round"/></svg>'; }
  function asa(cls) { return '<svg class="' + cls + '" viewBox="0 0 26 20" aria-hidden="true"><path d="M25 4 Q14 0 2 6 Q6 8 5 11 Q9 9 11 12 Q13 9 16 12 Q18 8 25 10 Z" fill="var(--contorno)" stroke="var(--contorno)" stroke-width="1.6" stroke-linejoin="round"/></svg>'; }
  var CURATIVO = '';
  function curativo() { return pixLinhas(PX_CURATIVO, { o: 'var(--contorno)', b: '#FFE6EF', p: '#F6C2D4', d: '#B98AA0' }, 'curativo'); }
  function cantoneira(cls) { return pixLinhas(PX_CANTO, { k: 'var(--cruz)', a: 'var(--acento)' }, 'canto ' + cls); }
  function molduraFundo(pal) {
    var k = pal.escuro ? pal.c.contorno : '#2E2833', a = pal.c.acento;
    var url = function (linhas, w, h) {
      var r = '';
      linhas.forEach(function (l, y) { for (var x = 0; x < l.length; x++) { var c = l.charAt(x) === 'k' ? k : l.charAt(x) === 'a' ? a : null; if (c) r += "<rect x='" + x + "' y='" + y + "' width='1' height='1' fill='" + c + "'/>"; } });
      var svg = "<svg xmlns='http://www.w3.org/2000/svg' width='" + w + "' height='" + h + "' viewBox='0 0 " + linhas[0].length + ' ' + linhas.length + "' shape-rendering='crispEdges'>" + r + "</svg>";
      return "url(\"data:image/svg+xml," + svg.replace(/</g, '%3C').replace(/>/g, '%3E').replace(/#/g, '%23') + "\")";
    };
    var tl = PX_CANTO, tr = espelho(PX_CANTO), bl = PX_CANTO.slice().reverse(), br = espelho(PX_CANTO).reverse();
    var lado = 22, m = '5px';
    return [url(tl, lado, lado) + ' left ' + m + ' top ' + m + ' no-repeat', url(tr, lado, lado) + ' right ' + m + ' top ' + m + ' no-repeat',
      url(bl, lado, lado) + ' left ' + m + ' bottom 92px no-repeat', url(br, lado, lado) + ' right ' + m + ' bottom 92px no-repeat',
      url(['k', 'a', 'k'], 2, 6) + ' left 0 top ' + m + ' repeat-x', url(['k', 'a', 'k'], 2, 6) + ' left 0 bottom 102px repeat-x',
      url(['kak'], 6, 2) + ' left ' + m + ' top 0 repeat-y', url(['kak'], 6, 2) + ' right ' + m + ' top 0 repeat-y'].join(', ');
  }
  function patas(corpo, contorno) { var p = pixLinhas(PX_PATA, { o: contorno, f: corpo }, 'pata'); return '<span class="patas" aria-hidden="true">' + p + p + '</span>'; }
  // coração de renda: coração branco, borda de furinhos e cruz no meio
  function coracaoRenda(estilo) {
    var W = 17, H = 15, g = [], x, y;
    for (y = 0; y < H; y++) { g.push([]); for (x = 0; x < W; x++) g[y].push('.'); }
    var dentro = function (xx, yy) { var X = (xx + .5 - W / 2) / (W / 2 - 1.6), Y = -((yy + .5 - H / 2 + .8) / (H / 2 - 1.6)); var a = X * X + Y * Y - 1; return a * a * a - X * X * Y * Y * Y <= 0; };
    for (y = 0; y < H; y++) for (x = 0; x < W; x++) if (dentro(x, y)) g[y][x] = 'w';
    for (y = 0; y < H; y++) for (x = 0; x < W; x++) if (g[y][x] === '.') {
      var viz = (y > 0 && g[y - 1][x] === 'w') || (y < H - 1 && g[y + 1][x] === 'w') || (x > 0 && g[y][x - 1] === 'w') || (x < W - 1 && g[y][x + 1] === 'w');
      if (viz) g[y][x] = (x + y) % 2 ? 'l' : 'm';
    }
    for (y = 4; y <= 10; y++) g[y][8] = 'k';
    for (x = 6; x <= 10; x++) g[6][x] = 'k';
    return pixLinhas(g.map(function (l) { return l.join(''); }), { w: '#FFF7FB', l: '#FFF7FB', m: '#C9B6C3', k: '#2E2833' }, 'patch', estilo);
  }
  // teia de canto em pixel: raios e anéis com retas de pixel
  function teiaPixel(cls) {
    var N = 18, g = [], x, y;
    for (y = 0; y < N; y++) { g.push([]); for (x = 0; x < N; x++) g[y].push('.'); }
    var reta = function (x0, y0, x1, y1, c) { var dx = Math.abs(x1 - x0), dy = -Math.abs(y1 - y0), sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1, er = dx + dy; while (true) { if (x0 >= 0 && x0 < N && y0 >= 0 && y0 < N) g[y0][x0] = c; if (x0 === x1 && y0 === y1) break; var e2 = 2 * er; if (e2 >= dy) { er += dy; x0 += sx; } if (e2 <= dx) { er += dx; y0 += sy; } } };
    var raios = [[17, 0], [17, 6], [16, 12], [12, 16], [6, 17], [0, 17]];
    raios.forEach(function (r) { reta(0, 0, r[0], r[1], 'w'); });
    [5, 10, 15].forEach(function (rr) {
      var pts = raios.map(function (r) { var len = Math.sqrt(r[0] * r[0] + r[1] * r[1]); return [Math.round(r[0] / len * rr), Math.round(r[1] / len * rr)]; });
      for (var i = 0; i < pts.length - 1; i++) reta(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], 'w');
    });
    g[7][4] = 'a'; g[11][9] = 'a'; g[4][13] = 'a';
    return pixLinhas(g.map(function (l) { return l.join(''); }), { w: 'var(--contorno)', a: 'var(--acento)' }, 'teia-px ' + (cls || ''));
  }
  // pendentes do varal
  var PX_CRUZ_MINI = ['..o..', '.oao.', 'ooaoo', 'oaaao', 'ooaoo', '.oao.', '.oao.', '.oao.', '..o..'];
  var PX_MORC_DORME = ['.o...o.', 'ooo.ooo', 'oaooooa', 'oaoooao', '.ooooo.', '.oeoeo.', '..ooo..', '...o...'];
  var PX_CORACAO = ['.oo.oo.', 'oaaoaao', 'oabaaao', 'oaaaaao', '.oaaao.', '..oao..', '...o...'];
  var PX_ESTRELA = ['...a...', '...a...', '..aba..', 'aabbbaa', '..aba..', '...a...', '...a...'];
  var PX_MORANGO_MINI = ['..g.g..', '.ggggg.', 'orrrrro', 'orwrrwo', 'orrrrro', '.orwro.', '..ooo..'];
  function pendente(tipo) {
    if (tipo === 'cruz') return pixLinhas(PX_CRUZ_MINI, { o: 'var(--cruz)', a: 'var(--acento)' });
    if (tipo === 'morcego') return pixLinhas(PX_MORC_DORME, { o: 'var(--cruz)', a: 'var(--cruz-borda)', e: 'var(--acento)' });
    if (tipo === 'coracao') return pixLinhas(PX_CORACAO, { o: 'var(--contorno)', a: 'var(--acento)', b: 'var(--destaque)' });
    if (tipo === 'estrela') return pixLinhas(PX_ESTRELA, { a: 'var(--acento)', b: 'var(--destaque)' });
    if (tipo === 'morango') return pixLinhas(PX_MORANGO_MINI, { o: '#4A3540', r: '#F0627E', w: '#FFE9A8', g: '#5FBF7A' });
    if (tipo === 'laco') return pixLinhas(PX_LACO, { q: 'var(--acento-texto)', a: 'var(--acento)', b: 'var(--destaque)' });
    return '';
  }
  // borda de renda em pixel (vira imagem com as cores do tema)
  function rendaURL(pal) {
    var L = ['llllllll', 'lllbblll', 'cllllllc', '.cllllc.', '..cccc..'], cor = { l: pal.c.sup, b: pal.c.fundo, c: pal.c.contorno }, r = '';
    L.forEach(function (l, y) { for (var x = 0; x < 8; x++) { var c = cor[l.charAt(x)]; if (c) r += "<rect x='" + x + "' y='" + y + "' width='1' height='1' fill='" + c + "'/>"; } });
    var svg = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='10' viewBox='0 0 8 5' shape-rendering='crispEdges'>" + r + "</svg>";
    return "url(\"data:image/svg+xml," + svg.replace(/</g, '%3C').replace(/>/g, '%3E').replace(/#/g, '%23') + "\")";
  }

  function corCorpoHex(nome, pal) { var c = CORES_CORPO[nome] || {}; return c.c || (c.dyn ? (pal || paleta()).c[c.dyn] : '#FFFFFF'); }
  function corEscura(hex) { var r = hexRgb(hex); return (0.299 * r[0] + 0.587 * r[1] + 0.114 * r[2]) / 255 < .45; }
  function corDoCorpo(tipo, corNome, pal) {
    var nome = corNome || T.corMascote;
    if (nome === 'auto') nome = COR_PADRAO_MASCOTE[tipo] || (pal.escuro ? 'preto' : 'branco');
    return nome;
  }
  function spriteSVG(tipo, humor, classe, pal, corNome) {
    pal = pal || paleta();
    var nome = corDoCorpo(tipo, corNome, pal);
    var hex = corCorpoHex(nome, pal); return desenhoMascote(MASCOTES_V2[tipo] ? tipo : 'gato', humor, classe, pal, hex, corEscura(hex));
  }
  function gatoLiso(humor, classe, pal, corNome) {
    pal = pal || paleta();
    var nome = corDoCorpo('fofo', corNome, pal), escuroCorpo = !!CORPOS_ESCUROS[nome], p = pal.c;
    var c = { corpo: CORES_CORPO[nome].c, contorno: escuroCorpo ? p.contorno : (pal.escuro ? '#3A2F45' : p.texto), orelha: escuroCorpo ? p.acento : '#FFB3D1', olho: escuroCorpo ? '#F9E08B' : '#3A2F45', nariz: p.acento, bigode: escuroCorpo ? p.apagado : '#3A2F45', bochecha: escuroCorpo ? null : '#FFB3D1' };
    var s = 'stroke="' + c.contorno + '" stroke-width="2.4" stroke-linejoin="round"', olhos, boca;
    if (humor === 'feliz') { olhos = '<path d="M20 35 Q24 30 28 35 M36 35 Q40 30 44 35" fill="none" stroke="' + c.olho + '" stroke-width="2.8" stroke-linecap="round"/>'; boca = '<path d="M28.5 43 Q30.5 46 32 43 Q33.5 46 35.5 43" fill="none" stroke="' + c.olho + '" stroke-width="2" stroke-linecap="round"/>'; }
    else if (humor === 'preocupado') { olhos = '<circle cx="24" cy="35" r="3.2" fill="' + c.olho + '"/><circle cx="40" cy="35" r="3.2" fill="' + c.olho + '"/><path d="M19.5 29 L27 27.5 M44.5 29 L37 27.5" stroke="' + c.olho + '" stroke-width="2.2" stroke-linecap="round"/>'; boca = '<path d="M28.5 46 Q32 42.5 35.5 46" fill="none" stroke="' + c.olho + '" stroke-width="2" stroke-linecap="round"/>'; }
    else { olhos = '<path d="M20 34 Q24 38 28 34 M36 34 Q40 38 44 34" fill="none" stroke="' + c.olho + '" stroke-width="2.6" stroke-linecap="round"/>'; boca = '<path d="M29.5 43 Q32 45 34.5 43" fill="none" stroke="' + c.olho + '" stroke-width="2" stroke-linecap="round"/>'; }
    return '<svg class="' + (classe || '') + '" viewBox="0 0 64 58" aria-hidden="true"><polygon points="13,31 15,7 31,22" fill="' + c.corpo + '" ' + s + '/><polygon points="51,31 49,7 33,22" fill="' + c.corpo + '" ' + s + '/>' +
      '<polygon points="17.5,26 18.5,14 26.5,21.5" fill="' + c.orelha + '"/><polygon points="46.5,26 45.5,14 37.5,21.5" fill="' + c.orelha + '"/><ellipse cx="32" cy="37" rx="21" ry="17" fill="' + c.corpo + '" ' + s + '/>' +
      (c.bochecha ? '<ellipse cx="19.5" cy="42" rx="3.6" ry="2.2" fill="' + c.bochecha + '"/><ellipse cx="44.5" cy="42" rx="3.6" ry="2.2" fill="' + c.bochecha + '"/>' : '') +
      olhos + '<path d="M30 39.5 L34 39.5 L32 42 Z" fill="' + c.nariz + '"/>' + boca + '<path d="M15 40 L5 38.5 M15 43.5 L5 45 M49 40 L59 38.5 M49 43.5 L59 45" stroke="' + c.bigode + '" stroke-width="1.6" stroke-linecap="round"/></svg>';
  }
  function mascote(humor, classe, tipo, pal, corNome) {
    tipo = tipo || T.mascote;
    if (tipo === 'nenhum') return '';
    if (tipo === 'figurinha') return figurinha ? '<img class="' + (classe || '') + '" src="' + figurinha + '" alt="">' : spriteSVG('gato', humor, classe, pal, corNome);
    if (tipo === 'fofo') tipo = 'gato';
    return spriteSVG(MASCOTES_V2[tipo] ? tipo : 'gato', humor, classe, pal, corNome);
  }

  // ======================================================== enfeites
  var CORACAO = '<svg viewBox="0 0 9 8" shape-rendering="crispEdges" aria-hidden="true"><path class="coracao" stroke-width="1" d="M1.5 1.5h2v1h2v-1h2v1h1v2h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-2h1z"/></svg>';
  var CORACAO_P = 'M1 0h2v1h1V0h2v1h1v2H6v1H5v1H4v1H3V5H2V4H1V3H0V1h1z';
  function coracaoSolto(estilo) { return '<svg class="coracao-solto" style="' + estilo + '" viewBox="0 0 7 6" shape-rendering="crispEdges" aria-hidden="true"><path d="' + CORACAO_P + '"/></svg>'; }
  function estrela(estilo) { return '<svg class="estrela" style="' + estilo + '" viewBox="0 0 7 7" shape-rendering="crispEdges" aria-hidden="true"><path d="M3 0h1v2h1v1h2v1H5v1H4v2H3V5H2V4H0V3h2V2h1z"/></svg>'; }
  function caveira() { return '<svg viewBox="0 0 7 7" shape-rendering="crispEdges" aria-hidden="true"><path fill="var(--sup)" stroke="var(--contorno)" stroke-width=".6" d="M1 0h5v1h1v3H6v1H5v2H2V5H1V4H0V1h1z"/><path fill="var(--contorno)" d="M1 2h2v2H1zM4 2h2v2H4zM3 4h1v1H3zM2 5h1v1H2zM4 5h1v1H4z"/></svg>'; }
  // pixel art a partir de linhas de texto; cada letra é uma cor
  function pix(linhas, cores, cls, estilo, rotulo) {
    var r = '', w = linhas[0].length;
    linhas.forEach(function (l, y) { for (var x = 0; x < l.length; x++) { var ch = l.charAt(x); if (cores[ch]) r += '<rect x="' + x + '" y="' + y + '" width="1.02" height="1.02" fill="' + cores[ch] + '"/>'; } });
    return '<svg class="' + (cls || '') + '"' + (estilo ? ' style="' + estilo + '"' : '') + ' viewBox="0 0 ' + w + ' ' + linhas.length + '" shape-rendering="crispEdges" ' + (rotulo ? 'role="img" aria-label="' + rotulo + '"' : 'aria-hidden="true"') + '>' + r + '</svg>';
  }
  // cruz gótica: corpo + contorno automático + cruz interna rosa
  // cruz gótica desenhada à mão: o = contorno, c = corpo, a = cruz rosa de dentro
  var CRUZ = [
    '.....ooooo.....',
    '.....occco.....',
    '......oao......',
    '......oao......',
    '.oo...oao...oo.',
    'occooooaooooccо',
    'oaaaaaaaaaaaaao',
    'occooooaooooccо',
    '.oo...oao...oo.',
    '......oao......',
    '......oao......',
    '......oao......',
    '......oao......',
    '.....ocaco.....',
    '.....occco.....',
    '.....ooooo.....'
  ].map(function (l) { return l.replace(/о/g, 'o'); });
  function gradeCruz(variante) {
    var linhas = CRUZ.slice();
    if (variante === 'laco') {
      var laco = ['.qq...qq.', 'qaaq.qaaq', 'qabaqabaq', '.qaaqaaq.', '..qqaqq..', '..qa.aq..', '.qa...aq.', '.q.....q.'];
      laco.forEach(function (l, i) { var row = linhas[4 + i].split(''); for (var k = 0; k < l.length; k++) if (l.charAt(k) !== '.') row[3 + k] = l.charAt(k); linhas[4 + i] = row.join(''); });
    }
    return linhas;
  }
  function cruz(estilo, variante) {
    var cores = { c: 'var(--cruz)', o: 'var(--cruz-borda)', a: 'var(--acento)', b: 'var(--destaque)', q: 'var(--acento-texto)', w: 'var(--cruz-borda)' };
    if (variante === 'asas') {
      var base = gradeCruz(), _x = 0, asaE = ['.....w', '...wwa', '.wwaaa', 'wwaaaa', 'waaaww', '.wwa.w', '..w.w.', '......'];
      var linhas = base.map(function (l, y) { return (y >= 3 && y < 11 ? asaE[y - 3] : '......') + l + (y >= 3 && y < 11 ? asaE[y - 3].split('').reverse().join('') : '......'); });
      return pix(linhas, cores, 'cruz', estilo);
    }
    return pix(gradeCruz(variante), cores, 'cruz', estilo);
  }
  var COMIDA_CORES = { o: '#4A3540', r: '#F0627E', w: '#FFE9A8', g: '#5FBF7A', p: '#FFB6D2', b: '#F6D49A', y: '#E9B872', c: '#E8466A', k: '#2E3B33', e: '#3A2F45', m: '#F59BC2', n: '#FFFFFF' };
  var MORANGO = ['....g.g....', '...ggggg...', '..oogggoo..', '.orrrrrrro.', 'orrwrrrrwro', 'orrrrrwrrro', 'orwrrrrrrro', '.orrrwrrro.', '.orrrrrwro.', '..orrrrro..', '...orwro...', '....ooo....'];
  var BOLINHO = ['.....oo.....', '....occo....', '...oooooo...', '..oppppnpo..', '.oppnppppppo', '.opppppppnpo', 'oooooooooooo', '.obybybybyo.', '.obybybybyo.', '..obybybyo..', '..oooooooo..'];
  var ONIGIRI = ['.....oo.....', '....onno....', '...onnnno...', '..onnnnnno..', '.onnennenno.', '.onmnnnnmno.', 'onnkkkkkknno', 'onnkkkkkknno', 'onnkkkkkknno', '.ookkkkkkoo.', '..oooooooo..'];
  var COELHO_PX = ['.oo.....oo.', 'o..o...o..o', 'o..ooooo..o', 'o.........o', 'o..o...o..o', 'o....o....o', 'o.........o', '.o.......o.', '..ooooooo..'];
  function comida(qual, estilo) { return pix(qual === 'bolinho' ? BOLINHO : qual === 'onigiri' ? ONIGIRI : MORANGO, COMIDA_CORES, 'comida', estilo); }
  // cada conjunto tem carinhas para mês tranquilo (feliz), mês apertado (preocupado) e lista vazia (dormindo)
  var CARINHAS = {
    fofinha:    { nome: 'fofinha', feliz: ['(˶ᵔ ᵕ ᵔ˶)', '(｡•ᴗ•｡)', '(⸝⸝ᵕᴗᵕ⸝⸝)'], preocupado: ['(｡•́︿•̀｡)', '(；へ：)', '(⊙_☉)'], dormindo: ['(－_－) zz', '(˘ω˘)'] },
    apaixonada: { nome: 'apaixonada', feliz: ['(｡♥‿♥｡)', '(♡˙︶˙♡)', '( ˘ ³˘)♥'], preocupado: ['(´；ω；`)♡', '(｡ŏ﹏ŏ)♡'], dormindo: ['(˘ω˘)♡ zz'] },
    timida:     { nome: 'tímida', feliz: ['(⁄ ⁄•⁄ω⁄•⁄ ⁄)', '(〃▽〃)', '(*/ω＼*)'], preocupado: ['(〃＞＿＜;〃)', '(⸝⸝⸝°_°⸝⸝⸝)'], dormindo: ['(〃ᴗ〃) zz'] },
    animada:    { nome: 'animada', feliz: ['٩(◕‿◕)۶', 'ヽ(•‿•)ノ', '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'], preocupado: ['Σ(°△°|||)', '(°ロ°) !'], dormindo: ['(¦3[▓▓]'] },
    gatinho:    { nome: 'gatinho', feliz: ['(=^･ω･^=)', 'ฅ^•ﻌ•^ฅ', '(^・ω・^ )'], preocupado: ['(=；ω；=)', '(=ＴェＴ=)'], dormindo: ['(=˘ω˘=) zz', '(=－ω－=)'] },
    ursinho:    { nome: 'ursinho', feliz: ['ʕ•ᴥ•ʔ', 'ʕ ᵔᴥᵔ ʔ', 'ʕ￫ᴥ￩ʔ'], preocupado: ['ʕ´•ᴥ•`ʔ', 'ʕ;ᴥ;ʔ'], dormindo: ['ʕ-ᴥ-ʔ zz'] },
    coelhinho:  { nome: 'coelhinho', feliz: ['૮ ˶ᵔ ᵕ ᵔ˶ ა', '૮₍ ˶•⤙•˶ ₎ა'], preocupado: ['૮(˶ㅠ︿ㅠ)ა', '૮ ˙Ⱉ˙ ა'], dormindo: ['૮ ˘ﻌ˘ ა zz'] },
    diabinha:   { nome: 'diabinha', feliz: ['(｀∀´)Ψ', '(¬‿¬)', 'ψ(｀∇´)ψ'], preocupado: ['(ಠ︿ಠ)', '(╥﹏╥)'], dormindo: ['(￣ρ￣) zz'] },
    classica:   { nome: 'clássica', normal: true, feliz: ['^_^', '(^-^)', '^.^'], preocupado: ['(-_-;)', '(°_°)'], dormindo: ['(-.-) zz'] },
    simples:    { nome: 'simples', normal: true, feliz: [':)', ':D', '(:'], preocupado: [':/', 'D:'], dormindo: ['-_- zz'] },
    tranquila:  { nome: 'de boa', normal: true, feliz: ['(￣▽￣)', 'b(￣▽￣)d', '(⌐■_■)'], preocupado: ['(￣ー￣;)', '(ಠ_ಠ)'], dormindo: ['(￣o￣) zzZ'] }
  };
  var KAOMOJI = CARINHAS.fofinha;
  function kaomoji(humor) { var c = CARINHAS[T.carinhas] || CARINHAS.fofinha, l = c[humor] || c.feliz; return l[(S.mes + (humor === 'feliz' ? 0 : 1)) % l.length]; }
  function escolherCarinhas() {
    var atual = CARINHAS[T.carinhas] ? T.carinhas : 'fofinha';
    var bt = function (k) { var c = CARINHAS[k]; return '<button type="button" class="carinha-op" data-carinhas="' + k + '" aria-pressed="' + (atual === k) + '"><span class="carinha-grande">' + esc(c.feliz[0]) + '</span><span class="carinha-humores">' + esc(c.preocupado[0]) + ' · ' + esc(c.dormindo[0]) + '</span><b>' + esc(c.nome) + '</b></button>'; };
    var ks = Object.keys(CARINHAS);
    return '<span class="grupo-rotulo" style="display:block;margin-bottom:6px">fofas</span><div class="carinhas-op">' + ks.filter(function (k) { return !CARINHAS[k].normal; }).map(bt).join('') + '</div>' +
      '<span class="grupo-rotulo" style="display:block;margin:12px 0 6px">normais</span><div class="carinhas-op">' + ks.filter(function (k) { return CARINHAS[k].normal; }).map(bt).join('') + '</div>' +
      '<p class="dica" style="margin-top:8px">a carinha muda com o mês: feliz quando sobra dinheiro, preocupada quando aperta.</p>';
  }
  var MORC = ['o...o.o...o', 'oo..ooo..oo', 'ooooooooooo', '.ooo.o.ooo.', '..o.....o..'];
  function morceguinho(estilo) {
    var r = '';
    MORC.forEach(function (l, y) { for (var x = 0; x < 11; x++) if (l.charAt(x) === 'o') r += '<rect x="' + x + '" y="' + y + '" width="1.02" height="1.02"/>'; });
    return '<svg class="morceguinho" style="' + estilo + '" viewBox="0 0 11 5" shape-rendering="crispEdges" aria-hidden="true"><g fill="var(--contorno)">' + r + '</g><rect x="4" y="2" width="1" height="1" fill="var(--acento)"/><rect x="6" y="2" width="1" height="1" fill="var(--acento)"/></svg>';
  }
  var ARANHA = '<svg class="aranha" viewBox="0 0 12 40" shape-rendering="crispEdges" aria-hidden="true"><rect x="5.5" y="0" width="1" height="30" fill="var(--contorno)" opacity=".6"/><g fill="var(--contorno)"><path d="M4 30h4v1h1v3H8v1H4v-1H3v-3h1z"/><path d="M1 30h2v1H1zM9 30h2v1H9zM0 32h3v1H0zM9 32h3v1H9zM1 34h2v1H1zM9 34h2v1H9z"/></g><rect x="4" y="32" width="1" height="1" fill="var(--acento)"/><rect x="7" y="32" width="1" height="1" fill="var(--acento)"/></svg>';
  function decorHTML() { return ''; }


  function tag(texto, extraCls) { return '<span class="tag' + (extraCls ? ' ' + extraCls : '') + '"><svg viewBox="0 0 7 6" shape-rendering="crispEdges" fill="currentColor" aria-hidden="true"><path d="' + CORACAO_P + '"/></svg>' + esc(texto) + '</span>'; }

  function fundoURL(tipo, pal) {
    var cor = encodeURIComponent(pal.padrao), op = pal.escuro ? '.13' : '1', svg;
    if (tipo === 'coracoes') svg = "<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' shape-rendering='crispEdges'><g fill='" + cor + "' fill-opacity='" + op + "'><path d='M3 4h2v1h1V4h2v1h1v2H8v1H7v1H6v1H5V9H4V8H3V7H2V5h1z'/><rect x='19' y='17' width='1' height='5'/><rect x='17' y='19' width='5' height='1'/></g></svg>";
    else if (tipo === 'estrelas') svg = "<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' shape-rendering='crispEdges'><g fill='" + cor + "' fill-opacity='" + (pal.escuro ? '.22' : '1') + "'><path d='M8 4h1v2h2v1H9v2H8V7H6V6h2z'/><path d='M27 20h3v1h-2v1h-1v3h1v1h2v1h-3v-1h-1v-1h-1v-3h1v-1h1z'/><rect x='30' y='6' width='1' height='1'/><rect x='14' y='30' width='1' height='1'/><rect x='4' y='22' width='1' height='1'/></g></svg>";
    else if (tipo === 'morcegos') svg = "<svg xmlns='http://www.w3.org/2000/svg' width='44' height='40' shape-rendering='crispEdges'><g fill='" + cor + "' fill-opacity='" + (pal.escuro ? '.2' : '1') + "'><path d='M4 6h1v1h3v1h1V6h1v1h3V6h1v2h1v1h-2v1h-2v1H9v-1H7V9H5V8H4z'/><path d='M26 24h1v1h3v1h1v-2h1v1h3v-1h1v2h1v1h-2v1h-2v1h-2v-1h-2v-1h-2v-1h-1z'/></g></svg>";
    else if (tipo === 'caveiras') svg = "<svg xmlns='http://www.w3.org/2000/svg' width='34' height='34' shape-rendering='crispEdges'><g fill='" + cor + "' fill-opacity='" + (pal.escuro ? '.2' : '1') + "' fill-rule='evenodd'><path d='M5 4h5v1h1v3h-1v1H9v2H6V9H5V8H4V5h1zM5 6v2h2V6zM8 6v2h2V6z'/><path d='M22 20h5v1h1v3h-1v1h-1v2h-3v-2h-1v-1h-1v-3h1zM22 22v2h2v-2zM25 22v2h2v-2z'/></g></svg>";
    else if (tipo === 'teia') svg = "<svg xmlns='http://www.w3.org/2000/svg' width='56' height='56'><g fill='none' stroke='" + cor + "' stroke-opacity='" + (pal.escuro ? '.25' : '1') + "' stroke-width='1'><path d='M28 8V48M8 28H48M14 14L42 42M42 14L14 42'/><path d='M28 16L36 20L40 28L36 36L28 40L20 36L16 28L20 20Z'/><path d='M28 22L32 24L34 28L32 32L28 34L24 32L22 28L24 24Z'/></g></svg>";
    else if (tipo === 'lacinhos') svg = "<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' shape-rendering='crispEdges'><g fill='" + cor + "' fill-opacity='" + (pal.escuro ? '.22' : '1') + "'><path d='M4 5h2v1h1v1h1V6h1V5h2v5H9V9H8V8H7v1H6v1H4z'/><path d='M22 23h2v1h1v1h1v-1h1v-1h2v5h-2v-1h-1v-1h-1v1h-1v1h-2z'/></g></svg>";
    else if (tipo === 'nuvens') svg = "<svg xmlns='http://www.w3.org/2000/svg' width='60' height='48' shape-rendering='crispEdges'><g fill='" + cor + "' fill-opacity='" + (pal.escuro ? '.16' : '1') + "'><path d='M8 10h3V8h2V6h6v2h2v2h3v2h1v3H6v-3h2z'/><path d='M36 32h2v-2h2v-1h4v1h2v2h2v3H35v-2h1z'/></g></svg>";
    else if (tipo === 'vichy') svg = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><g fill='" + cor + "' fill-opacity='" + (pal.escuro ? '.09' : '.55') + "'><rect width='12' height='24'/><rect width='24' height='12'/></g></svg>";
    else if (tipo === 'listras') svg = "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'><rect width='9' height='20' fill='" + cor + "' fill-opacity='" + (pal.escuro ? '.1' : '.6') + "'/></svg>";
    else if (tipo === 'linhas') svg = "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='22'><rect y='21' width='10' height='1' fill='" + cor + "' fill-opacity='" + op + "'/></svg>";
    else if (tipo === 'xadrez') svg = "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><g fill='" + cor + "' fill-opacity='" + (pal.escuro ? '.10' : '.45') + "'><rect y='12' width='32' height='8'/><rect x='12' width='8' height='32'/></g><g fill='" + cor + "' fill-opacity='" + (pal.escuro ? '.08' : '.35') + "'><rect y='26' width='32' height='1'/><rect x='26' width='1' height='32'/></g></svg>";
    else if (tipo === 'pontos') svg = "<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'><circle cx='4' cy='4' r='1.6' fill='" + cor + "' fill-opacity='" + op + "'/><circle cx='13' cy='13' r='1.6' fill='" + cor + "' fill-opacity='" + op + "'/></svg>";
    else if (tipo === 'tartan') { var o1 = pal.escuro ? '.12' : '.4', o2 = pal.escuro ? '.07' : '.25'; svg = "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><g stroke='" + cor + "' fill='none'><g stroke-opacity='" + o1 + "' stroke-width='5'><path d='M-8 8 L8 -8 M-8 40 L40 -8 M24 40 L40 24'/><path d='M-8 24 L8 40 M-8 -8 L40 40 M24 -8 L40 8'/></g><g stroke-opacity='" + o2 + "' stroke-width='1'><path d='M-8 18 L18 -8 M-8 50 L50 -8 M14 50 L50 14'/><path d='M-8 14 L18 40 M14 -8 L40 18'/></g></g></svg>"; }
    else if (tipo === 'rendaFundo') { var o3 = pal.escuro ? '.2' : '1'; svg = "<svg xmlns='http://www.w3.org/2000/svg' width='44' height='44'><g fill='none' stroke='" + cor + "' stroke-opacity='" + o3 + "'><path stroke-width='.6' d='M0 11 L11 0 M0 33 L33 0 M11 44 L44 11 M33 44 L44 33 M0 11 L33 44 M0 33 L11 44 M11 0 L44 33 M33 0 L44 11'/><g stroke-width='1.3'><circle cx='22' cy='22' r='3'/><path d='M22 19 Q18 12 22 9 Q26 12 22 19 M25 22 Q32 18 35 22 Q32 26 25 22 M22 25 Q26 32 22 35 Q18 32 22 25 M19 22 Q12 26 9 22 Q12 18 19 22'/></g><circle cx='0' cy='0' r='2.2' stroke-width='1.1'/><circle cx='44' cy='0' r='2.2' stroke-width='1.1'/><circle cx='0' cy='44' r='2.2' stroke-width='1.1'/><circle cx='44' cy='44' r='2.2' stroke-width='1.1'/></g></svg>"; }
    else if (tipo === 'cruzinhas') svg = "<svg xmlns='http://www.w3.org/2000/svg' width='34' height='34' shape-rendering='crispEdges'><g fill='" + cor + "' fill-opacity='" + (pal.escuro ? '.22' : '1') + "'><path d='M6 3h2v3h3v2H8v6H6V8H3V6h3z'/><path d='M25 20h1v2h2v1h-2v2h-1v-2h-2v-1h2z'/><rect x='18' y='9' width='1' height='1'/><rect x='10' y='26' width='1' height='1'/></g></svg>";
    else if (tipo === 'morangos') svg = "<svg xmlns='http://www.w3.org/2000/svg' width='38' height='38' shape-rendering='crispEdges'><g fill-opacity='" + (pal.escuro ? '.22' : '1') + "'><path fill='" + cor + "' d='M5 6h7v1h1v4h-1v1h-1v1H9v1H8v-1H7v-1H6v-1H5V7h0z'/><path fill='" + encodeURIComponent(pal.c.destaque) + "' d='M7 4h1v2H7zM9 4h1v2H9z'/><path fill='" + cor + "' d='M24 22h5v1h1v3h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-3h1z'/><rect fill='" + cor + "' x='30' y='8' width='1' height='1'/><rect fill='" + cor + "' x='12' y='30' width='1' height='1'/></g><g fill='" + encodeURIComponent(pal.c.sup) + "'><rect x='7' y='8' width='1' height='1'/><rect x='10' y='9' width='1' height='1'/><rect x='8' y='11' width='1' height='1'/></g></svg>";
    else if (tipo === 'docinhos') svg = "<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' shape-rendering='crispEdges'><g transform='scale(1.7)'><g fill='" + cor + "' fill-opacity='" + (pal.escuro ? '.2' : '1') + "'><path d='M7 4h4v1h1v1h1v2H5V6h1V5h1z'/><path d='M5 9h8v1h-1v3H6v-3H5z'/><path d='M31 26h2v1h1v1h1v1h1v1h1v4H27v-4h1v-1h1v-1h1v-1h1z'/><rect x='22' y='12' width='1' height='1'/><rect x='8' y='34' width='2' height='2'/></g></g></svg>";
    else if (tipo === 'coelhinhos') svg = "<svg xmlns='http://www.w3.org/2000/svg' width='76' height='68' shape-rendering='crispEdges'><g transform='scale(2)'><g fill='" + cor + "' fill-opacity='" + (pal.escuro ? '.24' : '1') + "'><path d='M5 4h2v1H5zM12 4h2v1h-2zM4 5h1v3h1v-3h1v2h5V5h1v3h1V5h1v8h-1v1H5v-1H4z' fill-rule='evenodd'/><rect x='7' y='9' width='1' height='1' fill-opacity='1'/><rect x='11' y='9' width='1' height='1'/></g><g fill='" + cor + "' fill-opacity='" + (pal.escuro ? '.18' : '.8') + "'><path d='M26 22h1v1h1v-1h1v1h1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h1z'/></g></g></svg>";
    else if (tipo === 'grade') svg = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><g fill='" + cor + "' fill-opacity='" + (pal.escuro ? '.16' : '.5') + "'><rect y='23' width='24' height='1'/><rect x='23' width='1' height='24'/></g></svg>";
    else return 'none';
    return "url('data:image/svg+xml," + svg.replace(/</g, '%3C').replace(/>/g, '%3E').replace(/#/g, '%23').replace(/'/g, '%27').replace(/"/g, '%22') + "')";
  }

  // ======================================================== aplicar tema
  function aplicarTema() {
    var pal = paleta(), raiz = document.documentElement, app = $('app');
    Object.keys(pal.c).forEach(function (k) { raiz.style.setProperty('--' + k, pal.c[k]); });
    var acento = pal.c.acento, dest = DESTAQUES[T.destaque];
    if (dest && dest.a) {
      acento = dest.a;
      raiz.style.setProperty('--acento', dest.a);
      raiz.style.setProperty('--acento-texto', pal.escuro ? dest.escuro : dest.claro);
      raiz.style.setProperty('--btn-texto', dest.btn);
      if (pal.familia === 'basico') { var at = pal.escuro ? dest.escuro : dest.claro; raiz.style.setProperty('--tag-texto', at); raiz.style.setProperty('--nav-ativo', pal.escuro ? '#FFFFFF' : at); raiz.style.setProperty('--destaque', rgba(dest.a, pal.escuro ? .22 : .16)); }
      if (!pal.escuro && (pal.c['tag-fundo'] === pal.c.acento)) raiz.style.setProperty('--tag-fundo', dest.claro);
      if (pal.escuro && (pal.c['tag-fundo'] === pal.c.acento)) raiz.style.setProperty('--tag-fundo', dest.a);
    }
    raiz.style.setProperty('--brilho', rgba(acento, pal.escuro ? .45 : .35));
    raiz.style.setProperty('--veu', pal.escuro ? 'rgba(8,6,10,.62)' : 'rgba(60,40,55,.42)');
    if (pal.familia === 'basico' && T.fundoCor) { var fc = FUNDO_CORES[pal.escuro ? 'escuro' : 'claro'][T.fundoCor]; if (fc) raiz.style.setProperty('--fundo', fc[1]); }
    raiz.style.setProperty('--padrao', fundoURL(T.fundo, pal));
    raiz.style.setProperty('--cruz', pal.escuro ? '#141118' : '#2E2833');
    raiz.style.setProperty('--cruz-borda', pal.escuro ? pal.c.contorno : '#1E1A22');
    raiz.style.setProperty('--renda-url', rendaURL(pal));
    raiz.style.setProperty('--moldura', tem('cantoneiras') ? molduraFundo(pal) : 'none');
    raiz.style.setProperty('--alerta', pal.escuro ? '#FF8B8B' : '#C42634');
    raiz.style.setProperty('--alerta-fundo', pal.escuro ? 'rgba(255,110,110,.14)' : 'rgba(214,40,57,.08)');
    raiz.style.setProperty('--asa', pal.escuro ? mistura(pal.c.contorno, '#000000', .35) : '#7A6C82');
    raiz.style.setProperty('--display', TITULOS[T.titulos].css);
    raiz.style.setProperty('--escala', TITULOS[T.titulos].escala);
    raiz.style.setProperty('--numeros', NUMEROS[T.numeros].css);
    raiz.style.setProperty('--tam', TAMANHOS[T.tamanho].v);
    var mv = MOLDURAS[T.moldura].vars;
    Object.keys(mv).forEach(function (k) { raiz.style.setProperty('--' + k, mv[k]); });
    if (T.cantos !== 'auto') { raiz.style.setProperty('--raio', CANTOS[T.cantos].r); raiz.style.setProperty('--raio-p', CANTOS[T.cantos].p); }
    raiz.setAttribute('data-escuro', pal.escuro ? 'sim' : 'nao');
    app.setAttribute('data-moldura', T.moldura);
    Object.keys(ENFEITES).forEach(function (e) { app.setAttribute('data-enfeite-' + e, tem(e) ? 'sim' : 'nao'); });
    $('logo').innerHTML = '';
    $('decor').innerHTML = decorHTML();
    $('ola-saud').textContent = T.saudacao;
    gravarLocal(CHAVE + '-tema', T);
    TP[S.pessoa] = T; gravarLocal(CHAVE + '-temas-pessoa', TP);
    render();
    corDaBarra();
  }

  // ======================================================== estúdio
  function amostra(id) {
    var m = MODELOS[id], p = PALETAS[m.paleta];
    return '<span class="amostra" style="background:' + p.c.fundo + ';border-color:' + p.c.contorno + '">' +
      '<span style="background:' + p.c.destaque + ';border-right:2px solid ' + p.c.contorno + ';font-family:Fredoka,sans-serif;font-weight:600;color:' + p.c.texto + ';font-size:17px">R$ 1.234</span>' +
      '<span>' + mascote('feliz', '', m.mascote, p, 'auto') + '</span></span>';
  }
  function bolas(cores) { return '<span class="bolas">' + cores.map(function (c) { return '<i style="background:' + c + '"></i>'; }).join('') + '</span>'; }
  function opcoes(lista, attr, atual, rotulo) {
    return Object.keys(lista).map(function (k) { return '<button type="button" class="opcao" data-' + attr + '="' + k + '" aria-pressed="' + (atual === k) + '">' + rotulo(k, lista[k]) + '</button>'; }).join('');
  }
  function grupo(titulo, html) { return '<div class="secao"><span class="grupo-rotulo">' + titulo + '</span><div class="opcoes">' + html + '</div></div>'; }
  function estudioHTML(dentroDoApp) {
    var suf = dentroDoApp ? 'app' : 'lado', pal = paleta();
    var fam = function (f, titulo) {
      return '<div class="familia"><h3>' + titulo + '</h3><div class="cartoes">' + Object.keys(MODELOS).filter(function (k) { return MODELOS[k].familia === f; }).map(function (k) {
        return '<button type="button" class="cartao-modelo" data-modelo="' + k + '" aria-pressed="' + (T.modelo === k) + '">' + amostra(k) + '<b>' + esc(MODELOS[k].nome) + '</b><small>' + esc(MODELOS[k].desc) + '</small></button>';
      }).join('') + '</div></div>';
    };
    var palOp = function (fam) { var l = {}; Object.keys(PALETAS).forEach(function (k) { if (PALETAS[k].familia === fam) l[k] = PALETAS[k]; }); return opcoes(l, 'paleta', T.paleta, function (k, p) { return bolas([p.c.fundo, p.c.destaque, p.c.acento, p.c.sec, p.c.contorno]) + esc(p.nome); }); };
    var mascoteAtual = T.mascote === 'nenhum' ? 'gato' : T.mascote;
    return painelSalvos(suf) + '<section class="secao"><h2>Modelos completos</h2>' + (dentroDoApp ? '' : '<p>Toque num modelo para vestir o app inteiro. Depois troque o que quiser nas peças abaixo.</p>') +
      fam('basico', '◻ Básicos') + fam('rosa', '♥ Rosa fofo') + fam('roxo', '✦ Roxo obscuro') + '</section>' +

      '<section class="secao"><h2>Cores</h2>' +
      grupo('Paleta · básicas', palOp('basico')) + grupo('Paleta · rosa fofo', palOp('rosa')) + grupo('Paleta · roxo obscuro', palOp('roxo')) +
      grupo('Cor de destaque (botões, barras, chifrinhos)', opcoes(DESTAQUES, 'destaque', T.destaque, function (k, d) { return (d.a ? '<span class="ponto-cor" style="background:' + d.a + '"></span>' : bolas([pal.c.acento])) + esc(d.nome); })) + '</section>' +

      '<section class="secao"><h2>Caixas</h2>' +
      grupo('Moldura', opcoes(MOLDURAS, 'moldura', T.moldura, function (k, m) { return esc(m.nome) + ' <small>' + esc(m.dica) + '</small>'; })) +
      grupo('Cantos', opcoes(CANTOS, 'cantos', T.cantos, function (k, c) { return (c.r ? '<span style="width:18px;height:14px;border:2px solid var(--contorno);border-radius:' + Math.min(parseInt(c.r, 10), 9) + 'px;display:inline-block"></span>' : '') + esc(c.nome); })) + '</section>' +

      '<section class="secao"><h2>Fundo e enfeites</h2>' +
      grupo('Fundo do app', opcoes(FUNDOS, 'fundo', T.fundo, function (k, n) { var u = fundoURL(k, pal); return '<span style="width:26px;height:20px;border-radius:5px;border:1.5px solid var(--contorno);background:' + pal.c.fundo + ' ' + (u === 'none' ? '' : u) + ';display:inline-block"></span>' + esc(n); })) +
      grupo('Enfeites (pode marcar vários)', Object.keys(ENFEITES).map(function (k) { return '<button type="button" class="opcao" data-enfeite="' + k + '" aria-pressed="' + tem(k) + '">' + (tem(k) ? '♥ ' : '') + esc(ENFEITES[k]) + '</button>'; }).join('')) + '</section>' +

      '<section class="secao"><h2>Mascote</h2>' +
      grupo('Quem aparece no app', opcoes(MASCOTES, 'mascote', T.mascote, function (k, n) { return (k === 'nenhum' ? '' : mascote('feliz', '', k)) + esc(n); }) +
        '<label class="subir" for="sub-' + suf + '"><input type="file" id="sub-' + suf + '" class="subir-figurinha" accept="image/*">' + (figurinha ? 'trocar figurinha' : '+ escolher imagem do aparelho') + '</label>') +
      ((POSES_DE[T.mascote] || []).length > 1 ? grupo('Pose', botoesPose('opcao')) : '') +
      grupo('Detalhes', '<button type="button" class="opcao" data-sem-rosa="1" aria-pressed="' + !T.semRosa + '">' + (T.semRosa ? 'sem rosa no rosto' : 'com bochechas e orelhas rosa') + '</button>') +
      grupo('Cor do mascote', opcoes(CORES_CORPO, 'cor-mascote', T.corMascote, function (k, c) { return (k !== 'auto' ? '<span class="ponto-cor" style="background:' + corCorpoHex(k) + '"></span>' : '') + esc(c.nome); })) +
      (T.mascote === 'nenhum' ? '' : '<div class="humores">' + [['feliz', 'sobrou dinheiro'], ['preocupado', 'faltou dinheiro'], ['dormindo', 'lista vazia']].map(function (h) {
        return '<figure>' + mascote(h[0], '', mascoteAtual) + '<figcaption>' + h[1] + '</figcaption></figure>'; }).join('') + '</div>') + '</section>' +

      '<section class="secao"><h2>Letras</h2>' +
      grupo('Títulos, etiquetas e botões', opcoes(TITULOS, 'titulos', T.titulos, function (k, f) { return '<span class="amostra-letra" style="font-family:' + f.css + ';font-size:' + Math.round(15 * f.escala) + 'px">' + esc(f.nome) + '</span>'; })) +
      grupo('Números e valores (sempre fáceis de ler)', opcoes(NUMEROS, 'numeros', T.numeros, function (k, f) { return '<span style="font-family:' + f.css + ';font-weight:700;font-size:15px">R$ 1.234,56</span> <small>' + esc(f.nome) + '</small>'; })) +
      grupo('Tamanho do texto', opcoes(TAMANHOS, 'tamanho', T.tamanho, function (k, t) { return '<span style="font-size:' + Math.round(14 * t.v) + 'px">' + esc(t.nome) + '</span>'; })) + '</section>' +

      '<section class="secao"><h2>Tela inicial</h2>' +
      '<div class="campo"><label for="saud-' + suf + '" class="grupo-rotulo">Frase do topo</label><input type="text" id="saud-' + suf + '" class="campo-saudacao" maxlength="28" value="' + esc(T.saudacao) + '"></div>' +
      grupo('Blocos que aparecem', Object.keys(BLOCOS).map(function (k) { return '<button type="button" class="opcao" data-bloco="' + k + '" aria-pressed="' + !!T.blocos[k] + '">' + (T.blocos[k] ? '♥ ' : '') + esc(BLOCOS[k]) + '</button>'; }).join('')) + '</section>' +

      (dentroDoApp ? '' : '<section class="secao"><h2>Sobre personagens</h2><p class="nota-personagens"><b>Sua figurinha:</b> em Mascote, escolha qualquer imagem do seu celular ou computador. Ela vira o mascote do app e fica guardada só no seu aparelho. Os mascotes desenhados aqui são todos originais.</p></section>');
  }

  // ======================================================== temas salvos (guardados junto com a página)
  var DB = null, SALVOS = [], ESTADO_DB = 'carregando', nomeNovo = '', apagarId = null, temaAntes = null;
  function dataCurta(iso) { try { var d = new Date(iso); return ('0' + d.getDate()).slice(-2) + '/' + ('0' + (d.getMonth() + 1)).slice(-2); } catch (e) { return ''; } }
  function painelSalvos(suf) {
    var corpo;
    if (ESTADO_DB === 'ok') {
      corpo = '<div class="campo"><label for="nome-tema-' + suf + '" class="grupo-rotulo">Nome do tema</label><div class="salvar-tema"><input type="text" id="nome-tema-' + suf + '" class="campo-nome-tema" maxlength="40" placeholder="ex.: meu morceguinho" value="' + esc(nomeNovo) + '"><button type="button" class="btn" data-acao-tema="salvar">salvar este tema</button></div></div>' +
        (SALVOS.length ? '<div class="salvos">' + SALVOS.map(function (x) {
          var pal = PALETAS[x.tema && x.tema.paleta] || paleta();
          return '<div class="salvo"><button type="button" class="opcao" data-salvo="' + esc(x.id) + '">' + bolas([pal.c.fundo, pal.c.destaque, pal.c.acento, pal.c.contorno]) + esc(x.nome || 'sem nome') + ' <small>' + dataCurta(x.criadoEm) + '</small></button>' +
            '<button type="button" class="x apagar-salvo' + (apagarId === x.id ? ' confirmar' : '') + '" data-apagar-salvo="' + esc(x.id) + '" aria-label="Apagar ' + esc(x.nome || 'tema') + '">' + (apagarId === x.id ? 'apagar?' : '×') + '</button></div>';
        }).join('') + '</div>' : '<p class="dica">Nenhum tema salvo ainda. Monte um tema abaixo, dê um nome e salve.</p>');
    } else if (ESTADO_DB === 'carregando') {
      corpo = '<p class="dica">Carregando temas salvos…</p>';
    } else {
      corpo = '<p class="dica">Salvar só funciona com a página aberta no claude.ai, entrando com a sua conta. Enquanto isso, use "copiar ficha do tema" e cole no chat.</p>';
    }
    return '<section class="secao"><h2>Meus temas</h2>' + (suf === 'lado' ? '<p>Os temas que você salva aqui ficam guardados na página. O Claude consegue ler e transformar em temas do app.</p>' : '') + corpo +
      '<button type="button" class="btn btn-sec" data-acao-tema="copiar" style="justify-self:start">copiar ficha do tema</button>' +
      (T.mascote === 'figurinha' ? '<p class="dica">A figurinha não entra no tema salvo. Mande a imagem para o Claude junto.</p>' : '') + '</section>';
  }
  function redesenharEstudio() {
    if (folha && folha.tipo === 'temas') { var c = document.querySelector('.janela-corpo'), r = c ? c.scrollTop : 0; abrirPersonalizar(); document.querySelector('.janela-corpo').scrollTop = r; }
  }
  function salvarTema() {
    var nome = (nomeNovo || '').trim();
    if (!nome) { toast('dê um nome ao tema.'); var i = document.querySelector('.campo-nome-tema'); if (i) i.focus(); return; }
    if (!DB) { toast('salvar não está disponível aqui.'); return; }
    var dados = { nome: nome.slice(0, 40), criadoEm: new Date().toISOString(), tema: JSON.parse(JSON.stringify(T)) };
    DB.collection('temas').add(dados).then(function () { nomeNovo = ''; temaAntes = null; fechar(); S.aba = 'ajustes'; redesenharEstudio(); render(); $('conteudo').scrollTop = 0; toast('tema "' + dados.nome + '" criado ♥'); },
      function (e) { toast(e && e.code === 'not_granted' ? 'sem permissão para salvar nesta página.' : 'não consegui salvar. tente de novo.'); });
  }
  function aplicarSalvo(id) {
    var x = SALVOS.filter(function (y) { return y.id === id; })[0];
    if (!x || !x.tema || !PALETAS[x.tema.paleta]) { toast('esse tema não abriu.'); return; }
    T = JSON.parse(JSON.stringify(x.tema));
    if (!T.blocos) T.blocos = { numeros: true, pagamentos: true, nos: true };
    if (!T.enfeites) T.enfeites = [];
    aplicarTema(); if (folha && folha.tipo === 'temas') redesenharEstudio();
    toast('tema ' + x.nome + ' ♥');
  }
  function apagarSalvo(id) {
    if (apagarId !== id) { apagarId = id; redesenharEstudio(); render(); return; }
    apagarId = null;
    DB.collection('temas').doc(id).delete().then(function () { toast('tema apagado.'); render(); }, function () { toast('não consegui apagar.'); });
  }
  function copiarFicha() {
    var txt = JSON.stringify({ nome: (nomeNovo || '').trim() || 'meu tema', tema: T });
    var falhou = function () { toast('não deu para copiar aqui.'); };
    try { navigator.clipboard.writeText(txt).then(function () { toast('ficha copiada!'); }, falhou); } catch (e) { falhou(); }
  }
  (function ligarBanco() {
    var atualizar = function () { SALVOS = Dados.temas.listar(); redesenharEstudio(); if (S.aba === 'criar' || S.aba === 'ajustes') render(); };
    DB = { collection: function () { return {
      add: function (d) { return Dados.temas.adicionar(d).then(function (x) { atualizar(); return x; }); },
      doc: function (id) { return { delete: function () { return Dados.temas.apagar(id).then(atualizar); } }; }
    }; } };
    SALVOS = Dados.temas.listar(); ESTADO_DB = 'ok';
  })();

  // ======================================================== contas e valores
  function conta(id) { for (var i = 0; i < S.contas.length; i++) if (S.contas[i].id === id) return S.contas[i]; return null; }
  function total(c, m) { if (m < c.ini || (c.fim != null && m > c.fim)) return 0; return c.val[m] != null ? c.val[m] : c.padrao; }
  function parte(c, m, p) { var t = total(c, m); if (c.dono === 'comp') { var a = r2(t * c.divA / 100); return p === PESSOAS[0] ? a : r2(t - a); } return c.dono === p ? t : 0; }
  function paga(c, m) { return !!S.pagas[c.id + '|' + m]; }
  // conta sem dia de vencimento: conta como último dia do mês
  function diasAteVencer(c, m) { return Math.round((dataMes(m, c.dia || 31) - HOJE0) / 864e5); }
  function diaTexto(c) { return c.dia ? 'dia ' + c.dia : 'sem dia'; }
  function lerDia(v) { var n = parseInt(v, 10); return n >= 1 && n <= 31 ? n : null; }
  function situacao(c, m) {
    if (paga(c, m)) return null;
    var d = diasAteVencer(c, m);
    if (d < 0) return { cls: 'vencida', txt: 'vencida há ' + (-d) + (d === -1 ? ' dia' : ' dias'), peso: 2000 - d };
    if (d === 0) return { cls: 'vencida', txt: 'vence hoje', peso: 1000 };
    if (d <= 3) return { cls: 'perto', txt: d === 1 ? 'vence amanhã' : 'vence em ' + d + ' dias', peso: 500 - d };
    return null;
  }
  // mais urgente primeiro (vencida há mais tempo no topo), depois pelo dia
  function porUrgencia(m) { return function (a, b) { var sa = situacao(a.c, a.mes != null ? a.mes : m), sb = situacao(b.c, b.mes != null ? b.mes : m); return ((sb ? sb.peso : 0) - (sa ? sa.peso : 0)) || ((a.mes || 0) - (b.mes || 0)) || ((a.c.dia || 32) - (b.c.dia || 32)); }; }
  // contas de meses anteriores que ficaram sem pagar
  function atrasadas(p, agora) {
    var l = [];
    var desde = S.contas.reduce(function (a, c) { return Math.min(a, c.ini); }, 0);
    for (var mm = Math.max(desde, -36); mm < agora; mm++) S.contas.forEach(function (c) {
      var t = total(c, mm); if (!t || paga(c, mm)) return;
      if (c.dono === 'comp') l.push({ c: c, t: t, minha: parte(c, mm, p), mes: mm });
      else if (c.dono === p) l.push({ c: c, t: t, minha: t, mes: mm });
    });
    return l.sort(porUrgencia(agora));
  }
  function varia(c) { return Object.keys(c.val).length > 0; }
  function tipoDe(c) { if (c.fim != null && c.fim === c.ini) return 'unica'; if (varia(c)) return 'variavel'; if (c.fim != null) return 'parcelada'; return 'fixa'; }
  function rotuloTipo(c, m) {
    var t = tipoDe(c);
    if (t === 'unica') return '<span class="pill unica">só este mês</span>';
    if (t === 'variavel') return '<span class="pill varia">muda</span>';
    if (t === 'parcelada') return '<span class="pill parc">' + (m - c.ini + 1) + ' de ' + (c.fim - c.ini + 1) + '</span>';
    return '';
  }
  function somaDe(quem, m) {
    if (quem === 'nos') { var a = calcular(PESSOAS[0], m), b = calcular(PESSOAS[1], m); return { gasto: a.gasto + b.gasto, renda: a.renda + b.renda, sobra: a.sobra + b.sobra }; }
    return calcular(S.pessoa, m);
  }
  // salário base vale para todos os meses (a partir de quando foi mudado); meses[m] é o valor recebido num mês específico
  function salarioBase(p, m) { var R = S.renda[p], v = R.salario, b = R.bases || {}; Object.keys(b).map(Number).sort(function (x, y) { return x - y; }).forEach(function (k) { if (k <= m) v = b[k]; }); return v; }
  function salarioMes(p, m) { var x = (S.renda[p].meses || {})[m]; return x != null ? x : salarioBase(p, m); }
  function listaExtras(r) {
    return r.extras.length ? '<div class="recibo">' + r.extras.map(function (x, i) { return '<div class="extra-linha"><span>' + esc(x.desc) + '</span><span><b>+ ' + brl(x.valor) + '</b> <button type="button" class="x" data-tirar-extra="' + i + '" aria-label="Remover ' + esc(x.desc) + '">×</button></span></div>'; }).join('') +
      (r.extras.length > 1 ? '<div class="recibo-total"><span>total extra</span><b>' + brl(r.extra) + '</b></div>' : '') + '</div>' : '<p class="dica">nenhuma renda extra em ' + MES(S.mes).longo + ' ainda.</p>';
  }
  function calcular(p, m) {
    var r = { comp: [], minhas: [], sComp: 0, sOutro: 0, sMinhas: 0, pago: 0 };
    S.contas.forEach(function (c) {
      var t = total(c, m); if (!t) return;
      if (c.dono === 'comp') { var minha = parte(c, m, p); r.comp.push({ c: c, t: t, minha: minha }); r.sComp += minha; r.sOutro += t - minha; if (paga(c, m)) r.pago += minha; }
      else if (c.dono === p) { r.minhas.push({ c: c, t: t, minha: t }); r.sMinhas += t; if (paga(c, m)) r.pago += t; }
    });
    r.gasto = r.sComp + r.sMinhas; r.base = salarioBase(p, m); r.salario = salarioMes(p, m); r.extras = S.renda[p].extras[m] || [];
    r.extra = r.extras.reduce(function (s, x) { return s + x.valor; }, 0); r.renda = r.salario + r.extra; r.sobra = r.renda - r.gasto;
    return r;
  }

  // ======================================================== telas
  function render() {
    $('ola-nome').textContent = S.pessoa;
    $('ola-mes').innerHTML = avisoMes();
    var agora = mesAtual();
    $('meses').innerHTML = MESES.map(function (m, i) { return '<button type="button" class="mes-chip' + (i === agora ? ' agora' : '') + '" data-mes="' + i + '" aria-pressed="' + (i === S.mes) + '"' + (i === agora ? ' title="mês atual" aria-label="' + m.curto + ', mês atual"' : '') + '>' + m.curto + '</button>'; }).join('');
    document.querySelectorAll('.nav [data-ir]').forEach(function (b) { if (b.dataset.ir === S.aba) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); });
    var h = S.aba === 'contas' ? telaContas() : S.aba === 'panorama' ? telaPanorama() : S.aba === 'renda' ? telaRenda() : S.aba === 'ajustes' ? telaAjustes() : S.aba === 'criar' ? telaCriar() : telaInicio();
    var cont = $('conteudo'), mesma = cont.dataset.aba === S.aba, rolagem = cont.scrollTop;
    $('meses').hidden = S.aba === 'criar' || S.aba === 'ajustes';
    cont.innerHTML = '<div class="tela' + (mesma ? ' parada' : '') + '">' + h + '</div>';
    cont.dataset.aba = S.aba;
    if (mesma) cont.scrollTop = rolagem;
    Dados.salvar(S, BASE);
  }
  function itemHTML(x, m) {
    if (x.mes != null) m = x.mes;
    var c = x.c, comp = c.dono === 'comp', pg = paga(c, m), st = situacao(c, m), meta = ['<span>' + diaTexto(c) + (x.mes != null ? ' de ' + MES(m).curto : '') + '</span>'];
    if (st) meta.unshift('<span class="pill ' + st.cls + '">' + (st.cls === 'vencida' ? '! ' : '') + st.txt + '</span>');
    if (comp) meta.push('<span class="pill div">' + c.divA + '/' + (100 - c.divA) + '</span>'); else meta.push('<span>' + esc(c.cat) + '</span>');
    var rt = rotuloTipo(c, m); if (rt) meta.push(rt);
    if (c.fim === m && tipoDe(c) === 'parcelada') meta.push('<span class="pill fim">última!</span>');
    return '<div class="item' + (comp ? ' comp' : '') + (pg ? ' paga' : '') + (st ? ' ' + st.cls : '') + '" data-conta="' + c.id + '" role="button" tabindex="0" aria-label="Editar ' + esc(c.nome) + (st ? ', ' + st.txt : '') + '">' +
      '<span class="info"><b>' + esc(c.nome) + '</b><span class="meta">' + meta.join('') + '</span></span>' +
      '<span class="valor"><b>' + brl(x.minha) + '</b>' + (comp ? '<small>de ' + brl(x.t) + '</small>' : '') + '</span>' +
      '<button type="button" class="check" data-pagar="' + c.id + '" data-pagar-mes="' + m + '" aria-pressed="' + pg + '" aria-label="' + (pg ? 'Desmarcar ' : 'Marcar como paga: ') + esc(c.nome) + '">' + CORACAO + '</button></div>';
  }
  function vazio(texto) { return '<div class="vazio"><span style="font-family:var(--display);color:var(--sec-texto)">' + (tem('kaomoji') ? esc(kaomoji('dormindo')) : 'zZz') + '</span><br>' + texto + '</div>'; }
  function iconeEnfeite(k) {
    var c = {
      chifres: function () { return chifre(''); }, asas: function () { return asa(''); }, lacos: function () { return laco(''); },
      coracoes: function () { return coracaoSolto(''); }, caveiras: caveira, estrelas: function () { return estrela(''); }, curativo: curativo,
      babado: function () { return '<span class="ic-babado"></span>'; }, morceguinhos: function () { return morceguinho(''); },
      teias: function () { return teiaPixel(''); }, cruzes: function () { return cruz(''); }, renda: function () { return '<span class="ic-renda"></span>'; },
      patch: function () { return coracaoRenda(''); }, cantoneiras: function () { return cantoneira(''); },
      cauda: function () { return '<svg class="cauda" viewBox="0 0 30 40" aria-hidden="true"><path d="M1 4 C12 4 6 16 13 21 S23 27 20 31" fill="none" stroke="var(--contorno)" stroke-width="2.6" stroke-linecap="round"/><path d="M20 28 Q28 31 26 38 Q23 35 20 37 Q17 35 13 38 Q12 31 20 28 Z" fill="var(--acento)" stroke="var(--contorno)" stroke-width="1.8" stroke-linejoin="round"/></svg>'; },
      comidinhas: function () { return comida('morango', ''); }, kaomoji: function () { return '<span class="ic-txt">' + esc(kaomoji('feliz')) + '</span>'; },
      vidas: function () { return '<svg viewBox="0 0 9 8" shape-rendering="crispEdges" aria-hidden="true"><path d="M1 1h3v1h1V1h3v1h1v3H8v1H7v1H6v1H3V7H2V6H1V5H0V2h1z" fill="var(--acento)" stroke="var(--contorno)" stroke-width=".8"/></svg>'; }
    }[k];
    try { return c ? c() : ''; } catch (e) { return ''; }
  }
  function enfeitesHero() {
    var h = '';
    if (tem('chifres')) h += chifre('chifre e') + chifre('chifre d');
    if (tem('asas')) h += asa('asa e') + asa('asa d');
    if (tem('lacos')) h += laco('laco-canto');
    if (tem('curativo')) h += curativo();
    var rab = rabinho();
    h += rab;
    if (tem('cauda') && !rab) h += '<svg class="cauda" viewBox="0 0 30 40" aria-hidden="true"><path d="M1 4 C12 4 6 16 13 21 S23 27 20 31" fill="none" stroke="var(--contorno)" stroke-width="2.6" stroke-linecap="round"/><path d="M20 28 Q28 31 26 38 Q23 35 20 37 Q17 35 13 38 Q12 31 20 28 Z" fill="var(--acento)" stroke="var(--contorno)" stroke-width="1.8" stroke-linejoin="round"/></svg>';
    if (tem('cruzes')) h += cruz('', 'laco').replace('class="cruz"', 'class="cruz cruz-canto"');
    if (tem('renda')) h += '<span class="renda-borda"></span>';
    return h;
  }

  // ----- rabinho do mascote: aparece na lateral direita do cartão quando ele espia por cima -----
  // cada rabo é um traço grosso numa grade; contorno, sombra e brilho saem sozinhos (como nos mascotes)
  var RABOS = {
    gato: { w: 11, h: 15, pts: [[0, 2.6], [3, 2.8], [4.8, 4.6], [5.2, 8], [5.8, 11], [7.4, 12.6], [9, 11.8], [9.4, 10]], r0: 1.55, r1: 1.2 },
    coelho: { w: 8, h: 9, bola: [3.4, 4, 3] },
    monstro: { w: 11, h: 15, pts: [[0, 2.8], [3.2, 3.2], [5.6, 5.4], [6.6, 8.6], [6.8, 10.4]], r0: 1.9, r1: .9, ponta: [6.8, 12] }
  };
  function gradeRabo(R) {
    var g = [], x, y, i;
    for (y = 0; y < R.h; y++) { g.push([]); for (x = 0; x < R.w; x++) g[y].push('.'); }
    var dist = function (px, py, a, b) { var dx = b[0] - a[0], dy = b[1] - a[1], L = dx * dx + dy * dy, t = L ? Math.max(0, Math.min(1, ((px - a[0]) * dx + (py - a[1]) * dy) / L)) : 0; return [Math.hypot(px - a[0] - t * dx, py - a[1] - t * dy), t]; };
    for (y = 0; y < R.h; y++) for (x = 0; x < R.w; x++) {
      var cx = x + .5, cy = y + .5, dentro = false;
      if (R.bola) { var bx = cx - R.bola[0], by = cy - R.bola[1], ang = Math.atan2(by, bx), rr = R.bola[2] + .35 * Math.cos(ang * 6); dentro = bx * bx + by * by <= rr * rr; }
      else for (i = 0; i < R.pts.length - 1; i++) { var d = dist(cx, cy, R.pts[i], R.pts[i + 1]), f = (i + d[1]) / (R.pts.length - 1), raio = R.r0 + (R.r1 - R.r0) * f; if (d[0] <= raio) { dentro = true; break; } }
      if (dentro && x > 0) g[y][x] = 'f';
      if (dentro && x === 0) g[y][x] = 'f';
    }
    (R.espinhos || []).forEach(function (e) { var ex = Math.floor(e[0]), ey = Math.floor(e[1]); if (g[ey] && g[ey][ex] === '.') g[ey][ex] = 'w'; });
    if (R.ponta) { var tx = Math.floor(R.ponta[0]), ty = Math.floor(R.ponta[1]); [[0, -1], [-1, 0], [0, 0], [1, 0], [-2, 1], [-1, 1], [0, 1], [1, 1], [2, 1], [-1, 2], [0, 2], [1, 2], [0, 3]].forEach(function (d) { if (g[ty + d[1]] && g[ty + d[1]][tx + d[0]] !== undefined) g[ty + d[1]][tx + d[0]] = 'w'; }); }
    var ok = function (yy, xx) { return yy >= 0 && yy < R.h && xx >= 0 && xx < R.w; };
    var copia = g.map(function (l) { return l.slice(); });
    for (y = 0; y < R.h; y++) for (x = 0; x < R.w; x++) if (copia[y][x] === '.') {
      var viz = [[0, 1], [0, -1], [1, 0], [-1, 0]].some(function (v) { var yy = y + v[0], xx = x + v[1]; return ok(yy, xx) && (copia[yy][xx] === 'f' || copia[yy][xx] === 'w'); });
      if (viz && x > 0) g[y][x] = 'o';
      else if (viz && x === 0) g[y][x] = 'o';
    }
    // sombra embaixo/direita, brilho em cima
    for (y = 0; y < R.h; y++) for (x = 0; x < R.w; x++) if (copia[y][x] === 'f') {
      if (ok(y + 1, x) && g[y + 1][x] === 'o' && ok(y - 1, x) && g[y - 1][x] === 'f') g[y][x] = 's';
      else if (ok(y - 1, x) && g[y - 1][x] === 'o' && ok(y + 1, x) && (g[y + 1][x] === 'f') && x > 1 && x % 3 === 1) g[y][x] = 'b';
    }
    // o rabo "sai de trás" do cartão: a primeira coluna fica sem contorno vertical
    for (y = 0; y < R.h; y++) if (g[y][0] === 'o' && g[y][1] === '.') g[y][0] = '.';
    return g.map(function (l) { return l.join(''); });
  }
  function rabinho() {
    var tipo = T.mascote;
    if (!RABOS[tipo] || poseAtual() !== 'espiando') return '';
    var pal = paleta(), corpo = corCorpoHex(corDoCorpo(tipo, null, pal), pal), escuro = corEscura(corpo), c = coresMascote(corpo, escuro, pal), R = RABOS[tipo];
    var svg = pixLinhas(gradeRabo(R), { o: c.o, f: c.f, s: c.s, b: c.b, w: c.w }, '');
    return '<span class="rabinho ' + tipo + (tem('asas') ? ' baixo' : '') + '" style="width:' + (R.w * 3.1).toFixed(1) + 'px" aria-hidden="true">' + svg + '</span>';
  }
  // ----- palco do mascote: o espaço acima do cartão principal -----
  var POSES = { dentro: 'dentro do cartão', espiando: 'espiando por cima do cartão', sentado: 'sentado no cartão', pendurada: 'pendurada no varal', dormindo: 'dormindo de ponta-cabeça', voando: 'voando', flutuando: 'flutuando' };
  var POSES_DE = { gato: ['espiando', 'dentro'], coelho: ['espiando', 'dentro'], ursinho: ['espiando', 'sentado', 'dentro'], sapinho: ['sentado', 'espiando', 'dentro'], monstro: ['espiando', 'dentro'], caveira: ['sentado', 'espiando', 'dentro'],
    morcego: ['voando', 'dormindo', 'sentado', 'dentro'], aranhinha: ['pendurada', 'sentado', 'dentro'], fantasma: ['flutuando', 'sentado', 'dentro'], fantasminha: ['flutuando', 'sentado', 'dentro'], figurinha: ['sentado', 'flutuando', 'dentro'] };
  function rotuloPose(k) { return T.mascote === 'morcego' && k === 'sentado' ? 'em pé no cartão' : POSES[k]; }
  function botoesPose(cls) { var l = POSES_DE[T.mascote] || []; return l.length > 1 ? l.map(function (k) { return '<button type="button" class="' + cls + '" data-pose="' + k + '" aria-pressed="' + (poseAtual() === k) + '">' + esc(rotuloPose(k)) + '</button>'; }).join('') : ''; }
  function poseAtual() { var l = POSES_DE[T.mascote] || ['sentado']; return l.indexOf(T.pose) > -1 ? T.pose : l[0]; }
  function mascoteNoPalco(humor, pose) {
    var tipo = T.mascote, pal = paleta(), nome = corDoCorpo(tipo, null, pal), corpo = corCorpoHex(nome, pal), escuro = corEscura(corpo);
    var contorno = escuro ? (pal.escuro ? pal.c.contorno : '#14111A') : '#3D3346';
    var sp = function (t, h2) { return tipo === 'figurinha' ? mascote(h2) : desenhoMascote(t, h2, '', pal, corpo, escuro); };
    var comPatas = ['gato', 'coelho', 'ursinho', 'sapinho', 'monstro'].indexOf(tipo) > -1;
    if (pose === 'pendurada') return '<div class="masc pendurada"><span class="fio"></span>' + sp(tipo, humor) + '</div>';
    if (pose === 'dormindo') return '<div class="masc dormindo">' + desenhoMascote('morcegoDormindo', 'dormindo', '', pal, corpo, escuro) + '</div>';
    if (pose === 'voando') return '<div class="masc voando"><span class="quadro a">' + sp('morcego', humor) + '</span><span class="quadro b">' + desenhoMascote('morcegoAsaBaixa', humor, '', pal, corpo, escuro) + '</span></div>';
    if (pose === 'flutuando') return '<div class="masc flutuando">' + sp(tipo, humor) + '<span class="sombra"></span></div>';
    if (pose === 'espiando') return '<div class="masc espiando"><div class="corte">' + sp(tipo, humor) + '</div>' + (comPatas ? patas(corpo, contorno) : '') + '</div>';
    if (tipo === 'morcego') return '<div class="masc sentado empe">' + desenhoMascote('morcegoAsaBaixa', humor, '', pal, corpo, escuro) + '</div>';
    return '<div class="masc sentado">' + sp(tipo, humor) + (comPatas ? patas(corpo, contorno) : '') + '</div>';
  }
  function mascoteDentro(humor) {
    if (T.mascote === 'nenhum' || poseAtual() !== 'dentro') return '';
    return mascote(humor, 'mascote-hero') + (tem('kaomoji') ? '<span class="balao">' + esc(kaomoji(humor)) + '</span>' : '');
  }
  function palcoHTML(humor, aviso) {
    var pose = poseAtual(), temM = T.mascote !== 'nenhum' && pose !== 'dentro', lista = [];
    if (tem('cruzes')) lista.push('cruz');
    if (tem('morceguinhos')) lista.push('morcego', 'morcego');
    if (tem('coracoes')) lista.push('coracao');
    if (tem('estrelas')) lista.push('estrela');
    if (tem('comidinhas')) lista.push('morango');
    if (tem('lacos')) lista.push('laco');
    lista = lista.slice(0, temM ? 5 : 7);
    var teia = tem('teias'), precisaVaral = lista.length || teia || (temM && (pose === 'pendurada' || pose === 'dormindo'));
    if (!temM && !precisaVaral) return '';
    var ALT = { espiando: 58, sentado: 66, voando: 72, flutuando: 84, dormindo: 62, pendurada: 64 }, alt = temM ? (T.mascote === 'morcego' && pose === 'sentado' ? 64 : (ALT[pose] || 66)) : 0;
    if (precisaVaral) alt = Math.max(alt, 54);
    if (aviso) alt = Math.max(alt, 30);
    if (aviso && T.moldura === 'caderno') alt = Math.max(alt, precisaVaral ? 84 : 62); // a aba do caderno ocupa o canto esquerdo
    var h = '<div class="palco-masc' + (precisaVaral ? ' com-varal' : '') + '" style="height:' + alt + 'px">' + (aviso || '') + (precisaVaral ? '<span class="varal" aria-hidden="true"></span>' : '');
    if (teia) h += teiaPixel('e') + (temM ? '' : teiaPixel('d'));
    var x0 = teia ? 17 : 4, passo = temM ? 11 : 12, fios = [6, 12, 4, 10, 8, 14, 5];
    lista.forEach(function (t, i) {
      var x = 'left:' + (x0 + i * passo) + '%';
      h += t === 'laco' ? '<span class="pend laco" style="' + x + '">' + pendente(t) + '</span>'
        : '<span class="pend" style="' + x + ';animation-delay:-' + (i * .7) + 's"><i style="height:' + fios[i % fios.length] + 'px"></i>' + pendente(t) + '</span>';
    });
    if (temM) h += mascoteNoPalco(humor, pose);
    if (temM && tem('kaomoji')) h += '<span class="balao">' + esc(kaomoji(humor)) + '</span>';
    return h + '</div>';
  }

  function vidas(r) {
    var q = r.renda > 0 ? r.sobra / r.renda : -1, n = q >= .3 ? 3 : q >= .12 ? 2 : q > 0 ? 1 : 0, h = '';
    for (var i = 0; i < 3; i++) h += '<svg viewBox="0 0 9 8" shape-rendering="crispEdges" aria-hidden="true"><path d="M1 1h3v1h1V1h3v1h1v3H8v1H7v1H6v1H3V7H2V6H1V5H0V2h1z" fill="' + (i < n ? 'var(--acento)' : 'var(--sup)') + '" stroke="var(--contorno)" stroke-width=".8"/></svg>';
    return '<span class="vidas" role="img" aria-label="' + n + ' de 3 vidas no mês">' + h + '</span>';
  }
  function avisoMes() {
    var agora = mesAtual();
    return S.mes === agora
      ? '<span class="mes-atual"><span class="ponto-agora" aria-hidden="true"></span><span>mês atual · ' + MES(agora).longo + (S.virada > 1 ? ' · vira no dia ' + S.virada : '') + '</span></span>'
      : '<span class="mes-atual outro"><span>vendo ' + MES(S.mes).longo + '</span><button type="button" class="link" data-mes="' + agora + '">voltar para ' + MES(agora).curto + ' ›</button></span>';
  }
  function telaInicio() {
    var p = S.pessoa, m = S.mes, r = calcular(p, m), o = outra(p), mes = MES(m).longo;
    var pct = r.renda ? Math.min(100, Math.round(r.gasto * 100 / r.renda)) : 0, pctPago = r.gasto ? Math.round(r.pago * 100 / r.gasto) : 0;
    var abertas = r.comp.concat(r.minhas).filter(function (x) { return !paga(x.c, m); }).sort(porUrgencia(m));
    var totalComp = r.sComp + r.sOutro, pctEu = totalComp ? Math.round(r.sComp * 100 / totalComp) : 50;
    var agora = mesAtual();
    var palco = palcoHTML(r.sobra < 0 ? 'preocupado' : 'feliz');
    var dentro = mascoteDentro(r.sobra < 0 ? 'preocupado' : 'feliz');
    var h = (palco || '') + '<div class="caixa hero ' + (dentro ? 'com-mascote' : 'sem-mascote') + (r.sobra < 0 ? ' negativo' : '') + (tem('babado') ? ' babado' : '') + '">' + tag('resumo.txt', 'tag-hero') + enfeitesHero() +
      '<small>' + (r.sobra < 0 ? '! falta em ' : '♥ sobra em ') + mes + (tem('vidas') ? vidas(r) : '') + '</small><div class="grande">' + brl(Math.abs(r.sobra)) + '</div>' +
      dentro + '<div class="barra"><i style="width:' + pct + '%"></i></div><div class="hero-linha"><span>renda ' + brl(r.renda) + '</span><span>gastos ' + brl(r.gasto) + '</span></div></div>';
    if (T.blocos.numeros) h += '<div class="stats"><div class="stat"><small>gasto total</small><b>' + brl(r.gasto) + '</b></div><div class="stat lilas"><small>parte nas divididas</small><b>' + brl(r.sComp) + '</b></div>' +
      '<div class="stat rosa"><small>só minhas</small><b>' + brl(r.sMinhas) + '</b></div><div class="stat verde"><small>renda extra</small><b>' + brl(r.extra) + '</b></div></div>';
    var atr = m === agora ? atrasadas(p, agora) : [];
    if (atr.length) h += '<div class="caixa atrasadas">' + tag('atrasadas') + '<div class="linha-p" style="margin-bottom:8px"><span class="alerta-txt">' + atr.length + (atr.length === 1 ? ' conta ficou' : ' contas ficaram') + ' sem pagar</span><b class="alerta-txt">' + brl(atr.reduce(function (s2, x) { return s2 + x.minha; }, 0)) + '</b></div>' +
      '<div class="lista">' + atr.map(function (x) { return itemHTML(x, m); }).join('') + '</div><p class="dica" style="margin-top:8px">Quando pagar, toque no coração: ela fica paga no mês dela.</p></div>';
    if (T.blocos.pagamentos) h += '<div class="caixa">' + tag('pagamentos') + (tem('comidinhas') ? '<span class="sentados">' + comida('bolinho') + comida('morango') + '</span>' : '') + (tem('caveiras') ? '<span class="caveiras" aria-hidden="true">' + caveira() + caveira() + '</span>' : '<span class="xxx" aria-hidden="true">x x x</span>') +
      '<div class="linha-p"><span>já paguei <b>' + brl(r.pago) + '</b></span><span>de ' + brl(r.gasto) + '</span></div><div class="trilho"><i style="width:' + pctPago + '%"></i></div>' +
      (abertas.length ? '<div class="lista" style="margin-top:10px">' + abertas.slice(0, 3).map(function (x) { return itemHTML(x, m); }).join('') + '</div>' : vazio('tudo pago em ' + mes + '!')) +
      '<button type="button" class="link" data-ir="contas" style="margin-top:8px;display:block;margin-left:auto">ver todas ›</button></div>';
    if (T.blocos.nos) h += '<div class="caixa' + (tem('babado') ? ' babado' : '') + '">' + tag('nós dois') + (tem('patch') ? '<span class="patch-canto">' + coracaoRenda('') + '</span>' : '') + (tem('comidinhas') ? '<span class="sentados esq">' + comida('onigiri') + '</span>' : '') + (tem('renda') ? '<span class="renda-borda"></span>' : '') +
      (r.comp.length ? '<div class="duo"><div class="quem eu"><small>' + esc(p) + '</small><b>' + brl(r.sComp) + '</b></div><div class="quem ele"><small>' + esc(o) + '</small><b>' + brl(r.sOutro) + '</b></div></div>' +
        '<div class="divisao" aria-hidden="true"><i style="width:' + pctEu + '%"></i></div><div class="legenda"><span>' + pctEu + '% · ' + (100 - pctEu) + '%</span><span>total ' + brl(totalComp) + '</span></div>'
        : vazio('nenhuma conta dividida em ' + mes + '.')) + '</div>';
    return h;
  }
  function telaContas() {
    var p = S.pessoa, m = S.mes, r = calcular(p, m), f = S.filtro, v = S.vista, corpo = '';
    var todas = r.comp.concat(r.minhas).sort(porUrgencia(m));
    var vistas = '<div class="seg vistas" role="group" aria-label="Jeito de ver">' + [['lista', 'lista'], ['categorias', 'categorias'], ['calendario', 'calendário'], ['quem', 'quem paga']].map(function (x) {
      return '<button type="button" data-vista="' + x[0] + '" aria-pressed="' + (v === x[0]) + '">' + x[1] + '</button>'; }).join('') + '</div>';
    if (v === 'lista') {
      var lista = todas.filter(function (x) { return f === 'todas' || (f === 'abertas' && !paga(x.c, m)) || (f === 'comp' && x.c.dono === 'comp') || (f === 'minhas' && x.c.dono !== 'comp'); });
      corpo = '<div class="caixa">' + tag('contas de ' + MES(m).longo) + '<div class="chips">' + [['todas', 'todas'], ['abertas', 'a pagar'], ['comp', 'divididas'], ['minhas', 'só minhas']].map(function (x) {
        return '<button type="button" class="chip" data-filtro="' + x[0] + '" aria-pressed="' + (f === x[0]) + '">' + x[1] + '</button>'; }).join('') + '</div>' +
        (lista.length ? '<div class="lista">' + lista.map(function (x) { return itemHTML(x, m); }).join('') + '</div>' : vazio('nada por aqui.')) +
        '<p class="dica" style="margin-top:10px">Toque numa conta para mudar o valor do mês. O coração marca como paga.</p></div>';
    } else if (v === 'categorias') {
      var cats = {}; todas.forEach(function (x) { cats[x.c.cat] = (cats[x.c.cat] || 0) + x.minha; });
      var nomes = Object.keys(cats).sort(function (a, b) { return cats[b] - cats[a]; });
      corpo = '<div class="caixa">' + tag('por categoria') + (nomes.length ? '<div class="cats">' + nomes.map(function (k) {
        var pc = r.gasto ? Math.round(cats[k] * 100 / r.gasto) : 0;
        return '<div class="cat"><div class="linha-p"><span>' + esc(k) + '</span><b>' + brl(cats[k]) + '</b></div><div class="trilho rosa"><i style="width:' + pc + '%"></i></div><small class="dica">' + pc + '% do que eu gasto no mês</small></div>';
      }).join('') + '</div>' : vazio('nenhuma conta em ' + MES(m).longo + '.')) + '</div>';
    } else if (v === 'calendario') {
      var d0 = dataMes(m), primeiro = d0.getDay(), dias = new Date(d0.getFullYear(), d0.getMonth() + 1, 0).getDate(), porDia = {};
      todas.forEach(function (x) { (porDia[x.c.dia] = porDia[x.c.dia] || []).push(x); });
      var cel = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map(function (d) { return '<span>' + d + '</span>'; }).join('');
      for (var i = 0; i < primeiro; i++) cel += '<i></i>';
      for (var d = 1; d <= dias; d++) {
        var cs = porDia[d] || [], todasPagas = cs.length && cs.every(function (x) { return paga(x.c, m); });
        cel += '<div class="' + (cs.length ? (todasPagas ? 'tem pago' : 'tem') : '') + '"' + (cs.length ? ' title="' + esc(cs.map(function (x) { return x.c.nome; }).join(', ')) + '"' : '') + '>' + d + (cs.length > 1 ? '<sup>' + cs.length + '</sup>' : '') + '</div>';
      }
      corpo = '<div class="caixa">' + tag(MES(m).longo) + '<div class="cal">' + cel + '</div><p class="dica" style="margin-top:8px">rosa: tem conta a pagar · verde: tudo pago</p></div>' +
        (todas.length ? '<div class="lista">' + todas.map(function (x) { return itemHTML(x, m); }).join('') + '</div>' : '');
    } else {
      var o = outra(p), soLuiz = S.contas.filter(function (c) { return c.dono === o && total(c, m); });
      var grupo = function (titulo, itens, soma) { return '<div class="caixa">' + tag(titulo) + '<div class="linha-p" style="margin-bottom:8px"><span class="dica">' + itens.length + ' conta' + (itens.length === 1 ? '' : 's') + '</span><b>' + brl(soma) + '</b></div>' + (itens.length ? '<div class="lista">' + itens.join('') + '</div>' : vazio('nenhuma.')) + '</div>'; };
      var dividida = function (x) { return '<div class="item comp"><span class="info"><b>' + esc(x.c.nome) + '</b><span class="meta"><span>' + esc(p) + ' ' + brl(x.minha) + '</span><span>' + esc(o) + ' ' + brl(x.t - x.minha) + '</span></span></span><span class="valor"><b>' + brl(x.t) + '</b><small>' + x.c.divA + '/' + (100 - x.c.divA) + '</small></span><span></span></div>'; };
      var dele = function (c) { return '<div class="item"><span class="info"><b>' + esc(c.nome) + '</b><span class="meta"><span>' + diaTexto(c) + '</span>' + rotuloTipo(c, m) + '</span></span><span class="valor"><b>' + brl(total(c, m)) + '</b></span><span></span></div>'; };
      corpo = grupo('só minhas', r.minhas.map(function (x) { return itemHTML(x, m); }), r.sMinhas) +
        grupo('divididas', r.comp.map(dividida), r.sComp + r.sOutro) +
        grupo('só ' + o, soLuiz.map(dele), soLuiz.reduce(function (s2, c) { return s2 + total(c, m); }, 0));
    }
    return vistas + corpo;
  }
  function telaPanorama() {
    var q = S.visao, n = MESES.length, dados = [], maxV = 0, i;
    for (i = 0; i < n; i++) { var x = somaDe(q, i); dados.push(x); maxV = Math.max(maxV, x.gasto, x.renda); }
    maxV = Math.ceil(maxV / 1000) * 1000 || 1000;
    var W = 300, H = 160, base = 136, bw = W / n, y = function (v) { return base - v / maxV * 120; };
    var svg = '<svg class="grafico" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Gasto e renda de cada mês">';
    [0, .5, 1].forEach(function (f) { var yy = y(maxV * f); svg += '<line x1="0" x2="' + W + '" y1="' + yy + '" y2="' + yy + '" stroke="var(--tracejado)" stroke-width="1"/><text x="2" y="' + (yy - 3) + '">' + (maxV * f >= 1000 ? (maxV * f / 1000).toLocaleString('pt-BR') + ' mil' : '0') + '</text>'; });
    var pts = [];
    dados.forEach(function (dd, k) {
      svg += '<rect x="' + (k * bw + 3) + '" y="' + y(dd.gasto) + '" width="' + (bw - 6) + '" height="' + (base - y(dd.gasto)) + '" fill="' + (k === S.mes ? 'var(--acento-texto)' : 'var(--acento)') + '" stroke="var(--contorno)" stroke-width="1"/>';
      pts.push((k * bw + bw / 2) + ',' + y(dd.renda));
      svg += '<text x="' + (k * bw + bw / 2) + '" y="' + (H - 6) + '" text-anchor="middle">' + MES(k).curto.slice(0, 3) + '</text>';
    });
    svg += '<polyline points="' + pts.join(' ') + '" fill="none" stroke="var(--verde)" stroke-width="2"/>' + pts.map(function (pt) { var c = pt.split(','); return '<rect x="' + (c[0] - 2.5) + '" y="' + (c[1] - 2.5) + '" width="5" height="5" fill="var(--verde)"/>'; }).join('') + '</svg>';
    var linhas = dados.map(function (dd, k) { return '<tr' + (k === S.mes ? ' class="atual"' : '') + ' data-mes="' + k + '"><td>' + MES(k).curto + '</td><td>' + brl(dd.gasto) + '</td><td class="' + (dd.sobra < 0 ? 'neg' : 'pos') + '">' + brl(dd.sobra) + '</td></tr>'; }).join('');
    var parc = S.contas.filter(function (c) { return tipoDe(c) === 'parcelada' && (q === 'nos' || c.dono === 'comp' || c.dono === S.pessoa); }).sort(function (a, b) { return a.fim - b.fim; });
    var maior = 0; dados.forEach(function (dd, k) { if (dd.gasto > dados[maior].gasto) maior = k; });
    var media = dados.reduce(function (s2, dd) { return s2 + dd.gasto; }, 0) / n;
    return '<div class="seg" role="group" aria-label="De quem"><button type="button" data-visao="eu" aria-pressed="' + (q === 'eu') + '">só eu</button><button type="button" data-visao="nos" aria-pressed="' + (q === 'nos') + '">nós dois</button></div>' +
      '<div class="stats"><div class="stat"><small>média por mês</small><b>' + brl(media) + '</b></div><div class="stat rosa"><small>mês mais pesado</small><b>' + MES(maior).curto + '</b></div></div>' +
      '<div class="caixa">' + tag('ano inteiro') + '<div class="legenda-g"><span><i class="q acento"></i>gasto</span><span><i class="q verde"></i>renda</span></div>' + svg + '</div>' +
      '<div class="caixa">' + tag('mês a mês') + '<table class="tabela"><thead><tr><th>mês</th><th>gastou</th><th>sobrou</th></tr></thead><tbody>' + linhas + '</tbody></table></div>' +
      '<div class="caixa' + (tem('babado') ? ' babado' : '') + '">' + tag('parcelas acabando') + (parc.length ? '<div class="cats">' + parc.map(function (c) {
        var tot = c.fim - c.ini + 1, pagas = Math.max(0, Math.min(tot, S.mes - c.ini + 1)), falta = 0;
        for (var k = Math.max(S.mes + 1, c.ini); k <= c.fim; k++) falta += total(c, k);
        return '<div class="cat"><div class="linha-p"><span>' + esc(c.nome) + '</span><small class="dica">acaba em ' + MES(c.fim).curto + '</small></div><div class="trilho"><i style="width:' + Math.round(pagas * 100 / tot) + '%"></i></div><small class="dica">' + pagas + ' de ' + tot + ' · faltam ' + brl(falta) + '</small></div>';
      }).join('') + '</div>' : vazio('nenhuma parcela.')) + '</div>';
  }
  function telaRenda() {
    var r = calcular(S.pessoa, S.mes);
    return '<div class="stats"><div class="stat verde"><small>total do mês</small><b>' + brl(r.renda) + '</b></div><div class="stat"><small>salário</small><b>' + brl(r.salario) + '</b></div></div>' +
      '<div class="caixa">' + tag('salário') + '<div style="display:grid;gap:10px"><div class="recibo-total" style="border:0;padding:0"><span>recebido em ' + MES(S.mes).longo + '</span><b>' + brl(r.salario) + '</b></div><button type="button" class="btn btn-sec" data-acao="lancar-salario">mudar salário</button></div></div>' +
      '<div class="caixa' + (tem('babado') ? ' babado' : '') + '">' + tag('renda extra') + '<div style="display:grid;gap:10px">' + listaExtras(r) + '<button type="button" class="btn" data-acao="lancar-extra">adicionar renda extra ♥</button></div></div>';
  }
  var ABAS_CRIADOR = [['base', 'começar'], ['cores', 'cores'], ['fundo', 'fundo'], ['enfeites', 'enfeites'], ['mascote', 'mascote'], ['letras', 'letras'], ['caixas', 'caixas']];
  function semDados() {
    var R = (S.renda || {})[S.pessoa] || {};
    var temRenda = R.salario || Object.keys(R.meses || {}).length || Object.keys(R.bases || {}).length || Object.keys(R.extras || {}).length;
    return !(S.contas || []).length && !temRenda;
  }
  function previaTema() {
    // usa os dados de quem está usando; sem nenhum dado, mostra contas de exemplo só na prévia
    var ficticio = semDados(), html;
    if (ficticio) {
      var ex = exemplo(), guarda = { contas: S.contas, pagas: S.pagas, renda: S.renda };
      S.contas = ex.contas; S.pagas = ex.pagas; S.renda = ex.renda;
      try { html = telaInicio(); } finally { S.contas = guarda.contas; S.pagas = guarda.pagas; S.renda = guarda.renda; }
    } else html = telaInicio();
    return (ficticio ? '<p class="dica previa-aviso">prévia com dados de exemplo, porque você ainda não tem contas</p>' : '') +
      '<div class="criador-previa" aria-label="Prévia do tema (role para ver tudo)"><div class="previa-rolo">' + html + '</div></div>';
  }
  function abrirNomeTema() {
    folha = { tipo: 'nome-tema' };
    abrirJanela('novo_tema.exe', ESTADO_DB === 'ok'
      ? '<div class="campo"><label for="nome-tema-janela">nome do tema</label><input type="text" id="nome-tema-janela" class="campo-nome-tema" maxlength="40" placeholder="ex.: meu morceguinho" value="' + esc(nomeNovo) + '" autocomplete="off"></div><button type="button" class="btn" data-acao-tema="salvar">criar ♥</button>'
      : '<p class="dica">Salvar só funciona com a página aberta no claude.ai, entrando com a sua conta. Enquanto isso, copie a ficha e cole no chat.</p><button type="button" class="btn btn-sec" data-acao-tema="copiar">copiar ficha do tema</button>',
      function () { var i = $('nome-tema-janela'); if (i) i.focus(); });
  }
  function telaCriar() {
    var pal = paleta(), aba = S.abaCriador || 'base', corpo = '';
    var g = function (titulo, html) { return '<div class="criador-grupo"><span class="grupo-rotulo">' + titulo + '</span><div class="opcoes">' + html + '</div></div>'; };
    if (aba === 'base') corpo = g('partir de um tema pronto', opcoes(MODELOS, 'modelo', T.modelo, function (k, m) { var p = PALETAS[m.paleta]; return bolas([p.c.fundo, p.c.acento, p.c.contorno]) + esc(m.nome); })) +
      '<p class="dica">Escolha um tema pronto para começar e depois mude o que quiser nas outras abas. A prévia em cima mostra o resultado na hora.</p>';
    if (aba === 'cores') corpo = g('paleta', opcoes(PALETAS, 'paleta', T.paleta, function (k, p) { return bolas([p.c.fundo, p.c.destaque, p.c.acento, p.c.contorno]) + esc(p.nome); })) +
      '<div class="criador-grupo"><span class="grupo-rotulo">cor principal</span><div class="cores-app">' + Object.keys(DESTAQUES).map(function (k) { var d = DESTAQUES[k]; return '<button type="button" class="bolinha-cor" data-destaque="' + k + '" aria-pressed="' + (T.destaque === k) + '" aria-label="' + esc(d.nome) + '" title="' + esc(d.nome) + '" style="background:' + (d.a || pal.c.acento) + '">' + (k === 'auto' ? '<span>auto</span>' : '') + '</button>'; }).join('') + '</div></div>' +
      (pal.familia === 'basico' ? '<div class="criador-grupo"><span class="grupo-rotulo">cor do fundo</span><div class="cores-app">' + Object.keys(FUNDO_CORES[pal.escuro ? 'escuro' : 'claro']).map(function (k) { var f = FUNDO_CORES[pal.escuro ? 'escuro' : 'claro'][k]; return '<button type="button" class="bolinha-cor fundo-cor" data-fundo-cor="' + k + '" aria-pressed="' + (T.fundoCor === k) + '" title="' + f[0] + '" aria-label="Fundo ' + f[0] + '" style="background:' + f[1] + '"></button>'; }).join('') + '</div></div>' : '');
    if (aba === 'fundo') corpo = g('papel de parede', opcoes(FUNDOS, 'fundo', T.fundo, function (k, n) { var u = fundoURL(k, pal); return '<span class="amostra-fundo" style="background:' + pal.c.fundo + ' ' + (u === 'none' ? '' : u) + '"></span>' + esc(n); }));
    if (aba === 'enfeites') corpo = g('marque quantos quiser', Object.keys(ENFEITES).map(function (k) { return '<button type="button" class="opcao opcao-enfeite" data-enfeite="' + k + '" aria-pressed="' + tem(k) + '"><span class="ic-enfeite" aria-hidden="true">' + iconeEnfeite(k) + '</span><span>' + esc(ENFEITES[k]) + '</span></button>'; }).join('')).replace('<div class="opcoes">', '<div class="opcoes opcoes-enfeites">') +
      '<p class="dica">Dica: dois ou três enfeites já deixam o tema com cara própria sem pesar.</p>' +
      (tem('kaomoji') ? g('carinhas', escolherCarinhas()) : '');
    if (aba === 'mascote') corpo = g('quem aparece', opcoes(MASCOTES, 'mascote', T.mascote, function (k, n) { return (k === 'nenhum' || k === 'figurinha' ? '' : mascote('feliz', '', k)) + esc(n); }) +
        '<label class="subir" for="sub-criar"><input type="file" id="sub-criar" class="subir-figurinha" accept="image/*">' + (figurinha ? 'trocar figurinha' : '+ usar imagem do aparelho') + '</label>') +
      g('detalhes', '<button type="button" class="opcao" data-sem-rosa="1" aria-pressed="' + !T.semRosa + '">' + (T.semRosa ? 'sem rosa no rosto' : 'com bochechas e orelhas rosa') + '</button>') +
      g('cor do mascote', opcoes(CORES_CORPO, 'cor-mascote', T.corMascote, function (k, c) { return (k !== 'auto' ? '<span class="ponto-cor" style="background:' + corCorpoHex(k) + '"></span>' : '') + esc(c.nome); })) +
      ((POSES_DE[T.mascote] || []).length > 1 ? g('pose', botoesPose('opcao')) : '') +
      (T.mascote === 'nenhum' ? '' : '<div class="humores">' + [['feliz', 'sobrou'], ['preocupado', 'apertou'], ['dormindo', 'dormindo']].map(function (h) { return '<figure>' + mascote(h[0], '', T.mascote) + '<figcaption>' + h[1] + '</figcaption></figure>'; }).join('') + '</div>');
    if (aba === 'letras') corpo = g('títulos e etiquetas', opcoes(TITULOS, 'titulos', T.titulos, function (k, f) { return '<span style="font-family:' + f.css + ';font-size:' + Math.round(15 * f.escala) + 'px">' + esc(f.nome) + '</span>'; })) +
      g('números (sempre fáceis de ler)', opcoes(NUMEROS, 'numeros', T.numeros, function (k, f) { return '<span style="font-family:' + f.css + ';font-weight:700">R$ 1.234,56</span>'; })) +
      g('tamanho', opcoes(TAMANHOS, 'tamanho', T.tamanho, function (k, t) { return esc(t.nome); })) +
      '<div class="campo"><label for="saud-criar" class="grupo-rotulo">frase do topo</label><input type="text" id="saud-criar" class="campo-saudacao" maxlength="28" value="' + esc(T.saudacao) + '"></div>';
    if (aba === 'caixas') corpo = g('moldura', opcoes(MOLDURAS, 'moldura', T.moldura, function (k, m) { return esc(m.nome) + ' <small>' + esc(m.dica) + '</small>'; })) +
      g('cantos', opcoes(CANTOS, 'cantos', T.cantos, function (k, c) { return esc(c.nome); }));
    return '<div class="criador-topo"><button type="button" class="link" data-ir="ajustes">‹ voltar</button><b>criar tema</b><span class="dica">' + esc(T.modelo ? MODELOS[T.modelo].nome : 'personalizado') + '</span></div>' +
      '<button type="button" class="btn" data-acao="nomear-tema">criar tema ♥</button>' +
      previaTema() +
      '<div class="seg abas-criador" role="tablist" aria-label="Partes do tema">' + ABAS_CRIADOR.map(function (a) { return '<button type="button" role="tab" data-aba-criador="' + a[0] + '" aria-pressed="' + (aba === a[0]) + '" aria-selected="' + (aba === a[0]) + '">' + a[1] + '</button>'; }).join('') + '</div>' +
      '<div class="criador-corpo">' + corpo + '</div>';
  }
  function telaAjustes() {
    var pal = paleta(), basico = pal.familia === 'basico', modo = pal.escuro ? 'escuro' : 'claro';
    var caixa = function (t, corpo) { return '<div class="caixa">' + tag(t) + corpo + '</div>'; };
    var meus = ESTADO_DB !== 'ok' ? '<p class="dica">Os temas salvos aparecem aqui quando a página está aberta no claude.ai com a sua conta.</p>'
      : SALVOS.length ? '<div class="modelos-app">' + SALVOS.map(function (x) {
          var pp = PALETAS[x.tema && x.tema.paleta] || pal, ativo = JSON.stringify(x.tema) === JSON.stringify(T);
          return '<div class="salvo-card"><button type="button" class="modelo-app" data-salvo="' + esc(x.id) + '" aria-pressed="' + ativo + '"><span class="mini-paleta">' + [pp.c.fundo, pp.c.acento, pp.c.contorno].map(function (c) { return '<i style="background:' + c + '"></i>'; }).join('') + '</span><b>' + esc(x.nome || 'sem nome') + '</b></button>' +
            '<button type="button" class="apagar-salvo' + (apagarId === x.id ? ' confirmar' : '') + '" data-apagar-salvo="' + esc(x.id) + '" aria-label="Apagar o tema ' + esc(x.nome || '') + '">' + (apagarId === x.id ? 'apagar?' : '×') + '</button></div>';
        }).join('') + '</div>'
      : '<p class="dica">Nenhum tema seu ainda. Crie um e ele aparece aqui.</p>';
    var cores = Object.keys(DESTAQUES).map(function (k) {
      var d = DESTAQUES[k];
      return '<button type="button" class="bolinha-cor" data-destaque="' + k + '" aria-pressed="' + (T.destaque === k) + '" aria-label="' + esc(d.nome) + '" title="' + esc(d.nome) + '" style="background:' + (d.a || pal.c.acento) + '">' + (k === 'auto' ? '<span>auto</span>' : '') + '</button>';
    }).join('');
    var paletas = Object.keys(PALETAS).filter(function (k) { return PALETAS[k].familia !== 'basico'; }).map(function (k) {
      var p = PALETAS[k];
      return '<button type="button" class="chip-paleta" data-paleta="' + k + '" aria-pressed="' + (T.paleta === k) + '"><span class="mini-paleta">' + [p.c.fundo, p.c.destaque, p.c.acento].map(function (c) { return '<i style="background:' + c + '"></i>'; }).join('') + '</span>' + esc(p.nome) + '</button>';
    }).join('');
    var basicoHTML = '<div class="modelos-app duas">' + [['basicoClaro', 'claro'], ['basicoEscuro', 'escuro']].map(function (b) {
      var p = PALETAS[b[0]];
      return '<button type="button" class="modelo-app" data-modo-basico="' + b[1] + '" aria-pressed="' + (basico && modo === b[1]) + '"><span class="mini-paleta">' + [p.c.fundo, p.c.sup, p.c.acento].map(function (c) { return '<i style="background:' + c + '"></i>'; }).join('') + '</span><b>básico ' + b[1] + '</b></button>';
    }).join('') + '</div>';
    if (basico) {
      basicoHTML += '<span class="grupo-rotulo" style="display:block;margin:12px 0 6px">fundo</span><div class="cores-app">' + Object.keys(FUNDO_CORES[modo]).map(function (k) { var f = FUNDO_CORES[modo][k]; return '<button type="button" class="bolinha-cor fundo-cor" data-fundo-cor="' + k + '" aria-pressed="' + ((T.fundoCor || Object.keys(FUNDO_CORES[modo])[0]) === k) + '" aria-label="Fundo ' + f[0] + '" title="' + f[0] + '" style="background:' + f[1] + '"></button>'; }).join('') + '</div>' +
        '<span class="grupo-rotulo" style="display:block;margin:12px 0 6px">papel de parede</span><div class="paletas-app">' + Object.keys(PAPEIS_BASICOS).map(function (k) { return '<button type="button" class="chip-paleta" data-fundo="' + k + '" aria-pressed="' + (T.fundo === k) + '">' + PAPEIS_BASICOS[k] + '</button>'; }).join('') + '</div>';
    }
    var dias = ''; for (var d = 1; d <= 28; d++) dias += '<option value="' + d + '"' + (S.virada === d ? ' selected' : '') + '>' + (d === 1 ? 'dia 1 (normal)' : 'dia ' + d) + '</option>';
    return caixa('temas personalizados', meus + '<button type="button" class="btn" data-acao="personalizar" style="margin-top:10px;width:100%">criar meu tema ✦</button>') +
      (tem('kaomoji') ? caixa('carinhas', escolherCarinhas()) : '') +
      caixa('básico', basicoHTML) +
      caixa('cores', '<span class="grupo-rotulo" style="display:block;margin-bottom:6px">cor principal</span><div class="cores-app">' + cores + '</div><span class="grupo-rotulo" style="display:block;margin:12px 0 6px">paletas</span><div class="paletas-app">' + paletas + '</div>') +
      caixa('virada do mês', '<div class="campo"><label for="virada">o mês vira no</label><select id="virada">' + dias + '</select></div><p class="dica" style="margin-top:8px">A partir desse dia o app já mostra o mês seguinte, como a próxima fatura do cartão. Use o dia em que a fatura fecha ou em que o salário cai.</p>') +
      caixa('quem está usando', '<div class="seg">' + PESSOAS.map(function (n) { return '<button type="button" data-pessoa="' + n + '" aria-pressed="' + (S.pessoa === n) + '">' + n + '</button>'; }).join('') + '</div><p class="dica" style="margin-top:8px">cada pessoa tem o seu próprio tema.</p>') +
      caixa('planilha', planilhaHTML()) +
      caixa('cópia de segurança', '<p class="dica" style="margin-bottom:10px">Baixa um arquivo com todas as contas, pagamentos e temas deste celular.</p><button type="button" class="btn btn-sec" data-acao="exportar" style="width:100%">baixar cópia dos dados</button>');
  }




  // ======================================================== janelas
  var folha = null;
  function abrirJanela(titulo, corpo, depois) {
    var nova = $('veu').hidden;
    $('veu').innerHTML = '<div class="janela' + (nova ? ' nova' : '') + '" role="dialog" aria-modal="true" aria-label="' + esc(titulo) + '"><div class="janela-barra"><h3>' + esc(titulo) + '</h3><div class="botoes"><span aria-hidden="true">_</span><span aria-hidden="true">□</span><button type="button" data-acao="fechar" aria-label="Fechar">×</button></div></div><div class="janela-corpo">' + corpo + '</div></div>';
    $('veu').hidden = false; if (depois) depois();
  }
  function fechar() { $('veu').hidden = true; $('veu').innerHTML = ''; folha = null; }
  function rotDiv(divA, t) { var a = r2((t || 0) * divA / 100); return divA + '% ' + PESSOAS[0] + ' (' + brl(a) + ') · ' + (100 - divA) + '% ' + PESSOAS[1] + ' (' + brl(r2((t || 0) - a)) + ')'; }
  function mesesDaConta(c) { var a = Math.max(0, c.ini), z = c.fim != null ? c.fim : MESES.length - 1, l = []; for (var k = a; k <= z; k++) l.push(k); return l; }
  function abrirEdicao(id) {
    var c = conta(id), m = S.mes, comp = c.dono === 'comp', t = total(c, m), pg = paga(c, m), muda = tipoDe(c) === 'variavel';
    folha = { tipo: 'editar', id: id, divA: c.divA, confirmar: false, modo: muda ? 'todos' : 'um' };
    var prox = []; for (var k = m + 1; k < Math.min(MESES.length, m + 7); k++) prox.push('<span>' + MES(k).curto + '<b>' + (total(c, k) ? brl(total(c, k)).replace('R$', '').trim() : '—') + '</b></span>');
    var grade = mesesDaConta(c).map(function (k) {
      return '<div class="campo' + (k === m ? ' atual' : '') + '"><label for="e-m' + k + '">' + MES(k).curto + (k === m ? ' · agora' : '') + '</label><input type="text" id="e-m' + k + '" class="e-mes" data-k="' + k + '" inputmode="decimal" value="' + campo(total(c, k)) + '"></div>';
    }).join('');
    abrirJanela(c.nome + '.exe', '<p class="dica">' + (comp ? 'dividida · a parte de ' + outra(S.pessoa) + ' muda junto' : esc(c.cat)) + (c.dia ? ' · vence dia ' + c.dia : ' · sem dia de vencimento') + '</p>' +
      '<div class="campo"><label for="e-dia">vence dia</label><input type="text" id="e-dia" inputmode="numeric" maxlength="2" placeholder="sem dia" value="' + (c.dia || '') + '"></div>' +
      '<div class="seg" role="group" aria-label="O que editar"><button type="button" data-modo-edicao="um" aria-pressed="' + !muda + '">só ' + MES(m).curto + '</button><button type="button" data-modo-edicao="todos" aria-pressed="' + muda + '">mês a mês</button></div>' +
      '<div id="e-um" style="display:grid;gap:12px"' + (muda ? ' hidden' : '') + '>' +
        '<div class="campo"><label for="e-val">valor total em ' + MES(m).longo + '</label><input type="text" id="e-val" inputmode="decimal" value="' + campo(t) + '"></div>' +
        '<div class="interruptor">usar nos próximos meses<button type="button" class="chave" id="e-diante" role="switch" aria-checked="false" aria-label="Usar esse valor nos próximos meses"></button></div>' +
        '<div class="campo"><span class="rotulo">próximos meses</span><div class="proximos">' + prox.join('') + '</div></div></div>' +
      '<div id="e-todos" style="display:grid;gap:10px"' + (muda ? '' : ' hidden') + '>' +
        '<p class="dica">Mude o valor de qualquer mês. A fatura subiu? É só trocar o número daquele mês. Deixe vazio o mês sem cobrança.</p>' +
        '<div class="grade grade-meses">' + grade + '</div>' +
        '<div class="acoes"><button type="button" class="btn btn-sec" data-acao="repetir-mes">repetir ' + MES(m).curto + ' nos seguintes</button></div>' +
        '<div class="linha-p"><span class="dica">total do período</span><b id="e-soma">' + brl(mesesDaConta(c).reduce(function (s2, k) { return s2 + total(c, k); }, 0)) + '</b></div></div>' +
      (comp ? '<div class="campo"><label for="e-div">divisão: <span id="e-div-rot">' + rotDiv(c.divA, t) + '</span></label><input type="range" id="e-div" min="0" max="100" value="' + c.divA + '"></div>' : '') +
      '<button type="button" class="btn" data-acao="salvar-edicao">salvar ♥</button><div class="acoes"><button type="button" class="btn btn-sec" data-acao="pagar-edicao">' + (pg ? 'desmarcar' : 'marcar paga') + '</button><button type="button" class="btn btn-perigo" data-acao="apagar">apagar</button></div>',
      function () { var e = muda ? $('e-m' + m) || document.querySelector('.e-mes') : $('e-val'); if (e) { e.focus(); e.select(); } });
  }
  function somaGrade() { var s2 = 0; document.querySelectorAll('.e-mes').forEach(function (i) { s2 += num(i.value) || 0; }); if ($('e-soma')) $('e-soma').textContent = brl(s2); }
  function abrirLancar() {
    folha = { tipo: 'lancar' };
    abrirJanela('lançar.exe', '<div class="lancar">' +
      '<button type="button" class="opcao-grande" data-acao="lancar-conta"><b>nova conta</b><small>todo mês, parcelada, só um mês ou valor que muda</small></button>' +
      '<button type="button" class="opcao-grande" data-acao="lancar-salario"><b>salário</b><small>salário base ou o valor recebido em um mês</small></button>' +
      '<button type="button" class="opcao-grande" data-acao="lancar-extra"><b>renda extra</b><small>freela, venda, presente em dinheiro</small></button></div>');
  }
  function abrirSalario() {
    var p = S.pessoa, m = S.mes, R = S.renda[p], meses = R.meses || {};
    folha = { tipo: 'salario' };
    var grade = MESES.map(function (x, k) {
      var v = salarioMes(p, k), mudou = meses[k] != null;
      return '<div class="campo' + (k === m ? ' atual' : '') + (mudou ? ' mudou' : '') + '"><label for="s-m' + k + '">' + x.curto + (mudou ? ' ✎' : '') + '</label><input type="text" id="s-m' + k + '" class="s-mes" data-k="' + k + '" data-orig="' + campo(v) + '" inputmode="decimal" value="' + campo(v) + '"></div>';
    }).join('');
    abrirJanela('salario.exe', '<div class="campo"><label for="s-base">salário base</label><input type="text" id="s-base" inputmode="decimal" value="' + campo(salarioBase(p, m)) + '" data-orig="' + campo(salarioBase(p, m)) + '"></div>' +
      '<p class="dica">o valor de um mês normal. Se mudar, vale de ' + MES(m).curto + ' em diante; os meses anteriores ficam como estão.</p>' +
      '<div class="secao-janela"><span class="rotulo">recebido em cada mês</span><p class="dica">veio diferente em algum mês? Troque o valor só daquele mês. Apague o campo para voltar ao salário base.</p>' +
      '<div class="grade grade-meses">' + grade + '</div></div>' +
      '<button type="button" class="btn" data-acao="salario">salvar ♥</button>');
  }
  function abrirExtra() {
    var r = calcular(S.pessoa, S.mes);
    folha = { tipo: 'extra' };
    abrirJanela('renda_extra.exe', '<p class="dica">dinheiro que entrou fora do salário em ' + MES(S.mes).longo + '</p>' + listaExtras(r) +
      '<div class="secao-janela"><div class="dois"><div class="campo"><label for="x-desc">o que foi</label><input type="text" id="x-desc" placeholder="ex.: freela"></div><div class="campo"><label for="x-val">valor</label><input type="text" id="x-val" inputmode="decimal" placeholder="0,00"></div></div>' +
      '<button type="button" class="btn" data-acao="extra">adicionar ♥</button></div>', function () { $('x-desc').focus(); });
  }
  var TIPOS_CONTA = [['fixa', 'todo mês', 'repete até eu apagar'], ['parcelada', 'parcelada', 'até a última parcela'], ['unica', 'só um mês', 'presente, conserto'], ['variavel', 'valor muda', 'fatura, luz, mercado']];
  function camposDoTipo(t) {
    var m = S.mes, opMes = function (de) { return MESES.map(function (x, i) { return i >= de ? '<option value="' + i + '">' + x.curto + '</option>' : ''; }).join(''); };
    if (t === 'fixa') return '<div class="campo"><label for="n-val">valor por mês</label><input type="text" id="n-val" inputmode="decimal" placeholder="0,00"></div>';
    if (t === 'parcelada') return '<div class="dois"><div class="campo"><label for="n-val">valor da parcela</label><input type="text" id="n-val" inputmode="decimal" placeholder="0,00"></div><div class="campo"><label for="n-parc">quantas parcelas</label><input type="text" id="n-parc" inputmode="numeric" placeholder="6"></div></div><p class="dica" id="n-parc-dica">a primeira cai em ' + MES(m).curto + '.</p>';
    if (t === 'unica') return '<div class="dois"><div class="campo"><label for="n-val">valor</label><input type="text" id="n-val" inputmode="decimal" placeholder="0,00"></div><div class="campo"><label for="n-mes">em qual mês</label><select id="n-mes">' + opMes(0).replace('value="' + m + '"', 'value="' + m + '" selected') + '</select></div></div>';
    return '<div class="campo"><span class="rotulo">valor de cada mês</span><div class="grade">' + [0, 1, 2, 3, 4, 5].map(function (k) { var i = m + k; return i < MESES.length ? '<div class="campo"><label for="n-g' + k + '">' + MES(i).curto + '</label><input type="text" id="n-g' + k + '" inputmode="decimal" placeholder="' + (k ? 'igual' : '0,00') + '"></div>' : ''; }).join('') + '</div><p class="dica">os meses seguintes repetem o último valor.</p></div>' +
      '<div class="campo"><label for="n-fim">até quando</label><select id="n-fim"><option value="">sem fim</option>' + opMes(m) + '</select></div>';
  }
  function abrirNova() {
    folha = { tipo: 'nova', dono: 'comp', conta: 'fixa', divA: 50 };
    abrirJanela('nova_conta.exe', '<div class="campo"><span class="rotulo">tipo</span><div class="tipos" id="n-tipos">' + TIPOS_CONTA.map(function (t, i) {
        return '<button type="button" class="tipo" data-tipo-conta="' + t[0] + '" aria-pressed="' + (i === 0) + '"><b>' + t[1] + '</b><small>' + t[2] + '</small></button>'; }).join('') + '</div></div>' +
      '<div class="campo"><label for="n-nome">nome</label><input type="text" id="n-nome" placeholder="ex.: internet" autocomplete="off"></div>' +
      '<div class="dois"><div class="campo"><label for="n-cat">categoria</label><select id="n-cat">' + CATEGORIAS.map(function (c) { return '<option>' + esc(c) + '</option>'; }).join('') + '</select></div><div class="campo"><label for="n-dia">vence dia</label><input type="text" id="n-dia" inputmode="numeric" maxlength="2" placeholder="opcional"></div></div>' +
      '<div id="n-campos" style="display:grid;gap:12px">' + camposDoTipo('fixa') + '</div>' +
      '<div class="campo"><span class="rotulo">de quem é</span><div class="seg" id="n-dono"><button type="button" data-dono="comp" aria-pressed="true">dividida</button>' + PESSOAS.map(function (n) { return '<button type="button" data-dono="' + n + '" aria-pressed="false">só ' + n + '</button>'; }).join('') + '</div></div>' +
      '<div class="campo" id="n-divbox"><label for="n-div">divisão</label><input type="range" id="n-div" min="0" max="100" step="5" value="50">' +
      '<div class="duo-mini"><span>' + PESSOAS[0] + ' <b id="n-pA">50%</b></span><span>' + PESSOAS[1] + ' <b id="n-pL">50%</b></span></div>' +
      '<div class="chips" style="margin:0">' + [50, 60, 40].map(function (x) { return '<button type="button" class="chip" data-div="' + x + '" aria-pressed="' + (x === 50) + '">' + x + '/' + (100 - x) + '</button>'; }).join('') + '</div></div>' +
      '<button type="button" class="btn" data-acao="salvar-nova">lançar ♥</button>', function () { $('n-nome').focus(); });
  }
  function valorBase() {
    if (folha.conta === 'variavel') { var e = $('n-g0'); return e ? num(e.value) : null; }
    var v = $('n-val'); return v ? num(v.value) : null;
  }
  function mostrarDivisao() {
    if (!$('n-pA')) return;
    var v = valorBase(), a = folha.divA;
    $('n-pA').textContent = a + '%' + (v ? ' · ' + brl(r2(v * a / 100)) : '');
    $('n-pL').textContent = (100 - a) + '%' + (v ? ' · ' + brl(r2(v - v * a / 100)) : '');
    document.querySelectorAll('[data-div]').forEach(function (x) { x.setAttribute('aria-pressed', Number(x.dataset.div) === a); });
  }
  function abrirPersonalizar() { folha = { tipo: 'temas' }; abrirJanela('temas.exe', '<div class="estudio">' + estudioHTML(true) + '</div>'); }
  function salvarEdicao() {
    var c = conta(folha.id), m = S.mes;
    if ($('e-dia')) c.dia = lerDia($('e-dia').value);
    if (folha.modo === 'todos') {
      var novos = {}, valores = [];
      document.querySelectorAll('.e-mes').forEach(function (i) { var x = num(i.value); x = x == null ? 0 : x; novos[i.dataset.k] = x; valores.push(x); });
      var iguais = valores.every(function (x) { return x === valores[0]; });
      if (iguais && valores.length) { c.val = {}; c.padrao = valores[0]; } else { c.val = novos; }
      if (c.dono === 'comp') c.divA = folha.divA;
      fechar(); render(); toast('valores de ' + c.nome + ' atualizados ♥'); return;
    }
    var v = num($('e-val').value);
    if (v == null) { toast('digite um valor.'); return; }
    if (v === total(c, m) && $('e-diante').getAttribute('aria-checked') !== 'true') { if (c.dono === 'comp') c.divA = folha.divA; fechar(); render(); toast('conta atualizada!'); return; }
    if ($('e-diante').getAttribute('aria-checked') === 'true') { for (var k = m; k < MESES.length; k++) c.val[k] = v; } else c.val[m] = v;
    if (c.dono === 'comp') c.divA = folha.divA;
    fechar(); render(); toast(c.dono === 'comp' ? 'salvo! a parte de ' + outra(S.pessoa) + ' mudou junto.' : 'valor atualizado!');
  }
  function salvarNova() {
    var f = folha, m = S.mes, nome = $('n-nome').value.trim();
    if (!nome) { toast('dê um nome para a conta.'); $('n-nome').focus(); return; }
    var c = { id: Dados.novoId(S.contas), nome: nome, cat: $('n-cat').value, dono: f.dono, divA: f.divA, dia: lerDia($('n-dia').value), ini: m, fim: null, val: {} };
    if (f.conta === 'variavel') {
      var ultimo = null; for (var k = 0; k < 6; k++) { var e = $('n-g' + k); if (!e) break; var v = num(e.value); if (v == null) v = ultimo; if (v != null) { c.val[m + k] = v; ultimo = v; } }
      if (ultimo == null) { toast('preencha pelo menos o primeiro mês.'); return; }
      c.padrao = ultimo; c.fim = $('n-fim').value === '' ? null : Number($('n-fim').value);
    } else {
      c.padrao = num($('n-val').value);
      if (c.padrao == null) { toast('digite o valor.'); $('n-val').focus(); return; }
      if (f.conta === 'parcelada') { var n = parseInt($('n-parc').value, 10); if (!(n > 0)) { toast('quantas parcelas?'); $('n-parc').focus(); return; } c.fim = Math.min(MESES.length - 1, m + n - 1); }
      if (f.conta === 'unica') { c.ini = c.fim = Number($('n-mes').value); }
    }
    S.contas.push(c); fechar(); S.aba = 'contas'; S.mes = c.ini; render(); toast('"' + nome + '" lançada!');
  }

  // ======================================================== mudanças de tema
  function mudar(campoT, valor) {
    if (campoT === 'modelo') T = deModelo(valor, T);
    else if (campoT === 'enfeite') { var i = T.enfeites.indexOf(valor); if (i > -1) T.enfeites.splice(i, 1); else T.enfeites.push(valor); T.modelo = null; }
    else if (campoT === 'bloco') { T.blocos[valor] = !T.blocos[valor]; }
    else if (campoT === 'carinhas') { T.carinhas = valor; }
    else { T[campoT] = valor; T.modelo = null; }
    var dentro = folha && folha.tipo === 'temas', corpo = document.querySelector('.janela-corpo'), rolagem = dentro && corpo ? corpo.scrollTop : 0;
    aplicarTema();
    if (dentro) { abrirPersonalizar(); document.querySelector('.janela-corpo').scrollTop = rolagem; }
    if (campoT === 'modelo') toast('tema ' + MODELOS[valor].nome + ' ♥');
  }
  function lerFigurinha(arquivo) {
    if (!arquivo || !/^image\//.test(arquivo.type)) { toast('escolha um arquivo de imagem.'); return; }
    var leitor = new FileReader();
    leitor.onload = function () {
      var img = new Image();
      img.onload = function () {
        var lado = 220, k = Math.min(1, lado / Math.max(img.width, img.height)), cv = document.createElement('canvas');
        cv.width = Math.round(img.width * k); cv.height = Math.round(img.height * k);
        cv.getContext('2d').drawImage(img, 0, 0, cv.width, cv.height);
        figurinha = cv.toDataURL('image/png');
        try { localStorage.setItem(CHAVE + '-figurinha', figurinha); } catch (e) {}
        mudar('mascote', 'figurinha'); toast('figurinha no lugar do mascote ♥');
      };
      img.src = leitor.result;
    };
    leitor.readAsDataURL(arquivo);
  }

  // ======================================================== eventos
  // pulinho no botão tocado; acha o botão de novo se a tela foi redesenhada
  function seletorDe(b) {
    if (b.id) return '#' + CSS.escape(b.id);
    var ks = Object.keys(b.dataset);
    if (!ks.length) return null;
    return (b.matches('.item') ? '.item' : b.tagName.toLowerCase()) + ks.map(function (k) {
      return '[data-' + k.replace(/[A-Z]/g, function (m) { return '-' + m.toLowerCase(); }) + '="' + String(b.dataset[k]).replace(/["\\]/g, '\\$&') + '"]';
    }).join('');
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('button, .item, .subir');
    if (!b) return;
    var sel = seletorDe(b);
    requestAnimationFrame(function () {
      var alvo = document.contains(b) ? b : (sel ? document.querySelector(sel) : null);
      if (!alvo) return;
      alvo.classList.remove('pulou'); void alvo.offsetWidth; alvo.classList.add('pulou');
      setTimeout(function () { alvo.classList.remove('pulou'); }, 500);
    });
  }, true);
  document.addEventListener('touchstart', function () {}, { passive: true }); // faz o :active funcionar no iPhone
  document.addEventListener('click', function (e) {
    if (e.target.id === 'veu') { fechar(); return; }
    var b = e.target.closest('button, .item, tr[data-mes]');
    if (!b) return;
    var d = b.dataset;
    if (d.modelo) { mudar('modelo', d.modelo); return; }
    if (d.paleta) { mudar('paleta', d.paleta); return; }
    if (d.destaque) { mudar('destaque', d.destaque); return; }
    if (d.carinhas) { mudar('carinhas', d.carinhas); return; }
    if (d.moldura) { mudar('moldura', d.moldura); return; }
    if (d.cantos) { mudar('cantos', d.cantos); return; }
    if (d.fundo) { mudar('fundo', d.fundo); return; }
    if (d.enfeite) { mudar('enfeite', d.enfeite); return; }
    if (d.mascote) { if (d.mascote === 'figurinha' && !figurinha) { var inp = b.closest('.opcoes').querySelector('.subir-figurinha'); if (inp) inp.click(); return; } mudar('mascote', d.mascote); return; }
    if (d.corMascote) { mudar('corMascote', d.corMascote); return; }
    if (d.titulos) { mudar('titulos', d.titulos); return; }
    if (d.numeros) { mudar('numeros', d.numeros); return; }
    if (d.tamanho) { mudar('tamanho', d.tamanho); return; }
    if (d.bloco) { mudar('bloco', d.bloco); return; }
    if (d.fundoCor) { mudar('fundoCor', d.fundoCor); return; }
    if (d.pose) { mudar('pose', d.pose); return; }
    if (d.semRosa) { mudar('semRosa', !T.semRosa); return; }
    if (d.estilo) { if (d.estilo === 'basico') { var esc2 = paleta().escuro; T = deModelo(esc2 ? 'basicoEscuro' : 'basicoClaro', T); } else { T = deModelo(paleta().escuro ? 'goticoEscuro' : 'goticoClaro', T); } aplicarTema(); return; }
    if (d.modoBasico) { var eraBasico = paleta().familia === 'basico', dest0 = T.destaque, pap0 = T.fundo, masc0 = T.mascote; T = deModelo(d.modoBasico === 'escuro' ? 'basicoEscuro' : 'basicoClaro', T); if (eraBasico) { T.destaque = dest0; T.fundo = pap0; T.mascote = masc0; } T.fundoCor = null; aplicarTema(); return; }
    if (d.acaoTema === 'salvar') { salvarTema(); return; }
    if (d.acaoTema === 'copiar') { copiarFicha(); return; }
    if (d.salvo) { aplicarSalvo(d.salvo); return; }
    if (d.apagarSalvo) { apagarSalvo(d.apagarSalvo); return; }
    if (!$('app').contains(b)) return;
    if (d.pagar) { var k = d.pagar + '|' + (d.pagarMes != null ? d.pagarMes : S.mes); if (S.pagas[k]) delete S.pagas[k]; else { S.pagas[k] = 1; toast('paga! menos uma ♥'); } render(); return; }
    if (d.conta) { abrirEdicao(Number(d.conta)); return; }
    if (d.mes) { S.mes = Number(d.mes); render(); return; }
    if (d.ir && S.aba === 'criar' && d.ir !== 'nova' && temaAntes) { T = temaAntes; temaAntes = null; aplicarTema(); }
    if (d.ir) { if (d.ir === 'nova') abrirLancar(); else { fechar(); S.aba = d.ir; render(); $('conteudo').scrollTop = 0; } return; }
    if (d.filtro) { S.filtro = d.filtro; render(); return; }
    if (d.vista) { S.vista = d.vista; render(); return; }
    if (d.abaCriador) { S.abaCriador = d.abaCriador; render(); return; }
    if (d.visao) { S.visao = d.visao; render(); return; }
    if (d.modoEdicao) { folha.modo = d.modoEdicao; b.parentNode.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); $('e-um').hidden = d.modoEdicao !== 'um'; $('e-todos').hidden = d.modoEdicao !== 'todos'; return; }
    if (d.tipoConta) { folha.conta = d.tipoConta; $('n-tipos').querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); $('n-campos').innerHTML = camposDoTipo(d.tipoConta); mostrarDivisao(); return; }
    if (d.div) { folha.divA = Number(d.div); $('n-div').value = folha.divA; mostrarDivisao(); return; }
    if (d.pessoa && folha && folha.tipo === 'ola') { fechar(); TP[S.pessoa] = T; S.pessoa = d.pessoa; T = TP[S.pessoa] || temaInicial(S.pessoa); aplicarTema(); toast('oi, ' + S.pessoa + '! ♥'); return; }
    if (d.pessoa) { TP[S.pessoa] = T; S.pessoa = d.pessoa; T = TP[S.pessoa] || temaInicial(S.pessoa); aplicarTema(); toast('agora no app de ' + S.pessoa + '.'); return; }
    if (d.dono) { folha.dono = d.dono; $('n-dono').querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); $('n-divbox').hidden = d.dono !== 'comp'; return; }
    if (b.id === 'n-varia' || b.id === 'e-diante') { var lig = b.getAttribute('aria-checked') !== 'true'; b.setAttribute('aria-checked', lig); if (b.id === 'n-varia') { folha.varia = lig; $('n-fixo').hidden = lig; $('n-grade').hidden = !lig; } return; }
    if (d.tirarExtra !== undefined) { S.renda[S.pessoa].extras[S.mes].splice(Number(d.tirarExtra), 1); render(); if (folha && folha.tipo === 'extra') abrirExtra(); return; }
    var acao = d.acao;
    if (acao === 'fechar') fechar();
    else if (acao === 'nomear-tema') abrirNomeTema();
    else if (acao === 'personalizar') { temaAntes = JSON.parse(JSON.stringify(T)); T = deModelo('basicoClaro', T); fechar(); S.aba = 'criar'; S.abaCriador = 'base'; aplicarTema(); S.abaCriador = S.abaCriador || 'base'; render(); $('conteudo').scrollTop = 0; }
    else if (acao === 'lancar-conta') abrirNova();
    else if (acao === 'lancar-salario') abrirSalario();
    else if (acao === 'lancar-extra') abrirExtra();
    else if (acao === 'salvar-edicao') salvarEdicao();
    else if (acao === 'repetir-mes') { var base = $('e-m' + S.mes); if (!base) { toast(MES(S.mes).curto + ' não faz parte desta conta.'); return; } document.querySelectorAll('.e-mes').forEach(function (i) { if (Number(i.dataset.k) > S.mes) i.value = base.value; }); somaGrade(); toast('repetido nos meses seguintes.'); }
    else if (acao === 'salvar-nova') salvarNova();
    else if (acao === 'exportar') {
      var blob = new Blob([JSON.stringify(Dados.exportar(), null, 2)], { type: 'application/json' });
      var a = document.createElement('a'); a.href = URL.createObjectURL(blob);
      a.download = 'batcoin-' + new Date().toISOString().slice(0, 10) + '.json';
      document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
      toast('cópia baixada ♥');
    }
    else if (acao === 'conectar-planilha') {
      var cod = d.como ? folha.codigo : ($('codigo-planilha') || {}).value;
      if (!d.como && S.contas.length) {
        folha = { tipo: 'conectar', codigo: cod };
        abrirJanela('planilha.exe', '<p>Este celular já tem ' + S.contas.length + ' conta(s). O que fazer com elas?</p>' +
          '<button type="button" class="btn" data-acao="conectar-planilha" data-como="planilha">usar só o que está na planilha</button>' +
          '<button type="button" class="btn btn-sec" data-acao="conectar-planilha" data-como="juntar">juntar com as da planilha</button>' +
          '<p class="dica">Se você só estava testando o app, use só a planilha.</p>');
        return;
      }
      fechar(); toast('conectando…');
      Dados.planilha.conectar(cod, d.como || 'planilha').then(function (e) { render(); toast(e.fase === 'erro' ? '! ' + e.msg : 'planilha conectada ♥'); }, function (err) { toast('! ' + err.message); });
    }
    else if (acao === 'sincronizar') { toast('sincronizando…'); Dados.planilha.sincronizar().then(function (e) { toast(e.fase === 'erro' || e.fase === 'offline' ? '! ' + e.msg : 'tudo em dia ♥'); }); }
    else if (acao === 'desconectar-planilha') {
      if (!b.classList.contains('confirmar')) { b.classList.add('confirmar'); b.textContent = 'desconectar?'; return; }
      Dados.planilha.desconectar(); render(); toast('planilha desconectada');
    }
    else if (acao === 'pagar-edicao') { var kk = folha.id + '|' + S.mes; if (S.pagas[kk]) delete S.pagas[kk]; else S.pagas[kk] = 1; fechar(); render(); toast(S.pagas[kk] ? 'paga! menos uma ♥' : 'desmarcada.'); }
    else if (acao === 'apagar') { if (!folha.confirmar) { folha.confirmar = true; b.textContent = 'toque de novo'; b.classList.add('confirmar'); return; } S.contas = S.contas.filter(function (c) { return c.id !== folha.id; }); fechar(); render(); toast('conta apagada.'); }
    else if (acao === 'salario') { var R = S.renda[S.pessoa], ib = $('s-base'); R.meses = R.meses || {}; R.bases = R.bases || {};
      if (ib.value !== ib.dataset.orig) { var v = num(ib.value); if (v == null) { toast('digite o salário base.'); return; } Object.keys(R.bases).forEach(function (k) { if (Number(k) >= S.mes) delete R.bases[k]; }); var primeiro = !R.salario && !Object.keys(R.bases).length; if (S.mes <= 0 || primeiro) { R.salario = v; R.bases = {}; } else R.bases[S.mes] = v; }
      document.querySelectorAll('.s-mes').forEach(function (i) { if (i.value === i.dataset.orig) return; var k = Number(i.dataset.k), mv = num(i.value); if (mv == null || mv === salarioBase(S.pessoa, k)) delete R.meses[k]; else R.meses[k] = mv; });
      fechar(); render(); toast('salário salvo ♥'); }
    else if (acao === 'extra') { var val = num($('x-val').value), desc = $('x-desc').value.trim() || 'renda extra'; if (val == null) { toast('digite o valor recebido.'); return; } var ex = S.renda[S.pessoa].extras; (ex[S.mes] = ex[S.mes] || []).push({ desc: desc, valor: val }); render(); abrirExtra(); toast('+ ' + brl(val) + ' ♥'); }
  });
  document.addEventListener('change', function (e) {
    if (e.target.classList.contains('subir-figurinha')) lerFigurinha(e.target.files[0]);
    if (e.target.id === 'virada') { S.virada = Number(e.target.value) || 1; S.mes = mesAtual(); render(); toast(S.virada > 1 ? 'a partir do dia ' + S.virada + ' o app já mostra o mês seguinte.' : 'o mês vira no dia 1.'); }
  });
  document.addEventListener('input', function (e) {
    if (e.target.classList && e.target.classList.contains('campo-nome-tema')) { nomeNovo = e.target.value; return; }
    if (e.target.classList && e.target.classList.contains('campo-saudacao')) {
      T.saudacao = e.target.value; $('ola-saud').textContent = T.saudacao; gravarLocal(CHAVE + '-tema', T);
      document.querySelectorAll('.campo-saudacao').forEach(function (x) { if (x !== e.target) x.value = T.saudacao; }); TP[S.pessoa] = T; gravarLocal(CHAVE + '-temas-pessoa', TP);
      return;
    }
    if (!folha) return;
    if (e.target.id === 'e-div') { folha.divA = Number(e.target.value); $('e-div-rot').textContent = rotDiv(folha.divA, num($('e-val').value)); }
    if (e.target.classList && e.target.classList.contains('e-mes')) somaGrade();
    if (e.target.id === 'e-val' && $('e-div-rot')) $('e-div-rot').textContent = rotDiv(folha.divA, num(e.target.value));
    if (e.target.id === 'n-div') { folha.divA = Number(e.target.value); mostrarDivisao(); }
    if (folha.tipo === 'nova' && (e.target.id === 'n-val' || e.target.id === 'n-g0')) mostrarDivisao();
    if (e.target.id === 'n-parc') { var np = parseInt(e.target.value, 10); $('n-parc-dica').textContent = np > 0 ? 'última parcela em ' + MES(Math.min(MESES.length - 1, S.mes + np - 1)).curto + '.' : 'a primeira cai em ' + MES(S.mes).curto + '.'; }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && e.target.classList && e.target.classList.contains('campo-nome-tema')) { salvarTema(); return; }
    if (e.key === 'Escape' && folha) fechar();
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('item')) { e.preventDefault(); abrirEdicao(Number(e.target.dataset.conta)); }
  });

  function corDaBarra() {
    var m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute('content', getComputedStyle(document.documentElement).getPropertyValue('--destaque').trim() || '#F9D3E4');
  }
  function avisoOffline() {
    var el = document.getElementById('offline');
    if (el) el.hidden = navigator.onLine !== false;
  }
  window.addEventListener('online', avisoOffline); window.addEventListener('offline', avisoOffline);
  function textoPlanilha() {
    var e = Dados.planilha.estado(), h = e.quando ? new Date(e.quando) : null, hoje = new Date();
    var dois = function (n) { return (n < 10 ? '0' : '') + n; };
    var hora = h ? (h.toDateString() === hoje.toDateString() ? 'hoje às ' : dois(h.getDate()) + '/' + dois(h.getMonth() + 1) + ' às ') + dois(h.getHours()) + ':' + dois(h.getMinutes()) : 'ainda não';
    if (e.fase === 'buscando') return 'buscando a planilha…';
    if (e.fase === 'enviando') return 'enviando para a planilha…';
    if (e.fase === 'offline') return 'sem internet · as mudanças esperam aqui e vão quando a conexão voltar';
    if (e.fase === 'erro') return '<span style="color:var(--coral)">! ' + esc(e.msg) + '</span><br>última sincronização: ' + hora;
    return '♥ conectada · sincronizado ' + hora + (e.pendente ? ' · mudanças esperando' : '') + (e.msg ? '<br>' + esc(e.msg) : '');
  }
  function planilhaHTML() {
    if (!Dados.planilha.estado().conectada) return '<p class="dica" style="margin-bottom:10px">Para os dois celulares verem as mesmas contas, cole o código que aparece na planilha em 💳 Gerenciar Contas › 📱 App Batcoin › Conectar o app.</p>' +
      '<div class="campo"><label for="codigo-planilha">código de conexão</label><input type="text" id="codigo-planilha" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="https://script.google.com/…"></div>' +
      '<button type="button" class="btn" data-acao="conectar-planilha" style="width:100%;margin-top:10px">conectar ♥</button>';
    return '<p class="dica" id="estado-planilha" style="margin-bottom:10px">' + textoPlanilha() + '</p>' +
      '<div class="acoes"><button type="button" class="btn btn-sec" data-acao="sincronizar">sincronizar agora</button><button type="button" class="btn btn-perigo" data-acao="desconectar-planilha">desconectar</button></div>';
  }
  Dados.planilha.ocupado(function () { return !$('veu').hidden; });
  Dados.planilha.aoReceber(function () {
    var N = Dados.carregar(BASE); if (!N) return;
    S.contas = N.contas; S.pagas = N.pagas; S.renda = N.renda; S.virada = N.virada || 1;
    PESSOAS.forEach(function (p) { if (!S.renda[p]) S.renda[p] = { salario: 0, extras: {} }; S.renda[p].extras = S.renda[p].extras || {}; S.renda[p].meses = S.renda[p].meses || {}; S.renda[p].bases = S.renda[p].bases || {}; });
    render();
  });
  Dados.planilha.aoMudarEstado(function () { var el = $('estado-planilha'); if (el) el.innerHTML = textoPlanilha(); });
  aplicarTema();
  avisoOffline();
  Dados.planilha.sincronizar();
  if (PRIMEIRA_VEZ) {
    folha = { tipo: 'ola' };
    abrirJanela('oi! ♥', '<div class="ola-quem"><p>Quem vai usar o app neste celular?</p>' + PESSOAS.map(function (n) { return '<button type="button" class="btn" data-pessoa="' + n + '">' + n + '</button>'; }).join('') +
      '<p class="dica">Dá para trocar depois em Tema › quem está usando.</p></div>');
  }
})();
