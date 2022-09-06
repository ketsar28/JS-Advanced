// pengertian
// for...of = 'creates a loop itereting over iterable object'
/*
type iterable object :
- array
- string
- arguments / nodelist
- typedArray
- map
- set
- user-defined iterables
*/

const one = ["ketsar", "nabil", "aliyah"];

for (const run of one) {
  console.log(run);
}

// one.forEach((o, i) => {
//   console.log(`${o} index ke : ${i + 1}`);
// });
for (const [i, run] of one.entries()) {
  // dengan fungsi entries() kita bisa menambahkan parameter baru disebuah for...of
  console.log(`${run} merupakan urutan ke : ${i}`);
}

// == 2 ==
const two = "jarwo";
for (const run of two) {
  console.log(run);
}

// == 3 ==

function jumlah() {
  let kalkulasi = 0;
  for (const value of [1, 2, 3, 4]) {
    kalkulasi += value;
  }
  return kalkulasi;
}

console.log(jumlah());

// ========================================
// for...in = 'creates a loop itereting over enumerable'
// object

const obj = {
  nama: "alshad",
  hewan: "harimau",
};

for (run in obj) {
  console.log(obj[run]);
}
