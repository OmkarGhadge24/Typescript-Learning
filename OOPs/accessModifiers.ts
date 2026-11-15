class Person {
    constructor(
        public name: string,
        private age: number,
        protected role: string
    ) { }

    introduce(): string {
        return `Hi, I'm ${this.name}.`;
    }

    getAge(): number {
        return this.age;
    }
}

class Student extends Person {
    constructor(name: string, age: number) {
        super(name, age, "student");
    }

    getRole(): string {
        return this.role;
    }
}

const student = new Student("Alex", 20);
console.log(student.introduce());
console.log(`Age: ${student.getAge()}`);
console.log(`Role: ${student.getRole()}`);
