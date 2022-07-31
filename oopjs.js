// Concepts
// js doesn't complaint on using same method names as class name
// we can get all params from the arguments collection
// js doesn't complain if we dont't pass parameters to function which receives parameters, those params will simply be undefined in this case
// function overloading in js??


class Shape {
  eachSideLength;
  constructor(sideLength) {
    console.log(`in Shape constructor sideLength ${sideLength}`)
    this.eachSideLength = sideLength;
  }

  calcPerimeter() {
    console.log(`Parent Perimeter ${this.noOfSides*this.eachSideLength}`)
    console.log(`name ${this.name} noOfSides ${this.noOfSides} eachSideLength ${this.eachSideLength}`)
  }
}

// inheritance is applied here
class Square extends Shape {
  name;
  noOfSides;
  constructor(sideLength) {
    // 
    super(sideLength)
    this.name = 'square';
    this.noOfSides = 4; 
  }

  calcPerimeter() {
    console.log(`Child Perimeter ${this.noOfSides*this.eachSideLength}`)
    console.log(`name ${this.name} noOfSides ${this.noOfSides} eachSideLength ${this.eachSideLength}`)
  }

  calcArea() {
    console.log(`area ${this.noOfSides*this.eachSideLength}`)
    console.log(`name ${this.name} noOfSides ${this.noOfSides}`)
  }
}

// let square = new Shape("square", 4, 5);
let square = new Square(5);
let genericShape = new Shape(6);
genericShape.calcPerimeter(); // this will call parent function (which is present is Shape class)
// if the same function (with same name ) will be present both in child and parent, then with child object, child function will be called
square.calcPerimeter(); 
square.calcArea();
// square.Shape()
// let triangle = new Shape("triangle", 4, 3);
// triangle.calcPerimeter();
