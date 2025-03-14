function A() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('A');
  };
}

function B() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('B');
  };
}

class MyClass {
  @A()
  @B()
  myMethod() {
    console.log(`My Method`);
  }
}

const myClass = new MyClass();
myClass.myMethod();
