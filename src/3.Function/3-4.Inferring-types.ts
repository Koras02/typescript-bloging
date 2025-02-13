// 전체 함수 타입을 가짐
let sideAdd = function (x: number, y: number): number {
  return x + y;
};

// 매개변수 x와 y는 number 타입을 가짐
let myAdd: (baseValue: number, increment: number) => number = function (x, y) {
  return x + y;
};
