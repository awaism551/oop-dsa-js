// >>>>>>>>>>> 1 <<<<<<<<<<<<<<<<<<
// output??
// const k = (x) => (y) => x;
// console.log(k(1)("foo"));
// solution
// above function is equivalent to below, first function will be called for param 1 and then returned function will be called for param "foo"
// const k = (x) => {
//   return (y) => {
//     return x;
//   };
// };

// >>>>>>>>>>> 2 <<<<<<<<<<<<<<<<<<
// var test = (function () {
//     return 5;
// })();
// console.log(test);

// >>>>>>>>>>> 3 <<<<<<<<<<<<<<<<<<
// console.log([...'Hello'])

// >>>>>>>>>>> 4 <<<<<<<<<<<<<<<<<<
// function name() {
//     console.log(arguments);
//     console.log(typeof arguments);
//     console.log(arguments.length);
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//         console.log(typeof arguments[i]);
//     }
// }
// name('awais',3,[1,2,3]);

// >>>>>>>>>>> 5 <<<<<<<<<<<<<<<<<<

//   /**
//  * Consider the following script, what will be logged and in which order?
//  */

// const firstPromise = Promise.resolve("First promise");
// const secondPromise = Promise.resolve("Second promise");
// const thirdPromise = Promise.resolve("Third promise");

// console.log("START");

// firstPromise.then((str) => console.log(str));

// setTimeout(() => console.log("Timeout"), 0);

// for (let i = 0; i < 15; i++) {
//   console.log("Iteration: ", i);
//   if (i === 5) {
//     secondPromise.then(console.log);
//   }
// }

// thirdPromise.then(console.log);

// console.log("END");

// >>>>>>>>>>> 6 <<<<<<<<<<<<<<<<<<
//  /**
//  This is supposed to be a recursive Fibonacci function that use a memoized data structure. Is that correct? If not, why?
// sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...]
// */

const fibonacci = (() => {
  const results = [0, 1];

  return (n) => {
    if (results[n]) {
      return results[n];
    }

    while (isNaN(results[n])) {
      const lastIndex = results.length - 1;
      results.push(results[lastIndex] + results[lastIndex - 1]);
    }

    return results[n];
  };
})();

console.log(fibonacci(10));

