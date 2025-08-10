function fn1(a: number, b?: number) {
  console.log('fn1', a, b);
}
function fn2(a: number, b: number, c?: number) {
  console.log('fn2', a, b, c);
}
fn1(1); // Ok
fn2(1, 2); // Ok
