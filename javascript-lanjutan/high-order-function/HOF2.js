// NOTE

/*
Cth. High Order Function :
1. Array.prototype.map()
2. Array.prototype.filter()
3. Array.prototype.reduce() 
*/

// map()
let user = ["bagas", "evan", "ryan", "ketsar", "nabil", "ezzechiel"];

const result = user.map((m) => "nama : " + m);

console.log(result);
console.log("====================");

// filter()

const result2 = user.filter((x) => x.length > 5);

console.log(result2);
console.log("====================");

// reduce()
// 1
let angka = [1, 2, 3, 4, 5, 6, 7];

const result3 = angka.reduce(callback);

function callback(accumulator, value) {
  return accumulator + value;
}

// 2
const result4 = angka.reduce(callback2, -Infinity);

function callback2(accumulator, value) {
  if (accumulator > value) {
    return accumulator;
  } else {
    return value;
  }
}

console.log(result3);
console.log(result4);
