abstract class Shape {
  width: any;
  kind: any;
  radius: number;
  height: any;
  abstract area(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}
