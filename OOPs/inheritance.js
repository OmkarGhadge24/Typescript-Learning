"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    canSpeak() {
        console.log(`${this.name} can speak`);
    }
    canWalk() {
        console.log(`${this.name} can walk`);
    }
}
class Child extends Human {
    school;
    constructor(name, age, school) {
        super(name, age);
        this.school = school;
    }
    getDetails() {
        console.log(`${this.name} is ${this.age} years old and studies at ${this.school}`);
    }
}
class Adult extends Human {
    occupation;
    constructor(name, age, occupation) {
        super(name, age);
        this.occupation = occupation;
    }
    getDetails() {
        console.log(`${this.name} is ${this.age} years old and works as a ${this.occupation}`);
    }
}
const child1 = new Child("John", 10, "Greenwood High");
child1.getDetails();
console.log(child1.canSpeak());
const adult1 = new Adult("Alice", 30, "Software Engineer");
adult1.getDetails();
console.log(adult1.canWalk());
