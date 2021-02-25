// グローバル変数
message = "外側";

var test = function () {
  // ローカル変数（関数レベル）
  var message = "関数内";
  console.log(`1: ${message}`);

  {
    // ローカル変数（ブロックレベル）
    let message = "ブロック内";
    console.log(`2: ${message}`);
  }

  console.log(`3: ${message}`);
};

test();

console.log(`4: ${message}`);
