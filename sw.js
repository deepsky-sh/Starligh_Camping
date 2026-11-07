/* 담터 별빛캠핑장 3D: 한 번 받은 모델·텍스처·소리·라이브러리를 기기에 보관해 다시 열 때 빠르게 불러옴.
   페이지(index.html)는 항상 최신을 먼저 받고(인터넷이 안 되면 보관본), 나머지는 보관본을 바로 쓰면서 뒤에서 새 버전으로 갱신 */
const CACHE = 'damteo-v1';
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const u = new URL(req.url);
  const same = u.origin === self.location.origin, lib = u.hostname === 'cdn.jsdelivr.net' || u.hostname === 'fonts.gstatic.com' || u.hostname === 'fonts.googleapis.com';
  if (!same && !lib) return;   // Firebase 등 실시간 연결은 건드리지 않음
  if (req.mode === 'navigate' || (same && (u.pathname.endsWith('/') || u.pathname.endsWith('.html')))){
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(ca => ca.put(req, c)); return r; }).catch(() => caches.match(req)));
    return;
  }
  e.respondWith(caches.open(CACHE).then(async ca => {
    const hit = await ca.match(req);
    const net = fetch(req).then(r => { if (r && (r.status === 200 || r.type === 'opaque')) ca.put(req, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
