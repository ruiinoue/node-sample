## Gulp のインストール

- 開発用にインストール

`$ npm install gulp --save-dev`

- gulp を実行させる

1. node_modules に直接アクセスする

`$ node node_modules/gulp/bin/gulp.js`

2. package.json の scripts に記述

```
{
    ・・・
    "scripts": {
        "gulp": "gulp",
        ・・・
    }
    ・・・
}
```

`$ npm run`の引数に当てることができる。

`$ npm run gulp`
