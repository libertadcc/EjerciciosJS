class Square {
  constructor(side) {
    this.perimeter = side * 4;
    this.area = side * side;

    console.log(`Este cuadrado tiene ${side} cm de lado, su perímetro es ${this.perimeter} cm y su área ${this.area} cm3`);
  }
};

const small = new Square(2);
const medium = new Square(5);
const big = new Square(10);