const cacheName = "cache-04";

this.addEventListener("install", (e) => {
  console.log("service Worker instasasalled");
});

this.addEventListener("activate", () => {
  console.log("service Worker activated");
  caches.keys().then((cacheNames) => {
    return Promise.all(
      cacheNames.map((cache) => {
        if (cache !== cacheName) {
          console.log("ser worker : cleaniing old cash");
          return caches.delete(cache);
        }
      })
    );
  });
});

this.addEventListener("fetch", (e) => {
  console.log("service worker fetching");
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const resClone = res.clone();
        caches.open(cacheName).then((cache) => {
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch((err) => caches.match(e.request).then((res) => res))
  );
});
