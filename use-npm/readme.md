
# Node.js モジュール読み込み順

```
require(X)
```

1. Xがコアモジュールであればコアモジュールを返して終了
2. Xが `"/"` で始まっていれば Yにシステムルート( `C:\` )を設定
3. Xが `"/"` , `"./"`, `"../"` で始まっていれば
    1. `"Y+X"`
    2. `"Y+X.js"`
    3. `"Y+X.json"`
    4. `"Y+X.node"`
    5. `"Y+X/package.json"`
    6. `"Y+X/index.js"`
    7. `"Y+X/index.json"`
    8. `"Y+X/index.node"`
4. Nodeモジュールの読み込み
   （"node_modules"ディレクトリから見た相対パスでファイルを取得）
    1. `"node_modules/+X"`
    2. `"node_modules/+X.js"`
    3. `"node_modules/+X.json"`
    4. `"node_modules/+X.node"`
    5. `"node_modules/+X/package.json"`
    6. `"node_modules/+X/index.js"`
    7. `"node_modules/+X/index.json"`
    8. `"node_modules/+X/index.node"`
5. "not found"エラー