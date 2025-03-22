const array1 = [1, 2, 3];

console.log('for..of');
for (const value of array1) {
  console.log(value); // 1,2,3
}

console.log('for..in');
for (const index of array1) {
  console.log(index); // 0,1,2
}
