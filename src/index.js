import { createRoot } from 'react-dom/client';
import { createApp } from './components/App';

export function renderApp(appId) {
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
