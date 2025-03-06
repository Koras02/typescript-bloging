function guard(input: number | string | boolean) {
  if (typeof input === 'string') {
    console.log(`문자열 입니다: ${input}`);
  } else if (typeof input === 'boolean') {
    console.log(`숫자 입니다: ${input}`);
  } else {
    console.log(`불리언 입니다: ${input}`);
  }
}

guard('Hello'); // result: 문자열 입니다: Hello
guard(50); // result: 숫자 입니다: 50
guard(true); // result: 불리언 입니다: true
