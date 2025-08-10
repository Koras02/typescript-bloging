let f1 = (a: number) => 0;
let f2 = (b: number, s: string) => 0;

// f1 = f2; // error: f2 has mor parameters then f1
f2 = f1; // ok
console.log('f2(1, "test"):', f2(1, 'test')); // f2 can be called withe fewer parameters
