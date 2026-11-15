class Car {
    constructor(
        public brand: string,
        public color: string
    ) { }

    drive(): string {
        return `The ${this.color} ${this.brand} is driving.`;
    }
}

const myCar = new Car("Toyota", "blue");
console.log(myCar.drive());