"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
}
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle(5, 3);
console.log(`Rectangle area: ${rectangle.getArea()}`);
