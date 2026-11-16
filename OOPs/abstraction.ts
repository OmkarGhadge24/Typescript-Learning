abstract class Shape {
    abstract getArea(): number;
}

class Rectangle extends Shape {
    constructor(
        private width: number,
        private height: number
    ) {
        super();
    }

    getArea(): number {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(5, 3);
console.log(`Rectangle area: ${rectangle.getArea()}`);