// function buildName(firstName: string, lastName: string) {
//   return firstName + ' ' + lastName;
// }

// let result = buildName('Hole'); // Error 적은 매개변수
// let result2 = buildName('Hole', 'Rike', 'Kiko'); // Error 많은 매개변수
// let result3 = buildName('Bob', 'Adams'); // 정확한 매개변수

// function buildName(firstName: string, lastName: string) {
//   if (lastName) return firstName + ' ' + lastName;
//   else return firstName;
// }

// let result = buildName('Hole'); // 지금은 동작
// let result2 = buildName('Hole', 'Rike', 'Kiko'); // Error 많은 매개변수
// let result3 = buildName('Bob', 'Adams'); // 정확한 매개변수

// 기본-초기화 매개변수
// function buildName(firstName: string, lastName = 'Switch') {
//   return firstName + ' ' + lastName;
// }

// let result = buildName('Hole'); // 올바르게 동작, "Hole Switch"
// let result2 = buildName('Hole', undefined); // 동작 "Hole Switch" 반환
// let result3 = buildName('Bob', 'Adams', 'Sr.'); // Error, 너무 많은 매개변수
// let result4 = buildName('Bod', 'Adams'); // 정확함

// undefined를 전달한 기본-초기화 매개변수
function buildName(firstName = 'Hero', lastName: string) {
  return (firstName = ' ' + lastName);
}

let result = buildName('Bob'); // Error 적은 매개변수
let reuslt2 = buildName('Bod', 'Adams', 'Sr.'); // 너무 많은 매개변수 Error
let result3 = buildName('Bob', 'Adams'); // 성공 "Bob Adams" 반환
let result4 = buildName(undefined, 'Adams'); // 성공 "Hero Adams" 반환
