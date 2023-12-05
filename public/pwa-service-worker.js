const _version = "v0.0.6";
const cacheName = "fryfolio-cache_" + _version;

const log = (...msg) =>
  console.log(`[Fryfolio ServiceWorker ${_version}]`, ...msg);

const fetchAndCache = async (event) => {
  const response = await fetch(event.request);
  const cachedResponse = response.clone();

  const cache = await caches.open(cacheName);
  cache.put(event.request, cachedResponse);

  return response;
};

self.addEventListener("install", (event) => {
  log("service worker installed");

  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll([
        "/icons/close.svg",
        "/icons/github.svg",
        "/icons/globe.svg",
        "/icons/video.svg",
        "/images/egg-illustration.svg",
      ]);
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  log("service worker activated");

  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (url.href.startsWith("chrome-extension")) {
    return;
  }

  // network, fallback to cache
  event.respondWith(
    fetchAndCache(event)
      .catch(() => {
        log("cache hit!");
        return caches.match(event.request);
      })
      .then((res) => res)
  );
});
