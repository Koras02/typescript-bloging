function Mixin<T extends new (...args: any[]) => {}>(Base: T) {
  return class extends Base {
    mixinMethod() {
      console.log('Mixin method called');
    }
  };
}

class Robot {
  move() {
    console.log('Robot is moving!');
  }
}

const MixinRobot = Mixin(Robot);

const instance = new MixinRobot();
instance.mixinMethod(); // "Base method called"
instance.move(); // "Mixin method called"
