"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numberArray = [1, 2, 3, 4, 5];
var stringArray = ["Abc", "Xyz", "Pqr"];
console.log(numberArray, stringArray);
var readArray = ["Alice", "Bob", "Charlie"];
// readArray.push("Deniel"); // Error: Property 'push' does not exist on type 'readonly array'.
console.log(readArray);
