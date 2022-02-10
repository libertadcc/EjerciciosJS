class Square {
  constructor(side) {
    this.perimeter = side * 4;
    this.area = side * side;
    this.extraInfo = {
      color: 'red',
      valor: 0
    }
  }
  showArea(){
    console.log('El área es de '+this.area+' cm2')
  }
  showPerim(){
    console.log('El perímetro es de '+this.perimeter+' cm')
  }
};

const small = new Square(2);
const medium = new Square(5);
const big = new Square(10);

