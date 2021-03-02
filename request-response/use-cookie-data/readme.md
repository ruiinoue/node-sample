# クッキー情報

- express 標準機能を利用
  `req.get("cookie")`
- cookie-parder ミドルウェアを利用

## クッキー情報の取得

`req.cookies`

- クッキーが存在する場合、パースされてオブジェクトとして設定
- 文字列で設定されているので数値やブーリアンには注意

## クッキー情報の設定

`res.cookies(name, value [, options])`

- name
  設定したいクッキー名を設定
- value
  上記クッキー名に指定したい値を設定
- options
  secure や maxAge などのオプションを設定
