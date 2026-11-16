
function showItem<T>(item: T): T {
    return item;
}

const numberItem = showItem<number>(25);
const stringItem = showItem("Hello, TypeScript!");

console.log(numberItem);
console.log(stringItem);
