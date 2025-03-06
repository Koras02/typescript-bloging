const input: any = 'Hello, TypeScript!';
const strLength: number = (input as string).length; // 타입 단언 사용

// 타입 가드 사용
if (typeof input == 'string') {
  const safeLength: number = input.length; // 안전하게 사용
  console.log(`String length is ${safeLength}`); // String length is 18
}
