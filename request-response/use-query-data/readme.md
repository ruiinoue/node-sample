# クエリ文字列を使ったデータ送信

- URL の末尾に?で始まる文字列を付与したデータ送信方法

- Express での送信方法
  `req.query`

## POST とクエリの違い（クエリの制限）

- クエリとして送信できる情報には制限がある
  ブラウザによって送信できる上限が決まっている
  あまり大きなデータは送信できない

- クエリだとアドレスデータが露出する
  セキュアな情報はクエリを渡せない

## POST とクエリの違い（POST の制限）

- POST 結果はブックマークできない
  POST はリクエストボディーに送信データがあるためブックマーク（URL 保存）では結果が保存できない
