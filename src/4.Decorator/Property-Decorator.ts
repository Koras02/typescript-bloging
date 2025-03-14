function LogProperty(target: any, propertyKey: string) {
  let value = target[propertyKey];

  const getter = () => {
    console.log(`Getter ${propertyKey} with: ${value}`);
    return value;
  };

  const setter = (newValue: any) => {
    console.log(`Setting ${propertyKey} to ${newValue}`);
    value = newValue;
  };

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}

class MyClass {
  @LogProperty
  myProp: string = 'Initial Value';
}

const myClass = new MyClass();
console.log(myClass.myProp); // Output: Getter myProp: Initial Value
myClass.myProp = 'New Value'; // Output: Setting myProp to New value
