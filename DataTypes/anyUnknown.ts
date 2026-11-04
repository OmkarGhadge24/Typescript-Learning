var item: any = "Hello, World!";
console.log(typeof item);
item = 42;
console.log(typeof item);
item = [1, 2 , 3];
console.log(typeof item);


var unknownItem : unknown = 'Alice';
if(typeof unknownItem === 'string'){
    console.log(unknownItem.toUpperCase());
}