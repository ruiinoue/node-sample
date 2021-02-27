var config = require("./module-config.js");

config.display.fontColor = "green";

module.exports = function () {
  console.log(config.display.fontColor);　
}