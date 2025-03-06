interface Person {
  name: string;
  age: number;
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const person: Person = {
  name: 'James',
  age: 30,
};

const PersonName = getProperty(person, 'name'); // "James"
const PersonAge = getProperty(person, 'age'); // 30

console.log(PersonName);
console.log(PersonAge);
