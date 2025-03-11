class Person {
  static species = 'Homo sapiens';
  constructor(public name: string) {}
}

namespace Person {
  export function greet(person: Person) {
    console.log(`Hello, ${person.name}`);
  }
}

const kahn = new Person('Kahn');
Person.greet(kahn); // "Hello, Kahn"
