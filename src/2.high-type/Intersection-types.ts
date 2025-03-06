type A = { name: string };
type B = { age: number };

type C = A & B; // C is { name: string; age: number } types

const human: C = {
  name: 'Alice',
  age: 30,
};

console.log(`Name: ${human.name}, Age: ${human.age}`); // Name: Alice, Age: 30
