// =========EXAMPLE 1===============
// USING MIXINS IT IS A MULTILEVEL INHERITANCE
// // base class
// class A {
//   foo() {
//     console.log(`from A -> inside instance of A: ${this instanceof A}`);
//   }
// }

// // B mixin, will need a wrapper over it to be used
// const B = (B) => class extends B {
//   foo() {
//     if (super.foo) super.foo(); // mixins don't know who is super, guard against not having the method
//     console.log(`from B -> inside instance of B: ${this instanceof B}`);
//   }
// };

// // C mixin, will need a wrapper over it to be used
// const C = (C) => class extends C {
//   foo() {
//     if (super.foo) super.foo(); // mixins don't know who is super, guard against not having the method
//     console.log(`from C -> inside instance of C: ${this instanceof C}`);
//   }
// };

// // D class, extends A, B and C, preserving composition and super method
// class D extends C(B(A)) {
//   foo() {
//     super.foo();
//     console.log(`from D -> inside instance of D: ${this instanceof D}`);
//   }
// }

// // E class, extends A and C
// class E extends C(A) {
//   foo() {
//     super.foo();
//     console.log(`from E -> inside instance of E: ${this instanceof E}`);
//   }
// }

// // F class, extends B only
// class F extends B(Object) {
//   foo() {
//     super.foo();
//     console.log(`from F -> inside instance of F: ${this instanceof F}`);
//   }
// }

// // G class, C wrap to be used with new decorator, pretty format
// class G extends C(Object) {}

// const inst1 = new D(),
//       inst2 = new E(),
//       inst3 = new F(),
//       inst4 = new G(),
//       inst5 = new (B(Object)); // instance only B, ugly format

// console.log(`Test D: extends A, B, C -> outside instance of D: ${inst1 instanceof D}`);
// inst1.foo();
// console.log('-');
// console.log(`Test E: extends A, C -> outside instance of E: ${inst2 instanceof E}`);
// inst2.foo();
// console.log('-');
// console.log(`Test F: extends B -> outside instance of F: ${inst3 instanceof F}`);
// inst3.foo();
// console.log('-');
// console.log(`Test G: wraper to use C alone with "new" decorator, pretty format -> outside instance of G: ${inst4 instanceof G}`);
// inst4.foo();
// console.log('-');
// console.log(`Test B alone, ugly format "new (B(Object))" -> outside instance of B: ${inst5 instanceof B}, this one fails`);
// inst5.foo();

// ==========EXAMPLE 2==============
// THIS IS MULTIPLE INHERITANCE BUT VIA HACK, IN JS DIRECT MULTIPLE INHERITANCE IS NOT POSSIBLE, SO ANOTHER CLASS (BASES CLASS HERE) IS CHOSEN WHICH WILL CONTAIN ALL 
// MEMBER VARIABLES AND METHODS OF ALL CLASSES WHICH WE WANT AS BASE CLASS OF OUR CHILD CLASS
class Nose {
  constructor() {
    // constructor functions actually be default return "this" object of class but this can be overriden
    console.log("constructor:: Nose class");
    this.booger = "ready";
  }

  pick() {
    console.log("pick your nose");
  }
}

class Ear {
  constructor() {
    console.log("constructor:: Ear class");
    this.wax = "ready";
  }

  dig() {
    console.log("dig in your ear");
  }
}

class Gross extends Classes([Nose, Ear]) {
  constructor() {
    console.log("constructor::Gross class");
    super();
    this.gross = true;
  }
}

function Classes(bases) {
  class Bases {
    constructor() {
      console.log("constructor::Bases class");
      // closure concept being used here, this Bases class becomes parent class of Gross class via Classes function, though this class (remember classes in js are actually
      // just constructor functions) is returned from Classes function but still whenever its constructor is being called, it remembers the value of Classes function parameter
      console.log(`Bases class this object ${JSON.stringify(this)}`);
      // constructors return "this" object and in this way "this" object of this class will get populated
      bases.forEach((base) => Object.assign(this, new base()));
      console.log(`Bases class this object ${JSON.stringify(this)}`);
    }
  }
  bases.forEach((base) => {
    Object.getOwnPropertyNames(base.prototype)
      .filter((prop) => prop != "constructor")
      .forEach((prop) => (Bases.prototype[prop] = base.prototype[prop]));
  });
  return Bases;
}

// test it

var grossMan = new Gross();
grossMan.pick(); // eww
grossMan.dig(); // yuck!
console.log(`booger ${grossMan.booger}`);
// console.log(Object.getOwnPropertyNames(Nose.prototype));
// console.log(Nose.prototype['pick']);