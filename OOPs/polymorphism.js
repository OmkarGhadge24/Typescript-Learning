"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    makeSound() {
        return "Some animal sound";
    }
}
class Dog extends Animal {
    makeSound() {
        return "Woof!";
    }
}
class Cat extends Animal {
    makeSound() {
        return "Meow!";
    }
}
function playSound(animal) {
    console.log(animal.makeSound());
}
playSound(new Dog());
playSound(new Cat());
