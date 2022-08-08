// output??
const k = (x) => (y) => x;
console.log(k(1)("foo"));
// solution
// above function is equivalent to below, first function will be called for param 1 and then returned function will be called for param "foo"
// const k = (x) => {
//   return (y) => {
//     return x;
//   };
// };
