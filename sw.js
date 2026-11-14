// Network-only service worker: no caching, so every update shows up immediately.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request).catch(() => new Response('لا يوجد اتصال بالإنترنت. اتصل بالنت وحاول تاني.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } })));
  }
});
