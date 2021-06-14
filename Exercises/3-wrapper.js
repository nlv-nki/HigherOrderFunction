'use strict';

const contract = (fn, ...types) => {
  const error = new Error(`types don't match`);
  let checked = false;
  // args.reduce(((previousValue, current) => {
    //   if (previousValue.name === current.name) {
      //     checked = true;
      //   } else {
        //     console.log(error);
        //   }
        // }));
  return (...params) => {

    const args = types.slice(0, types.length - 1);


    args.forEach(value => {

      console.log(params,666);

      params.forEach(param => {
        console.log(typeof param, value.name.toLowerCase(), 777);
       if (typeof param != value.name.toLowerCase()) {
         console.log('check false' ,checked);
          checked = false;
        }
        else {
          checked = true;
        }
      })


      // for (let param of params) {
      //   console.log(param);
      //   console.log(typeof param ,value.name.toLowerCase() );
      //   if (typeof param !== value.name.toLowerCase()) {
      //     checked = false;
      //   }
      // }

    })




    // for (let param of params) {
    //   args.forEach(value => {
    //      console.log(typeof param, value.name.toLowerCase());
    //     if (typeof param !== value.name.toLowerCase()) {
    //       checked = false;
    //     }
    //   })
    // }

    // params.reduce(((previousValue, current) => {
    //   if (typeof previousValue !== typeof current) {
    //     checked = false;
    //   }
    // }));
    console.log(checked);
    if (checked) {
      console.log('checking', checked);
      return fn.apply(null, params);
    } else {
      throw new TypeError('types don"t match');

      // console.log('checking', checked);
      // console.log(params);
      // console.log(error);
    }
  };
        };




const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 5);
console.dir(res, 'Output'); // Output: 5


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
