// 1️⃣ let
// * 재할당 가능
// * 블록 스코프( { } 내부 범위 한정)
let keyword: string = 'Action';
keyword = 'Horror'; // ✅ 가능
console.log(keyword);

// 2️⃣ const
// * 재할당 불가능
// * 상수값(변하지 않는 값) 지정
const pi: number = 3.14;
// pi = 3.14159; // ❌ 에러

// 3️⃣ var
// * 함수 스코프
// * 최신 Typescript/JS에서 사용을 지향
var km: number = 1.5;

km = 1.7; // ✅ 가능
const fixedNum1: string = km.toFixed(2);

console.log(`Running is ${km}/km`);
