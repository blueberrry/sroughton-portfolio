if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register(new URL('service-worker.js', import.meta.url), { type: 'module' })
      .then((registration) => {
        console.log('** Service worker registered with scope:', registration.scope);
        registration.active.postMessage('~~~ Testing Service Worker ~~~');
      })
      .catch((error) => {
        console.error('** Service Worker registration failed **:', error);
      });
  });
} else {
  console.log('Service Worker is not supported');
}

/// FIXED -- moved index.html to root of app
