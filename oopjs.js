// Concepts
// js doesn't complaint on using same method names as class name
// we can get all params from the arguments collection
// js doesn't complain if we dont't pass parameters to function which receives parameters, those params will simply be undefined in this case
// if the same function (with same name ) will be present both in child and parent, then with child object, child function will be called

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

// class Mother {
//   name;
//   family;
//   constructor(name, family) {
//     console.log("in mother constructor");
//     this.name = name;
//     this.family = family;
//   }

//   cooks() {
//     console.log("mother cooks");
//   }
// }

// class Father {
//   name;
//   family;
//   constructor(name, family) {
//     console.log("in father constructor");
//     this.name = name;
//     this.family = family;
//   }

//   works() {
//     console.log("father works");
//   }
// }

// function Classes(bases) {
//   class Bases {
//     constructor() {
//       console.log("in Bases constructor");
//       bases.forEach((base) => {
//         Object.assign(this, new base());
//       });
//     }
//   }
//   bases.forEach((base) => {
//     Object.getOwnPropertyNames(base.prototype)
//       .filter((prop) => {
//         return prop != "constructor";
//       })
//       .forEach((prop) => {
//         Bases.prototype[prop] = base.prototype[prop];
//       });
//   });
//   return Bases;
// }

// class Child extends Classes([Father, Mother]) {
//   constructor() {
//     super();
//     console.log("Child Constructor");
//   }
// }

// const mychild = new Child();
// mychild.cooks();
// mychild.works();

// ==================== MULTILEVEL INHERITANCE ==============
// Multilevel inheritance means a class inherits from another class which itself is a subclass of some other base class
// this approach of multilevel inheritance is static approach, one drawback of this approach is what if
// this hierachy is lengthy and at sometime we want to change something in hierachy, we have to change at multiple places
// at that time, dynamic approach of implementing multilevel inheritance comes into play, that can be achieved using mixins
// example of mixins is given file "multilevelInheritance.js Example 2"

// class GrandMother {
//   name;
//   family;
//   constructor(name, family) {
//     console.log("in grandmother constructor");
//     this.name = name;
//     this.family = family;
//   }

//   scolds() {
//     console.log("grandmother scolds mother");
//   }
// }
// class Mother extends GrandMother {
//   name;
//   family;
//   constructor(name, family) {
//     super();
//     console.log("in mother constructor");
//     this.name = name;
//     this.family = family;
//   }

//   cooks() {
//     console.log("mother cooks");
//   }
// }

// class Child extends Mother {
//   constructor() {
//     super();
//     console.log("Child Constructor");
//   }

//   study() {
//     console.log("child goes to school");
//   }
// }

// const mychild = new Child();
// mychild.cooks();
// mychild.scolds();
// mychild.study();

// ====================== HIERARCHICAL INHERITANCE =======
// inheritance where one base class have more than subclasses

// class Shape {
//   eachSideLength;
//   constructor(sideLength) {
//     this.eachSideLength = sideLength;
//   }
//   Shape() {
//     console.log(`current shape is ${this.name}`)
//   }
// }

// class Square extends Shape {
//   name;
//   noOfSides;
//   area;
//   constructor(sideLength) {
//     super(sideLength)
//     this.name = 'square';
//     this.noOfSides = 4;
//   }
//   calcArea() {
//     this.area = this.eachSideLength * 2;
//     console.log(`area ${this.area}`);
//   }
// }

// class Triangle extends Shape {
//   name;
//   base;
//   height;
//   area;
//   constructor(base, height) {
//     super();
//     this.name = 'triangle';
//     this.base = base;
//     this.height = height;
//   }
//   calcArea() {
//     this.area = (this.base * this.height) / 2;
//     console.log(`area ${this.area}`);
//   }
// }

// let square = new Square(5);
// let triangle = new Triangle(7,5);
// square.calcArea();
// // same function of Shape Class shows different outputs based on "this" class
// square.Shape();
// triangle.calcArea();
// triangle.Shape();

// ==================== COMPOSITION =====================

// class A {
//   b;
//   constructor() {
//     // instantiating B class within another class, in this way strong binding is done between these two class and when A class will be destroyed, this instance of B class will also be destroyed
//     this.b = new B();
//     console.log(`logging member variable of B class ${this.b.memberVariable}`)
//   }
// }

// class B {
//   memberVariable;
//   constructor() {
//     this.memberVariable = 'I am from B';
//   }
// }

// let a = new A();
// console.log(`accessing instance of B class from A class instance ${JSON.stringify(a.b)}`)

// ==================== AGGREGATION =====================

// class A {
//   b;
//   constructor(b) {
//     this.b = {}
//     this.b = b; // pass by value
//     Object.assign(this.b, b); // this is pass by reference
//     console.log(`logging member variable of B class ${this.b.memberVariable}`)
//   }
//   getB() {
//     return this.b.memberVariable;
//   }
// }

// class B {
//   memberVariable;
//   constructor() {
//     this.memberVariable = 'I am from B';
//   }
// }
// let b = new B();
// // // aggregation example: passing instance of another class to the constructor of first class, in this way there wont be strong binding between the 2 classes and they can exist independently
// let a = new A(b);
// b.memberVariable = 'update membervariable';
// console.log(a.getB())

// ==============STATIC POLYMORPHISM=======================
// static polymorphism, function overloading, static binding
// function overloading is not possible in js, if multiple functions with same name are used at same context, then function used in the last will override all others irrespective of return type and parameters of functions
// at compile time js engine takes this decision that which function will be used

// ==============Dynamic POLYMORPHISM=======================
// dynamic polymorphism, function overriding, dynamic binding, js engine takes this decision at runtime
// class A {
//   constructor() {}
//   myfun() {
//     console.log("A class myfun");
//   }
// }

// class B extends A {
//   constructor() {
//     super();
//   }
//   myfun() {
//     super.myfun()
//     console.log("B class myfun");
//   }
// }
// let b = new B();
// // if in B class, this function will not be present then engine will search from parent class at runtime
// b.myfun();

// dynamic polymorphism refers that same function in parent class will give different behaviours based on the object with which it will be called, this differing behaviour is polymorphism
// even without OOP and inheritance concepts, polymorphism can be achieved. for example with help of apply,call,bind we can call any function with different "this" object
// Parameteric Polymorphism: as js is losely typed language, any variable can achieve any type based on its initialization and similarly any function can receive any kind of parameter
// Adhoc polymorphism, dynamic function overloading:
// Example
// class Xclass {
//   x;
//   map(cb, thisArg) {
//     return cb(thisArg.x)
//   }
// }
// // adhoc polymorphic function, this function behaves differently for array and object and calls their respective map functions based on their types and decides this at runtime
// const map = cb => mapCaller => mapCaller.map(cb,mapCaller);
// let arr = [1,2,3]
// let square = (x) => x*x;
// let obj = new Xclass();
// obj.x = 5;
// console.log(map(square)(arr));
// console.log(map(square)(obj));
