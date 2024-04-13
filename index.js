import { renderApp } from './src';

renderApp('app-root');

/**
 * Servie worker main script
 */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.onmessage = function (event) {
    //log the response from the service worker
    console.log('Message received from the Service Worker: ', event.data);
  };
} else {
  console.log('Service Worker is not supported (index.js)');
}
