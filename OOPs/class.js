"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    brand;
    color;
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    drive() {
        return `The ${this.color} ${this.brand} is driving.`;
    }
}
const myCar = new Car("Toyota", "blue");
console.log(myCar.drive());
