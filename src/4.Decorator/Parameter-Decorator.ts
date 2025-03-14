function LogParameter(
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  console.log(`Parameter in ${propertyKey} at position ${parameterIndex}`);
}

class MyClass {
  myMethod(@LogParameter param: string) {
    console.log(`Parameter value: ${param}`);
  }
}

const myClass = new MyClass();
myClass.myMethod('Hello');
// Output: Parameter in myMethod at position 0
// Parameter value: Hello
