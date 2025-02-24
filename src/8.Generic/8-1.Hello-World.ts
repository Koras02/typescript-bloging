function identity<T>(arg: T): T {
  return arg;
}

const output1 = identity<string>('Hello, Generics!'); // 문자열
const output2 = identity<number>(123); // 숫자
const output3 = identity<boolean>(false); // boolean

console.log(output1); // "Hello, Generics!"
console.log(output2); // 123
console.log(output3); // false
