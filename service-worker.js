import { manifest, version as currentVersion } from '@parcel/service-worker';

/**
 *  Caching assets specified in the manifest variable.
 *  Opens cache storage with the specified version and adds all assets
 *  from the manifest to the cache.
 */
async function installCaches() {
  const cache = await caches.open(currentVersion, { type: 'persistent' }); // todo: implications for storage and user privacy when persisting (cached assets remain when restarted/refreshed)
  manifest && console.log(`manifest ${manifest}`);
  currentVersion && console.log(`version ${currentVersion}`);

  await cache.addAll(manifest);
}

// Listen for the SW install event.
self.addEventListener('install', (event) => {
  console.log('Service Worker installed (service-worker.js)');

  event.waitUntil(self.skipWaiting()); // always activate updated SW immediately

  event.waitUntil(installCaches()); // cache assets.
});

///efioufieufieu
/**
 * Responsible for activating the caches and deleting outdated caches.
 * Deletes any caches where the key does not match the current version
 */
async function activateCaches() {
  const keys = await caches.keys();
  keys && console.log(`cache keys: ${keys}`);

  await Promise.all(keys.map((key) => key !== currentVersion && caches.delete(key)));
}

// Listen for the SW activate event
self.addEventListener('activate', (event) => {
  console.log('Service Worker activated (service-worker.js)');
  event.waitUntil(activateCaches());
});

// Listen for messages from the main script
self.addEventListener('message', (event) => {
  // filter out react dev tools messages
  // if (event.data.source === 'react-devtools-bridge') return;
  // if (event.data.source === 'react-devtools-content-script') return;
  // if (event.data.source === 'react-devtools-backend-manager') return;
  // if (event.data.source === 'react-devtools-hook') return;

  if (event.data === 'hi') {
    self.clients.matchAll().then((clients) => {
      clients.forEach((client) => {
        console.log('Message from the main script:', event.data);
        client.postMessage('hi from the service worker');
      });
    });
  } else {
    console.log('Message from the main script:', event.data);
  }
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    (async () => {
      const r = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (r) {
        return r;
      }
      const response = await fetch(e.request);
      const cache = await caches.open(currentVersion);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })()
  );
});
