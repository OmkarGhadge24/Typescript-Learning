var simpleData: string | number | boolean = "Hello, World!";
console.log(simpleData);
simpleData = 42; // number
console.log(simpleData);
simpleData = true; // boolean
console.log(simpleData);

function fruits(num: number): string | string[] {
    if (num > 1) {
        return ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];
    }
    return "Apple"
}

console.log(fruits(2));
