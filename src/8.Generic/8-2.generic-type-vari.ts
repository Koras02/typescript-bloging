function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

const result = loggingIdentity<number>([1, 2, 3]); // 숫자 배열
console.log(result); // [1, 2, 3]
