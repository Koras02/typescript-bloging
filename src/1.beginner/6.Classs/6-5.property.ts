class Person {
    constructor(public name: string, private age: number) {}
}

const person = new Person("Jim", 45);
console.log(person.name); // Jim
// console.log(person.age); // Error: "age" is private

