'use strict';

const contract = (fn, ...types) => {
  const error = new Error(`types don't match`);


  return (...params) => {
    let checked = false;
    console.log('ch before iteration',checked);
    const args = types.slice(0, types.length - 1);
    args.forEach(value => {
      params.forEach(param => {
        debugger
        console.log(typeof param, value.name.toLowerCase(), 777);
        console.log('check in iteration ',checked);
        if (typeof param != value.name.toLowerCase()) {
          checked = false;
          console.log('check in if block ', checked);

          throw new TypeError('types don"t match');
        } else {

          checked = true;
          console.log('check iteration true', checked);
        }
      })

      console.log('ch after iteration',checked);
    })
    if (checked) {
      console.log('checking', checked);
      return fn.apply(null, params);
     }
    //else {
    //   throw new TypeError('types don"t match');
    // }
  };
};




const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
// const res = addNumbers(2, 5);
// console.dir(res, 'Output'); // Output: 7


// const concat = (s1, s2) => s1 + s2;
// const concatStrings = contract(concat, String, String, String);
// const res2 = concatStrings('Hello ', 'world!');
// console.dir(res2); // Output: Hello world!

// console.log('-'.repeat(20));

// const res3 = concatStrings('Hello ', 2);
// console.log(res3); // Output: error

const re4 = addNumbers(5, '5');
console.log(re4); // Output: error

// module.exports = {
//   contract
// };
