type Handler = (a: number | string) => void;
let handle: Handler = (a: number | string) => {
  console.log('handle:', a);
}; // Ok

handle(123);
