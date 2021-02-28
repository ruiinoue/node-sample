# ルーティング

## 基本構文

`app.METHOD(PATH, CALLBACK)`

- METHOD
  リクエストメソッドを指定
- PATH
  URL ルーティングを指定
- CALLBACK
  PATH にマッチした際の動作を指定

## パス設定

- 名前付きパラメーターを利用することで URL 中の値を分析してパラメーターとして受け取れる

```
app.get("/user/:id", (req, res) => {
    console.log(res.params.id);
});
```

## 名前付きパラメーターのオプション

- 基本形

構文
`app.get("/user/:id", (req, res) => {})`

URL とマッチングリングのサンプル

- GET: /user → ×
- GET: /user/ → ×
- GET: /user/123 → ○
- GET: /user/abc → ○
- GET: /user/abc/def → ×

- オプション付き

構文
`app.get("/user/:id?", (req, res) => {})`

URL とマッチングリングのサンプル

- GET: /user → ○
- GET: /user/ → ○
- GET: /user/123 → ○
- GET: /user/abc → ○
- GET: /user/abc/def → ×

- 0 以上

構文
`app.get("/user/:id*", (req, res) => {})`

URL とマッチングリングのサンプル

- GET: /user → ×
- GET: /user/ → ×
- GET: /user/123 → ○
- GET: /user/abc → ○
- GET: /user/abc/def → ○

- 1 以上

構文
`app.get("/user/:id+", (req, res) => {})`

URL とマッチングリングのサンプル

- GET: /user → ×
- GET: /user/ → ×
- GET: /user/123 → ○
- GET: /user/abc → ○
- GET: /user/abc/def → ×

- カスタムパッチパラメーター

構文
`app.get("/user/:id(¥¥d+)", (req, res) => {})`

URL とマッチングリングのサンプル

- GET: /user → ×
- GET: /user/ → ×
- GET: /user/123 → ○
- GET: /user/abc → ×
- GET: /user/abc/def → ×

- 名前なしパラメーター

構文
`app.get("/user/(¥¥d+)", (req, res) => {})`

URL とマッチングリングのサンプル

- GET: /user → ×
- GET: /user/ → ×
- GET: /user/123 → ○
- GET: /user/abc → ×
- GET: /user/abc/def → ×

## `express.Router`

`var router = express.Router()`

- ルーティングモジュールを作成できる。
- 指定できる内容はルーティングに関わるもの。
