'use strict';

const contract = (fn, ...types) => {
  return (...args) => {
    let typeName,
        controlType;
     controlType = types[types.length-1].name.toLowerCase()
      args.forEach((arg,index) => {
        typeName = types[index].name.toLowerCase();
         if (typeof arg !== typeName) {
           throw new TypeError('types don"t match');
         }
       })
      let result = fn(...args);
     // console.log(controlType);
       if (typeof result !== controlType) {
         throw new TypeError('types don"t match');
       }
        return result;
};
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 5);
console.dir(res, 'Output'); // Output: 7


// const concat = (s1, s2) => s1 + s2;
// const concatStrings = contract(concat, String, String, String);
// const res2 = concatStrings('Hello ', 'world!');
// console.dir(res2); // Output: Hello world!

// console.log('-'.repeat(20));

// const res3 = concatStrings('Hello ', 2);
// console.log(res3); // Output: error

// const re4 = addNumbers(5, '5');
// console.log(re4); // Output: error

module.exports = {
  contract
};
