var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (error, client) => {
    var db = client.db("sample");
    // コレクション作成
    // db.createCollection("test", (error, collection) => {
    //     client.close();
    // });

    // コレクション一覧
    // db.listCollections().toArray((error, items) => {
    //     for(let item of items) {
    //         console.log(item.name);
    //     }
    //     client.close();
    // });

    // コレクション名変更
    // db.renameCollection("test_new", "test_new2", (error, collection) => {
    //     console.log(collection.name);
    //     client.close();
    // });

    // コレクション削除
    // db.dropCollection("test_new2", (error) => {
    //     client.close();
    // });

    db.collection("products", (error, collection) => {
        // ドキュメント作成
        // collection.insertMany([
        //     { name: "pen", price: 120 },
        //     { name: "note", price: 100 }
        // ], (error, result) => {
        //     client.close();
        // });

        // ドキュメント表示
        // collection.find({ name: { $regex: /e/g } }).toArray((error, docs) => {
        //     for(let doc of docs) {
        //         console.log(doc.name);
        //     }
        //     client.close();
        // });

        // ドキュメント更新
        // collection.updateMany(
        //     { name: /e/g },
        //     { $inc: { price: 20 } },
        //     (error, result) => {
        //         client.close();
        //     }
        // );

        // ドキュメント削除
        collection.deleteMany(
            { name: /e/g },
            (error, result) => {
                client.close();
            }
        );
    });
});