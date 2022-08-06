// Concepts
// js doesn't complaint on using same method names as class name
// we can get all params from the arguments collection
// js doesn't complain if we dont't pass parameters to function which receives parameters, those params will simply be undefined in this case

// =========== INHERITANCE ============
// SINGLE INHERITANCE
// class Shape {
//   eachSideLength;
//   constructor(sideLength) {
//     this.eachSideLength = sideLength;
//   }
//   ShapeClassFunction() {
//     console.log('parent class function can be called with child class object')
//   }
// }

// class Square extends Shape {
//   name;
//   noOfSides;
//   constructor(sideLength) {
//     super(sideLength)
//     this.name = 'square';
//     this.noOfSides = 4;
//   }
//   ChildClassFunction() {
//     console.log('in child class function');
//   }
// }

// let square = new Square(5);
// square.ShapeClassFunction();

// let genericShape = new Shape(7)
// // we cannot call child class function with parent object, coz this relationship is only from bottom to top directional
// genericShape.ChildClassFunction();

// ========== MULTIPLE INHERITANCE ===============
// // inheritance in which a class inherits from more than one base classes, direct multiple inheritance is not possible in js as it follows functional prototype structure
// but via one hack it is possible, we will use another class (Bases Class) which will get all the methods and member variables of classes which we want as base
// in same way, this single class constructor will call constructors of all actual base classes.
class Mother {
  name;
  family;
  constructor(name, family) {
    console.log("in mother constructor");
    this.name = name;
    this.family = family;
  }

  cooks() {
    console.log("mother cooks");
  }
}

class Father {
  name;
  family;
  constructor(name, family) {
    console.log("in father constructor");
    this.name = name;
    this.family = family;
  }

  works() {
    console.log("father works");
  }
}

function Classes(bases) {
  class Bases {
    constructor() {
      console.log("in Bases constructor");
      bases.forEach((base) => {
        Object.assign(this, new base());
      });
    }
  }
  bases.forEach((base) => {
    Object.getOwnPropertyNames(base.prototype)
      .filter((prop) => {
        return prop != "constructor";
      })
      .forEach((prop) => {
        Bases.prototype[prop] = base.prototype[prop];
      });
  });
  return Bases;
}

class Child extends Classes([Father, Mother]) {
  constructor() {
    super();
    console.log("Child Constructor");
  }
}

const mychild = new Child();
mychild.cooks();
mychild.works();


// ====================

// class Square extends Shape {
//   name;
//   noOfSides;
//   constructor(sideLength) {
//     super(sideLength)
//     this.name = 'square';
//     this.noOfSides = 4;
//   }

//   calcPerimeter() {
//     // way to call function of parent class
//     super.calcPerimeter();
//     // console.log(`Child Perimeter ${this.noOfSides*this.eachSideLength}`)
//     // console.log(`name ${this.name} noOfSides ${this.noOfSides} eachSideLength ${this.eachSideLength}`)
//   }

//   calcArea() {
//     console.log(`calcArea function without param`)
//   }

//   // POLYMORPHISM: STATIC POLYMORPHISM: FUNCTION OVERLOADING, there is no function overloading in js, if multiple functions with same name will be present within same class, function present in the last will be considered
//   calcArea(param) {
//     console.log(`calcArea function with param ${param}`)
//     // console.log(`area ${this.noOfSides*this.eachSideLength}`)
//     // console.log(`name ${this.name} noOfSides ${this.noOfSides}`)
//   }
// }

// // let square = new Shape("square", 4, 5);
// let square = new Square(5);
// // let genericShape = new Shape(6);
// // genericShape.calcPerimeter(); // this will call parent function (which is present is Shape class)
// // if the same function (with same name ) will be present both in child and parent, then with child object, child function will be called
// square.calcPerimeter();
// square.calcArea();
// square.Shape()
// let triangle = new Shape("triangle", 4, 3);
// triangle.calcPerimeter();

// class A {
//   mysquare;
//   constructor(b) {
//     // composition example
//     // instantiating Square class within another class, in this way strong binding is done between these two class and when A class will be destroyed, this instance of Square class will also be destroyed
//     this.mysquare = new Square(6);
//     console.log(`logging member variable of B class ${b.memberVariable}`)
//   }
// }

// class B {
//   memberVariable;
//   constructor() {
//     this.memberVariable = 'I am from B';
//   }
// }

// let b = new B();
// aggregation example: passing instance of another class to the constructor of first class, in this way there wont be strong binding between the 2 classes and they can exist independently
// let a = new A(b);
