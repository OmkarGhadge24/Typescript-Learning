// typeof
function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
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

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}

makeSound(new Dog());
makeSound(new Cat());

// // A custom type guard
interface userData {
    name: string;
    age: number;
}
interface userInfo {
    id: number;
    city: string;
    email: string;
}
var user1: userData | userInfo = { 
    name: 'Alice', 
    age: 24,
    city : 'Mumbai'
}
var user2 : userData | userInfo = {
    city: 'Delhi', 
    email: 'a69@mail.com',
    id : 69
}
function checkData(data:userData|userInfo){
    if((data as userData).name != undefined){
        console.log('This is user data');
    } else {
        console.log('This is user info');
    }
}

checkData(user1);
checkData(user2);