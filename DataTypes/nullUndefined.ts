var userName: string | null = "John Doe";
console.log("User name:", userName);

userName = null;
console.log(typeof userName);

var age: number | undefined = 25;
console.log("Age:", age);

age = undefined;
console.log(typeof age);

console.log(userName == age);
console.log(userName === age);
