var userName: string = "John Doe";
var age: number = 25;

var info: string = `My name is ${userName} and my age is ${age}`;
console.log(info);

var num: number = 600;
// 1st way
var stringConvert = num.toString();
console.log(typeof stringConvert);

// 2nd way
var data = "" + num;
console.log(typeof data);
console.log(data);
