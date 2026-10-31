var num1: number = 20;
var num2: number = 30;

var total = num1 + num2;
console.log(total);

var octa: number = 0o10001;
var hexa: number = 0x10001;
var binary: number = 0b10001;
console.log(octa, hexa, binary);

var item1: number = 44;
var item2 = "11";
// 1st Way
var itemConvert = Number(item2);
console.log(item1 + itemConvert);
// 2nd Way
var add = item1 + +item2;
console.log(add);

