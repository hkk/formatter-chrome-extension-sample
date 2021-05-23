GitHub Markdown Preview では、下記のように記述すると

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

該当する`<pre lang="lawtext"><code>〜</code></pre>`タグのスタイルのみを変更(`<pre lang="lawtext"><code style="white-space: pre-wrap;">〜</code></pre>`)するChrome Extensionです。

拡張機能の「パッケージ化されてない拡張機能を読み込む」から読み込みできます。  
Service Workerとして起動しますが、background.js のURL判定の箇所で、スタイル変更するページURLを限定することが可能です。

```
if (info.status === 'complete' && tab.url.indexOf('https://github.com/') !== -1) {
```

サンプル
<pre>
```lawtext
第1条　本契約において「秘密情報」とは、本目的のために、開示者が開示等する際に秘密である旨を明示した営業上または技術上の情報、および、これらを含む記録媒体、ならびに、素材、機器およびその他有体物をいうものとする。
```
</pre>
Chrome Extensionを読み込んだ後に本ページにアクセスすると下記エリアの改行が有効になります。
```lawtext
第1条　本契約において「秘密情報」とは、本目的のために、開示者が開示等する際に秘密である旨を明示した営業上または技術上の情報、および、これらを含む記録媒体、ならびに、素材、機器およびその他有体物をいうものとする。
```