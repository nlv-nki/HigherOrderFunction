'use strict';
const store = x => () => x;
// const store = x => {
//   return function() {
//     return x;
//   };
// };
// const read = store(5);
// const value = read();
// console.log(value);


module.exports = { store };
