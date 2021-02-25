const MAX_COUNT = 10;

var write = function (value) {
  $("#result").append(`<span class="badge">${value}</span>`);
};

// 10秒後にカウントが描画される
// 静的なページレンダリング → javasscriptの処理(do...while文) → DOM操作によるレンダリング
var btnExec1_onclick = function (event) {
  var start = (new Date()).getTime();
  var now = null;
  var n = 0;
  do {
    now = (new Date()).getTime();
    time = now - (start + n * 1000);
    if (time > 1000) {
      write(++n);
    }
  } while (n < MAX_COUNT);
};

// setTimeoutによって1秒ごとに処理と描画を繰り返す
// javascriptの処理 → 処置がと止まった1秒の間にDOMのレンダリング... (この処理を10回コールバックする)
var btnExec2_onclick = function (event) {

  var n = 0;
  var callback = function () {
    window.setTimeout(function () {
      write(++n);
      if (n < MAX_COUNT) {
        callback();
      }
    }, 1000);
  }
  callback();
};

var btnClear_onclick = function (event) {
  $("#result").empty();
};

$(document).ready(function () {
  $("#btn_exec_1").on("click", btnExec1_onclick);
  $("#btn_exec_2").on("click", btnExec2_onclick);
  $("#btn_clear").on("click", btnClear_onclick);
});