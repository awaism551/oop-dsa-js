// https://www.youtube.com/watch?v=poGEVboh9Rw&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy
// YOUTUBE PLAYLIST FROM CODEEVOLUTION CHANNEL ABOUT DSA IN JS
// Sets in js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// Hashmaps custom implementation
// https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#HashMaps
// Maps native implementation in js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// https://stackoverflow.com/questions/8877666/how-is-a-javascript-hash-map-implemented
// WeakSet
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
// WeakMap
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
// Linked Lists: Singly and Doubly
// https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#Linked-Lists
// Stacks and Queue implementation also present in above url

// todo reading List
// https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/
// https://adrianmejia.com/priority-queue-data-structure-and-heaps-time-complexity-javascript-implementation/

// =============ALGORITHMS AND THEIR IMPLEMENTATION IN JS=============
// O(log n) when the input size reduces by half on each iteration

// ======SOME MATH ALGOS IMPLEMENTATION================
// FIBONACCI SEQUENCE

// function getFibonacciNumbers(n) {
//   let fibonacciArr = [];
//   if (n > 0) {
//     if (n === 1) {
//       fibonacciArr.push(0);
//     } else if (n == 2) {
//       fibonacciArr.push(0, 1);
//     } else {
//       fibonacciArr.push(0, 1);
//       for (let index = 2; index <= n; index++) {
//         fibonacciArr.push(fibonacciArr[index-1]+fibonacciArr[index-2])
//       }
//     }
//   }
//   return fibonacciArr;
// }

// console.log(getFibonacciNumbers(5));
// console.log(getFibonacciNumbers(0));
// console.log(getFibonacciNumbers(1));
// console.log(getFibonacciNumbers(2));
// console.log(getFibonacciNumbers(100));


// FACTORIAL
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}
console.log(factorial(2));
console.log(factorial(1));
console.log(factorial(0));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));