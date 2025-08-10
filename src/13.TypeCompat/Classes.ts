class Animal {
  feet: number = 4;
}

class Size {
  feet: number = 2;
}

let a: Animal = new Size();
console.log('Animal:', a);
// 출력: Animal { feet: 2 }
