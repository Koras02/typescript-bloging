interface Person {
  name: string;
}
let p: Person = { name: 'John' };
let obj = { name: 'Doe', age: 30 };
p = obj;
console.log('p:', p);
