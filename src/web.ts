import { WebPlugin } from '@capacitor/core';

import type { WebViewPlugin } from './definitions';

export class WebViewWeb extends WebPlugin implements WebViewPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
