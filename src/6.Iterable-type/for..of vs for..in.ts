const array = [1, 2, 3];

console.log('for..of:');
for (const value of array) {
  console.log(value); // 1,2,3
}

console.log('for..in:');
for (const index in array) {
  console.log(index); // 0,1,2
}
