const id = Symbol('id'); // Creating a unique symbol with a description

const user = {
  name: 'Alice',
  [id]: 12345, // Using the Symbol as a key
};

console.log(user.name); // Alice
console.log(user[id]); // 12345 );

console.log(Object.keys(user)); // ["name"]);
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(id) ]
