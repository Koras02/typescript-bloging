function createComponent(message: string) {
  return () => <div>{message}</div>;
}

const MyComponent = createComponent('Hello');

console.log(MyComponent());
