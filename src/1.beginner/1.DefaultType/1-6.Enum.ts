enum Color {
  Red = 1,
  Green = 2,
  Blue,
}

let ColorName: string = Color[3]; // 3
console.log(ColorName); // 문자열 'Blue' 출력

// let c: Color = Color.Green;
console.log(ColorName); // 문자열 'Green' 출력

// console.log(c); // 3
