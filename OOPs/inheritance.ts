class Human {
    constructor(
        public name: string,
        public age: number
    ) { }
    canSpeak() {
        console.log(`${this.name} can speak`);
    }
    canWalk() {
        console.log(`${this.name} can walk`);
    }
}

class Child extends Human {
    constructor(
        name: string,
        age: number,
        public school: string
    ) {
        super(name, age);
    }
    getDetails() {
        console.log(`${this.name} is ${this.age} years old and studies at ${this.school}`);
    }
}

class Adult extends Human {
    constructor(
        name: string,
        age: number,
        public occupation: string
    ) {
        super(name, age);
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