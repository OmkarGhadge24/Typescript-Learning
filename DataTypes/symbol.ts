var sym1 = Symbol();
var sym2 = Symbol("Hello");
var sym3 = Symbol("Hello");

console.log(sym1);
console.log(sym2);
console.log(sym3);

console.log(sym2 === sym3);
