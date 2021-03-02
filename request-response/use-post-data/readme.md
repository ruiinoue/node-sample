# POST データの扱い方

## フォームからの POST データ

- 通常
  `IncomingMessage`のイベントを処理してデータを構築する

```
app.post("/", (req, res) => {
    var data = "";
    req.on("data", (chunk) => {
        data += chunk;
    });
    req.on("end", () => {
        console.log(data);
    });
});
```

生のデータは扱いづらいから`body-parser`ミドルウェアを利用する。

## body-parser

- リクエストボディをパースして`req.body`へ保存して使いやすくしてくれるミドルウェア

- インストール
  `$ npm install body-parser --save`

## bodyParser.urlencorded

`bodyParser.urlencorded([options])`

- options
  "extended"
  false の場合：単純なキーバリューに展開
  true の場合：複合型で展開

## bodyParser.json

`bodyParser.json([options])`

- options
  "type"
  パースする Content-Type を指定
  デフォルトは"application/json"
