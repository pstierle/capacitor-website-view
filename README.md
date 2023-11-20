# capacitor-webview

WebView for Capacitor Apps

## Install

```bash
npm install capacitor-webview
npx cap sync
```

## API

<docgen-index>

* [`setServerBasePath(...)`](#setserverbasepath)
* [`getServerBasePath()`](#getserverbasepath)
* [`persistServerBasePath()`](#persistserverbasepath)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

****** WEB VIEW PLUGIN *******

### setServerBasePath(...)

```typescript
setServerBasePath(options: WebViewPath) => Promise<void>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#webviewpath">WebViewPath</a></code> |

--------------------


### getServerBasePath()

```typescript
getServerBasePath() => Promise<WebViewPath>
```

**Returns:** <code>Promise&lt;<a href="#webviewpath">WebViewPath</a>&gt;</code>

--------------------


### persistServerBasePath()

```typescript
persistServerBasePath() => Promise<void>
```

--------------------


### Interfaces


#### WebViewPath

| Prop       | Type                |
| ---------- | ------------------- |
| **`path`** | <code>string</code> |

</docgen-api>
