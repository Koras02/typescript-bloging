// 조건부 타입의 타입 추론
type ExtractType<T> = T extends (infer U)[] ? U : T;

type ArrayType = ExtractType<number[]>; // number
type SingleType = ExtractType<number>; // number

const array: number[] = [1, 2, 3]; // number [] 타입
const singlenumber: number = 42;

console.log('Extracted Array Type:', array);
console.log('Extracted Single Type:', singlenumber);
