// NOTE

/*
https://eloquentjavascript.net :
" High Order Function  adalah functionyang beroperasi pada function yang lain. Baik itu digunakan dalam argument, maupun sebagai return value"

ketsar :
"high order function adalah dimana kita memanfaatkan parent function untuk mengisi parameter dari child function tersebut

=========================

https://eloquentjavascript.net :
"Semakin besar sebuah program, semakin tinggi kompleksitasnya, semakin membingungkan pula programmernya"

C.A.R.Hoare, 1980 ACM Turing Award Lecture:
"Ada dua cara untuk merancang sebuah software. Cara pertama : adalah untuk membuat perogramnya se-sederhana mungkin, sehingga jelas jelas tidak ada kekurangannya. Dan cara lainnya, adalah untuk membuat programnya se-kompleks mungkin sehingga tidak ada kekurangan yang jelas"
*/

// HOF Example
// 1

function exampleHOF1(nama, universitas) {
  console.log(`nama saya ${nama}`);
  universitas();
}

function universitas() {
  console.log("saya berkuliah di Indonesian University");
  console.log("===============================");
}

exampleHOF1("Ketsar", universitas);

// 2

function exampleHOF2(time) {
  //High Order Function
  return function (nama) {
    console.log(`halo kamu ${nama} yaa. selamat ${time}, kakak`);
    console.log("=========================");
  };
}

let waktu = exampleHOF2("pagi");

waktu("naura");

// 3
// for
const maxKendaraan = 10;

for (let i = 1; i <= maxKendaraan; i++) {
  console.log(`Kendaraan Ke. ${i}`);
  console.log("=================================");
}

// function 1
function loops(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`Mobil Ke. ${i}`);
  }
  console.log("================");
}

loops(10);

// function 2

function repeatLog(n, action) {
  for (let i = 1; i <= n; i++) {
    action(`Becak Ke. ${i}`);
  }
}

repeatLog(5, console.log);
