function Shape(sideLength) {
  console.log(`in Shape fun ${JSON.stringify(this)}`);
  this.eachSideLength = sideLength;
  console.log(`in Shape fun ${JSON.stringify(this)}`);
}
Shape.prototype.calcPerimeter = function () {
  console.log(`Parent Perimeter ${this.noOfSides * this.eachSideLength}`);
  console.log(
    `name ${this.name} noOfSides ${this.noOfSides} eachSideLength ${this.eachSideLength}`
  );
};

function Square(sideLength) {
  this.name = "square";
  this.noOfSides = 4;
  //   Square.prototype.eachSideLength = sideLength;
  Shape.apply(this, [sideLength]);
}
Square.prototype.calcPerimeter = function () {
  console.log(`Child Perimeter ${this.noOfSides * this.eachSideLength}`);
  console.log(
    `name ${this.name} noOfSides ${this.noOfSides} eachSideLength ${this.eachSideLength}`
  );
};
Square.prototype.calcArea = function () {
  console.log(`area ${this.noOfSides * this.eachSideLength}`);
  console.log(`name ${this.name} noOfSides ${this.noOfSides}`);
};
Object.setPrototypeOf(Square.prototype, Shape.prototype);

let square = new Square(5);
square.calcPerimeter();
square.calcArea();
// let genericShape = new Shape(6);
// genericShape.calcPerimeter();
