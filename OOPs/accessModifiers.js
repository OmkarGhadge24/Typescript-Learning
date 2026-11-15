"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    role;
    constructor(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }
    introduce() {
        return `Hi, I'm ${this.name}.`;
    }
    getAge() {
        return this.age;
    }
}
class Student extends Person {
    constructor(name, age) {
        super(name, age, "student");
    }
    getRole() {
        return this.role;
    }
}
const student = new Student("Alex", 20);
console.log(student.introduce());
console.log(`Age: ${student.getAge()}`);
console.log(`Role: ${student.getRole()}`);
