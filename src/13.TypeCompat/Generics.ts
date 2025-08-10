interface Empty<T> {}
let x: Empty<number> = {};
let y: Empty<string> = {};
x = y;
console.log('Generic x:', x, 'Generic y:', y); // 출력: Generic x: {} Generic y: {};
