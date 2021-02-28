# テンプレートエンジン

HTML 出力を別ファイルから生成するエンジン

## テンプレートを利用した出力

`res.render(view [, locals]);`

- view：テンプレートファイルのパス
- locals：テンプレートへ渡したいデータ

## テンプレートエンジンの設定

`app.set("view engine", engine);`

- engine：テンプレートエンジン名を指定
