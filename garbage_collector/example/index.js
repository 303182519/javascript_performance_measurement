/**
 * Created by yan on 15-8-11.
 */
var buffer1 = [];

setInterval(function () {
  buffer1.push((new Array(1E6)).join("."));
}, 300);

setInterval(function () {
  buffer1 = [];
}, 3000);
