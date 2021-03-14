# MongoDB を Node.js で利用する

## MongoDB に接続するパッケージ

- mongodb（MongoClient、Db、Collection）

### サーバー接続

`MongoClient.connect(url, callback)`

- 引数

1. url（ string ）
   接続 URL。
   `mongodb://[username:password@]host[:port][/database]`
2. callback（ function(error, client) ）
   接続後に呼び出される関数。

- 返り値
  Promise

### データベース接続

`client.db(name)`

- 引数
  name （ string ） 接続先データベース名
- 戻り値
  Db

### サーバー切断

`client.close([force] [, callback])`

- 引数

1. force ( boolean )
   強制クローズするかどうか。
2. callback ( function(error) )
   切断後に呼び出される関数。

- 戻り値
  Promise

## コレクション作成/表示/更新/削除

- コレクション作成

`db.createCollection(name, callback)`

- コレクション一覧

`db.listCollections(filter)`

- コレクション選択

`db.collection(name, callback)`

- コレクション名変更

`db.renameColloction(old, new, callback)`

- コレクション削除

`db.dropCollection(name, callback)`

## ドキュメント作成/表示/更新/削除

- ドキュメント作成

`collection.insertOne(doc, callback)`
`collection.insertMany(docs, callback)`

- ドキュメント検索

`collection.find({ fld: { ope: "val" } })`

ope（オペレーター）：$ep（==）、$gt（>）、$gte（>=）、$it（<）、$ite（<=）、$ne（!=）、$regex（正規表現）

`collection.find().toArray()`で取得する方が簡単

- ドキュメント更新

```
collection.updateMany(
    { name: { $eq: 'sample book' } },
    { $set: { name: 'Hack MongoDB' } },
    ( error, result ) => {}
)
```

- ドキュメント削除

```
collection.deleteMany(
    { name: { $eq: 'sample book' } },
)
```
