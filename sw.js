/* Elite Habit Tracker — offline cache. Bump the version when you upload new files. */
const V = 'eht-1.1.0';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(ASSETS)).catch(() => {})); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('message', e => { if (e.data === 'skip') self.skipWaiting(); });
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  const key = req.mode === 'navigate' ? './index.html' : req;
  e.respondWith(caches.open(V).then(async c => {
    const hit = await c.match(key, { ignoreSearch: true }) || (req.mode === 'navigate' ? await c.match('./', { ignoreSearch: true }) : null);
    const net = fetch(req).then(res => { if (res && res.ok && res.type === 'basic') c.put(key, res.clone()); return res; }).catch(() => hit);
    return hit || net;
  }));
});
