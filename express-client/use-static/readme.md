# 静的ファイルの配信方法について

`express.static(route [, options])`

- route (string)
  配信したい静的ファイルが配置してあるサーバーサイドのルートパス
- options (object)
  静的ファイル配信時のオプション
  - etag (boolean) Etag を利用するかどうか
  - lastModified (boolean) Last-Modified を利用するかどうか
  - maxAge (numbar) max-age をミリ秒で指定
    ・・・など。
