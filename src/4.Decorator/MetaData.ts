import 'reflect-metadata';

function MyMetadata(key: string) {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata(
      key,
      `metadata for ${propertyKey}`,
      target,
      propertyKey
    );
  };
}
class MyClass {
  @MyMetadata('key1')
  myMethod() {}
}

const metadataValue = Reflect.getMetadata(
  'key1',
  MyClass.prototype,
  'myMethod'
);

console.log(metadataValue);
