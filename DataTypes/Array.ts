var numberArray: number[] = [1, 2, 3, 4, 5];
var stringArray: Array<string> = ["Abc", "Xyz", "Pqr"];

console.log(numberArray, stringArray);

var readArray: ReadonlyArray<string> = ["Alice", "Bob", "Charlie"];
readArray.push("Deniel"); // Error: Property 'push' does not exist on type 'readonly array'.
console.log(readArray);
