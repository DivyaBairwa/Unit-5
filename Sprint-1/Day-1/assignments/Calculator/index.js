const cal = require("./calculator")
const out = require("crypto")

let add = cal.add
console.log(add(10,20));

let sub = cal.sub
console.log(sub(20,10));

let div = cal.div
console.log(div(20,10));

let mul = cal.mul
console.log(mul(10,10));

let sin = cal.sin
console.log(sin(90));

let cos = cal.sin
console.log(cos(30));

let tan = cal.sin
console.log(tan(30));

let random = cal.random
console.log(random(0,100));

console.log(out.randomInt(1,1000));


