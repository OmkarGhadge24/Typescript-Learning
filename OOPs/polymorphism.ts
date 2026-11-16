class Animal {
    makeSound(): string {
        return "Some animal sound";
    }
}

class Dog extends Animal {
    override makeSound(): string {
        return "Woof!";
    }
}

class Cat extends Animal {
    override makeSound(): string {
        return "Meow!";
    }
}

function playSound(animal: Animal): void {
    console.log(animal.makeSound());
}

playSound(new Dog());
playSound(new Cat());