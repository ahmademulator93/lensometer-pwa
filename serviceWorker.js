const staticDevCoffee = "lensometer";
const assets = [
  "/lensometer-pwa/",
  "/lensometer-pwa/index.html",
  "/lensometer-pwa/css/style.css",
  "/lensometer-pwa/js/app.js",
  "/lensometer-pwa/icon.png",
  "/lensometer-pwa/images/"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
