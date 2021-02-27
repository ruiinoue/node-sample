var config = require("./module-config.js");

console.log(`index:${config.display.fontColor}`);
var a = require("./module-a.js");

console.log(`index:${config.display.fontColor}`);
var b = require("./module-b.js");

console.log(`index:${config.display.fontColor}`);
a();

console.log(`index:${config.display.fontColor}`);
b();

console.log(`index:${config.display.fontColor}`);
