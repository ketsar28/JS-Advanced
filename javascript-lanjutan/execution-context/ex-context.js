/*
NOTE : 

1. creation stage/ creation context 
    tahap pembuatan/pembentukan pada sebuah variable/function

2. execution context
    tahap pengeksekusian sebuah statement mau itu  berjenis variabel/function

3. hoisting
    tahap pengecekan sekaligus memastikan pada sebuah variable/ function jika benar di buat

4. scope
    proses dimana kita tidak bisa memanggil/mengeksekusi sebuah variable yang memiliki lingkup lokal/local scope (function scope). dan sebaliknya
*/

// =======================================================

// // first - showcase

// console.log(`nama : ${nama}
// umur : ${age}`);

// var nama = "ketsar";
// var age = 16;

// =======================================================

// //second - showcase

// var nama2 = "topan";
// var age2 = 18;
// function test() {
//   console.info(`nama : ${nama2}
// umur : ${age2}`);
// }
// function test2() {
//   console.info("nama saya ketsar. umur saya 16 tahun");
// }

// test();
// test2();

// =======================================================

// third - showcase

var namaIG = "ketsaraaw_";
var username = "@ketsaraaw_";

function cetakURL() {
  var instagramURL = `https://www.instagram.com/`;
  var arg = arguments;
  console.info(arg);
  return instagramURL + arguments[0];
}

console.log(cetakURL(`ketsar.aaw`));
