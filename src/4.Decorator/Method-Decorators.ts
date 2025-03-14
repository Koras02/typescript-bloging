function LogMethod(
  target: any,
  propertyKey: string,
  descipritor: PropertyDescriptor
) {
  const originalMethod = descipritor.value;
  descipritor.value = function (...args: any[]) {
    console.log(`Method ${propertyKey} with`, args);
    return originalMethod.apply(this, args);
  };
}

class MyClass {
  @LogMethod
  myMethod(arg: number) {
    console.log(`MyMethod called with ${arg}`);
  }
}

const myClass = new MyClass();
myClass.myMethod(30);
/* Output
 Method myMethod with [ 30 ]
 MyMethod called with 30
*/
