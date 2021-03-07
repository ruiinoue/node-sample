# gulp によるファイル操作方法

## 入力元

`gulp.src(glob, [, options])`

- glob (string / string[])
  入力元ファイルを指定する glob 文字列
- options (object)
  node-glob へ渡すオプション。
  cwd カレントワークディレクトリ

## 出力先

`gulp.dest(path, [, options])`

- path (string)
  出力先ディレクトリを指定
- options (object)
  オプションを指定。
  cwd カレントワークディレクトリ

## ファイル操作の確認

- コピー
- 削除
- リネーム
- 結合
