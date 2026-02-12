const cacheName = 'lucky-wheel-v2';
const assets = [
  './',
  './index.html',
  './icon.png'
];

// تثبيت ملفات الكاش
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// جلب البيانات من الكاش عند انقطاع الشبكة
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});