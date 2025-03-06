class Animal {
    constructor(public name: string) {}
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} says woof!`);
        
    }
}

const dog = new Dog("Eddy");
dog.bark(); // 출력: Eddy says woof!