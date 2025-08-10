enum Status {
  Ready,
  Waiting,
}
enum Color {
  Red,
  Green,
}

let s: Status = Status.Waiting; // enum 타입은 enum 값으로 초기화
let c: Color = Color.Red; // enum 타입은 enum 값으로 초기화

console.log('Status:', s, 'Color:', c);
