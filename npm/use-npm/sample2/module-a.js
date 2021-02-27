var config = require("./module-config.js");

config.display.fontColor = "blue";

module.exports = function () {
  console.log(config.display.fontColor);　
}