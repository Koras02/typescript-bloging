class Container<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const stringContainer = new Container<string>('Hello');
const numberContainer = new Container<number>(123);

console.log(stringContainer.getValue()); // "Hello"
console.log(numberContainer.getValue()); // 123
