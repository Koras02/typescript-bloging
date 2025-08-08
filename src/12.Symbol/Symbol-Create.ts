const mySymbol = Symbol(); // Creating a symbol without a description
const mySymbol2 = Symbol('description'); // Creating symbols

console.log(mySymbol2.toString()); // Symbol(description)
