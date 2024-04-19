import { createRoot } from 'react-dom/client';
import { createApp } from './src/App';

function renderApp(appId) {
  if (appId) {
    const domNode = document.getElementById(appId);

    if (domNode) {
      const root = createRoot(domNode);
      root.render(createApp());
    } else {
      console.log('No dom node found.');
    }
  } else {
    console.log('No app id.');
  }
}
// Renders app with custom dom id
renderApp('app-root');

// Servie worker main script

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.onmessage = function (event) {
    //log the response from the service worker
    console.log('Message received from the Service Worker: ', event.data);
  };
} else {
  console.log('Service Worker is not supported (index.js)');
}

// todo: add sentry
