namespace Shapes {
  export interface Circle {
    radius: number;
  }
}

namespace Shapes {
  export interface Square {
    sideLength: number;
  }
}

const myCircle: Shapes.Circle = { radius: 10 };
const mySquare: Shapes.Square = { sideLength: 5 };

console.log(myCircle, mySquare); // { radius: 10 } { sideLength: 5 }
