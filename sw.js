/*
 * sw.js · Batcoin
 * Guarda o app no celular para abrir sem internet.
 * Gerado por montar_app.py: a versão muda sozinha quando algum arquivo do app muda,
 * e aí o celular baixa a versão nova e passa a usá-la na próxima abertura.
 */
var VERSAO = '2c122ac177';
var CACHE_APP = 'batcoin-' + VERSAO;
var CACHE_FONTES = 'batcoin-fontes';
var ARQUIVOS = [
  "./",
  "index.html",
  "app.css?v=2c122ac177",
  "dados.js?v=2c122ac177",
  "app.js?v=2c122ac177",
  "manifest.webmanifest",
  "favicon.png",
  "apple-touch-icon.png",
  "icone-192.png",
  "icone-512.png",
  "icone-512-maskable.png"
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE_APP).then(function (c) { return c.addAll(ARQUIVOS); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (nomes) {
    return Promise.all(nomes.filter(function (n) { return n !== CACHE_APP && n !== CACHE_FONTES; }).map(function (n) { return caches.delete(n); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);

  // fontes do Google: guarda na primeira vez e usa a cópia depois
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(CACHE_FONTES).then(function (c) {
      return c.match(req).then(function (salvo) {
        var rede = fetch(req).then(function (r) { if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; });
        return salvo || rede;
      });
    }));
    return;
  }

  if (url.origin !== self.location.origin) return;

  // abrir o app: tenta a rede (pega a versão nova); sem internet, ou se a rede demorar
  // mais de 3 segundos, usa a cópia guardada
  if (req.mode === 'navigate') {
    e.respondWith(new Promise(function (resolver) {
      var copia = function () { return caches.match('index.html', { ignoreSearch: true }); };
      var feito = false;
      var timer = setTimeout(function () { copia().then(function (r) { if (r && !feito) { feito = true; resolver(r); } }); }, 3000);
      fetch(req).then(function (r) {
        clearTimeout(timer);
        if (r.ok) { var guardar = r.clone(); caches.open(CACHE_APP).then(function (c) { c.put('index.html', guardar); }); }
        if (!feito) { feito = true; resolver(r); }
      }, function () {
        clearTimeout(timer);
        copia().then(function (r) { if (!feito) { feito = true; resolver(r || Response.error()); } });
      });
    }));
    return;
  }

  // demais arquivos: cópia guardada primeiro
  e.respondWith(caches.match(req).then(function (salvo) { return salvo || fetch(req); }));
});
