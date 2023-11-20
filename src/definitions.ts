export interface WebViewPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
