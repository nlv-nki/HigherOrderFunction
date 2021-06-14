'use strict';
const obj = { a: 1, b: 2, c: 3 };
const iterate = (obj, callback) => {
  for (const key in obj) {
    callback(key, obj[key], obj);
  }
};

module.exports = { iterate };
