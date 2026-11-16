"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// typeof
function printValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
printValue("Hello, TypeScript!");
printValue(42);
// instanceof
class Dog {
    bark() {
        console.log("Woof!");
    }
}
class Cat {
    meow() {
        console.log("Meow!");
    }
}
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
makeSound(new Dog());
makeSound(new Cat());
var user1 = {
    name: 'Alice',
    age: 24,
    city: 'Mumbai'
};
var user2 = {
    city: 'Delhi',
    email: 'a69@mail.com',
    id: 69
};
function checkData(data) {
    if (data.name != undefined) {
        console.log('This is user data');
    }
    else {
        console.log('This is user info');
    }
}
checkData(user1);
checkData(user2);
