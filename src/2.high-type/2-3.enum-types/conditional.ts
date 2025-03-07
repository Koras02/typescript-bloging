type IsString<T> = T extends string ? 'Yes' : 'No';

type Result1 = IsString<string>; // "Yes"
type Result2 = IsString<number>; // "No"

const result1: Result1 = 'Yes';
const result2: Result2 = 'No';

console.log('Is String Result:', result1); // 출력: Is String Result: Yes
console.log('Is Number Result:', result2); // 출력: Is Number Result: No
