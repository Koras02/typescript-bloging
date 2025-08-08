let s1 = Symbol.for('shared');
let s2 = Symbol.for('shared');

console.log(s1 === s2); // true

console.log(Symbol.keyFor(s1)); // "shared");
