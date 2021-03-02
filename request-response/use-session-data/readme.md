# セッション情報

セッション ID から DB に保存されているセッション情報を取得してくる方法。

## express-session

- Node.js + Express でセッションを扱うためのミドルウェア

## express-session のオプション

`session(options)`

- options
  secret（必須）:クッキーへ保存する際の暗号化キー
  resave（デフォルト：true）：セッションの有無にかかわらずサーバー情報を更新するかどうか
  savaUninitialized（デフォルト：true）：初期化されていない新規セッションを保存するかどうか
  name：クッキーへ保存する際のキー名

## セッション情報の取得

`req.session.KEY`

- KEY
  取り出したいセッションキー名

## セッション情報の設定

`req.session.KEY = VALUE`

- KEY
  保存したいセッションキー名
- VALUE
  上記セッションキー名に保存したい値
