import { registerPlugin } from '@capacitor/core';

import type { WebViewPlugin } from './definitions';

const WebView = registerPlugin<WebViewPlugin>('WebView', {
  web: () => import('./web').then(m => new m.WebViewWeb()),
});

export * from './definitions';
export { WebView };
