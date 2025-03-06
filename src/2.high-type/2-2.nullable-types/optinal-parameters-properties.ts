function greet(name?: string) {
  if (name) {
    console.log(`Hello, ${name}`);
  } else {
    console.log(`Hello, Guest!`);
  }
}

greet(); // 선택적 매개변수 사용, "Hello, Guest"
greet('Ko'); // "Hell, Ko"
