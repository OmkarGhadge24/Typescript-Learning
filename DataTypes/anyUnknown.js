"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var item = "Hello, World!";
console.log(typeof item);
item = 42;
console.log(typeof item);
item = [1, 2, 3];
console.log(typeof item);
var unknownItem = 'Alice';
if (typeof unknownItem === 'string') {
    console.log(unknownItem.toUpperCase());
}
