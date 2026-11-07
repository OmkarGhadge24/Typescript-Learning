"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var simpleData = "Hello, World!";
console.log(simpleData);
simpleData = 42; // number
console.log(simpleData);
simpleData = true; // boolean
console.log(simpleData);
function fruits(num) {
    if (num > 1) {
        return ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];
    }
    return "Apple";
}
console.log(fruits(2));
