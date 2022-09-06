/* Pengertian

Destructuring Assignment : 'Expression pada javascript yang membuat kita dapat membongkar nilai dari array atau properti dari objek kedalam variable yang terpisah' - MDN Web Docs
*/

// Ex. Array
//=== 1 ===
const arr1 = ["ketsar", 16, "SMK Al-Basyariah"];
// [nama, umur] = arr1;
[, , sekolah] = arr1;
// document.writeln(sekolah);

// === 2 ===
let A = 1,
  B = 2,
  C = 3;

[A, B, C] = [C, B, A];
// document.writeln(A);
// document.writeln(B);
// document.writeln(C);

// === 3 ===
const number = [1, 2, 3, 4, 5];

const [f, ...jalan] = number; //rest paramter
// document.writeln(jalan);

// ===========================

// Ex. Object
//  === 1 ===
const obj = {
  nama: "ketsar",
  umur: 16,
  profesi: "Web Developer || Student",
};
const { nama, umur, profesi } = obj;
// const { nama: a, umur: b, profesi: c } = obj;
// const { nama: a, umur: b, profesi: c } = obj;
// document.writeln(nama);

// tanpa deklarasi objek
// === 2 ===
({ brand, skincare } = { brand: "Infinix", skincare: "Kahf" });

// document.writeln(brand);

// === rest parameter object ===
// === 3 ===
const restP = {
  future: "Professional Developer",
  side: "Full Stack",
  email: "ketsarali@gmail.com",
};

const { future, ...modulo } = restP;
const convert = JSON.stringify(modulo);
console.log(modulo);
document.writeln(future);

//  === 4 ===

function kalkulus(a, b) {
  console.log(arguments);
  return {
    st: a + b,
    nd: a * b,
    rd: a - b,
  };
}

const { rd, nd, st } = kalkulus(2, 3, 5);

console.log(st);

// === 5 ===

const dataSiswa = {
  nama: "ketsar",
  kelas: "XI RPL 2",
  nilai: {
    pts: 85,
    pas: 90,
    ukk: 95,
  },
};

function runData({ nama, kelas, nilai: { pts, pas, ukk } }) {
  return `nama dia ${nama}, ${nama} kelas ${kelas}. dia mendapat nilai ujian ${pts} `;
}

console.log(runData(dataSiswa));
