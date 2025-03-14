function LogAccessor(
  target: any,
  propertyKey: string,
  descipritor: PropertyDescriptor
) {
  const originalGet = descipritor.get;

  descipritor.get = function (this: any) {
    console.log(`Getter ${propertyKey} with`);
    return originalGet?.call(this); // optional chaining
  };
}

class MyClass {
  private _value: number = 0;

  @LogAccessor
  get value() {
    return this._value;
  }
}

const myClass = new MyClass();
console.log(myClass.value);
// Output: Getter value with : 0
