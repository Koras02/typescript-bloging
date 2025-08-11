let arr = [1, 2, 3]; // number[]로 추론
console.log(arr);

let mixed = [1, 'two'];
console.log(mixed);
// (string | number)[] 로 추론

let mixed2 = [1, true, 'str'];
// (string | number | boolean)[] 로 추론

// any 일 경우
let weird = [1, () => {}, 'text'];
// any[] (함수 타입가 숫자, 문자열의 공통 타입을 찾을 수 X -> any)
