interface Lengthwise {
  length: number;
}

function loggingLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // 길이 출력
  return arg;
}

loggingLength({ length: 10, value: 3 }); // true
// loggingLength(123); // Error
