# MongoDB

## RDB と NoSQL の違い

### RDB

- データ構造
  「表」と「表同士の関係性」でデータ構造を表現するデータベース。
- トレンザクション
  ACID 特製（データ不整合が起こらないようにする）
- プロダクト例
  MySQL、PostgreSQL など

### NoSQL

- データ構造
  RDB 以外の構造で保存される KVS 型、ドキュメント型、グラフ型など。
- トレンザクション
  結果整合性（速度優先で即座にデータ反映されていないこともある）
- プロダクト例
  redis（KVS）、mongoDB（ドキュメント）、neo4j（グラフ）

## MongoDB の特徴

- ドキュメント指向データベース
  JSON ベースのドキュメントを保存できる。
  ドキュメント構造の追加、変更、削除が自由にできる。

- アドホッククエリ
  RDB のような完全一致、AND/OR 条件などを指定するクエリが使える。

- インデックス
  プライマリだけでなくセカンダリ以降のインデックスを設定可能。

- 集計
  RDB の group by のような処理が可能。

- 水平スケーリング
  「シャーディング」と呼ばれる機能で実現。
  シャーディングはシャードキーを指定してデータ保存先を分散化させる機能。

## MongoDB のデータ構造

### Excel、Oracle との違い

- Excel

1. ブック
2. シート
3. 行
4. 列
5. セル

- Oracle

1. Schema
2. Table
3. Row
4. Column
5. Field

- MongoDB

1. Database
2. Collection
3. Document
4. Field
5. Value

## MongoDB の操作

### サーバー接続/切断

- サーバー接続

`mongo -u <username> -p <password> -authenticationDatabase <database>`

- サーバー切断

`> exit`

### データベース作成/表示/更新/削除

- データベース作成

`> use database`

- データベース一覧

`> show dbs`

- データベース名変更

```
> db.copyDatabase("old_db", "new_db")
> use old_db
> db.dropDatabase()
```

- データベース削除

```
> use database
> db.dropDatabase()
```

### コレクション作成/表示/更新/削除

- コレクション作成

`> db.createCollection(name)`

- コレクション一覧

`> show collections`

- コレクション名変更

`> db.old_cl.renameCollection(new_cl, true)`

- コレクション削除

`> db.trg_cl.drop()`

### ドキュメント作成/表示/更新/削除

- ドキュメント作成

`> db.clct.insert(document)`

- ドキュメント検索

`> db.clct.find({ fld: { ope: "val" }})`

ope（オペレーター）：
$ep ==
$gt >
$gte >=
$it <
$ite <=
$ne !=
$regex 正規表現

- ドキュメント更新

```
> db.cict.update(
    { name { $eq: 'sample book' } },
    { $set: { name: 'Hack MongoDB' } },
    { upsert: false, multi: true }
  )
```

upsert：条件に合致するものがない場合、挿入するかどうか
multim：条件に合致するものすべて更新するかどうか

- ドキュメント削除

`> db.clct.remove({ name: { $eq: "sample book" }})`
