下記のように記述すると

<pre>
```lawtext
文章
```
</pre>

以下のHTMLにフォーマットされるので、

```
<pre lang="lawtext">
 <code>
   文章
 </code>
</pre>
```

該当する`<code>`タグのスタイルを変更(`style="white-space: pre-wrap;"`)するChrome Extensionです。

CChrome Extensionの「パッケージ化されてない拡張機能を読み込む」から読み込みできます。  
Service Workerとして起動しますが、background.js のURL判定の箇所で、スタイル変更するページURLを限定することが可能です。

```
if (info.status === 'complete' && tab.url.indexOf('https://github.com/') !== -1) {
```