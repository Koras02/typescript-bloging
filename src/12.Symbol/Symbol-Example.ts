// 1) Symbol.iterator : for...of loop
const myArray = [1, 2, 3];
const iterator = myArray[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }

// 2) Symbol.toStringTag : custom object string representation
const myObject = {
  [Symbol.toPrimitive](hint: string) {
    if (hint === 'number') return 42;
    return 'Object';
  },
};

console.log(+myObject); // 42
console.log(`${myObject}`); // "Object"
