function Mixin<T extends new (...args: any[]) => {}>(Base: T) {
  return class extends Base {
    mixinMethod() {
      console.log('Mixin method called');
    }
  };
}
