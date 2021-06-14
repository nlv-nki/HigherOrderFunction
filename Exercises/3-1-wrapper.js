'use strict';

const contract = (fn, ...types) => {
  const error = new Error(`types don't match`);
  let checked = false;
  const args = types.slice(0, types.length - 1);
  args.reduce(((previousValue, current) => {
    if (previousValue.name === current.name) {
      checked = true;
    } else {
      console.log(error);
    }
  }));
  return (...params) => {
    try {





      params.reduce(((previousValue, current) => {
        if (typeof previousValue !== typeof current) {
          checked = false;
          throw new TypeError('types don"t match');
        }
      }));
      if (checked) {
        return fn.apply(null, params);
      }
    } catch (err) {
      return err.name;
    }
  };
};


const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 5);
console.dir(res, 'Output'); // Output: 5


const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2); // Output: Hello world!

console.log('-'.repeat(20));

const res3 = concatStrings('Hello ', 2);
console.log(res3); // Output: error

const re4 = addNumbers(5, '5');
console.log(re4); // Output: error

module.exports = {
  contract
};
