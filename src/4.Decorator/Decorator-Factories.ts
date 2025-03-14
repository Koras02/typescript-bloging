function Log(prefix: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(`${prefix} - ${propertyKey}`);
  };
}
