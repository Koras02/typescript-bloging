abstract class Shape {
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