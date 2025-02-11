// interface Point {
//   readonly x: number;
//   readonly y: number;
// }

// let point1: Point = { x: 20, y: 50 };
// point1.x = 5; // Error

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 24; // Error
// ro.push(5); // Error
// ro.length = 200; // Error
// a = ro; // Error

a = ro as number[];
