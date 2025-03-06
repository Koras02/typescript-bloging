interface Drawable {
    draw(): void;
}

class Rectangle implements Drawable {
    constructor(private width: number, private height: number) {}

    draw() {
        console.log(`Drawing a rectangle of width ${this.width} and height ${this.height}`);
        
    }
}

const rectangle = new Rectangle(10,5);
rectangle.draw();