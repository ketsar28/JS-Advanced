// object revisited
// object literal
const object = {
  nama: "ketsar",
  umur: 16,
  sayName() {
    return `nama saya ${this.nama}, umur saya ${this.umur} tahun`;
  },
};

// object function

function objectFunc(panggil, age) {
  const object = {
    nama: panggil,
    umur: age,
  };

  return `he name is ${object.nama}, he old is ${object.umur}`;
}

// console.log(objectFunc("nabil", 8));

// object constructor
function Run(name, energy) {
  this.nama = name;
  this.energi = energy;
  this.eat = (porsi) => {
    this.energi += porsi;
    return `sudah bertambah`;
  };
}

const runCode = new Run("bagas", 10);

// object.create()

const metode = {
  eat: function (porsi) {
    this.energi += porsi;
  },
};

function RunObjectCreate(name, energy) {
  const object = Object.create(metode);
  this.nama = name;
  this.energi = energy;
  this.makan = metode.eat;
}

const runOtherCode = new RunObjectCreate("ketsar", 10);

// prototype

function Proto(nama, energi) {
  this.name = nama;
  this.energy = energi;
}

Proto.prototype.makan = function (porsi) {
  this.energy += porsi;
  return `dia semakin bersemangat`;
};
Proto.prototype.main = function (waktu) {
  this.energy -= waktu * 2;
  return `dia semakin lelah`;
};

const runOtherCode2 = new Proto("pascal", 20);

// ======================

// closure

function closure() {
  const ex = "ketsar";
  function run() {
    return `nama dia ${ex}`;
  }
  return run();
}
console.log(closure());

// ======================

// HOF

function HOF(mapel, deadline) {
  alert(`mata pelajaran hari ini ${mapel}`);
  setTimeout(deadline, 3000);
  return `silahkan belajar dan kerjakan tugasnya`;
}

function deadline() {
  return alert(`silahkan kumpulkan tugas kalian sekarang `);
}

// console.log(HOF("sistem komputer", deadline));

// ================
// destructuring assignment

// for ex. array (restP)
const nama = ["irwan", "erus", "ketsar", "nabil"];
const [kkeluarga, irutang, ...anak] = nama;

// for ex. object
const namePerson = {
  nama: "wahid",
  jenjang: "SMK",
  jurusan: "RPL",
};

const { nama: a, ...sisa } = namePerson;

function access({ nama, jenjang, jurusan }) {
  return `jenjang : ${jenjang}`;
}

// console.log(access(namePerson));

// =====================
// for of && for in

// for ex. for...of (iterable object)
// array
const firstLoopsOfIterable = [1, 2, 3, 4, 5];
// for (test of firstLoopsOfIterable) {
//   console.log(test);
// }

// string
const namaSaya = "ketsar";
// for (nm of namaSaya) {
//   console.log(nm);
// }

// for ex. for...in(enumerable)
const testEnum = {
  nama: "ketsar",
  umur: 16,
};

for (rn in testEnum) {
  console.log(`${rn} : ${testEnum[rn]}`);
}

// =================
// spread operator

// menggabungkan dua buah array
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["ketsar", "bagas", "zahra", "ragil", "dina"];
const combine = [...arr1, ...arr2];
for ([i, type] of arr2.entries()) {
  console.log(`  ${type} : ${i + 1}`);
}
// console.log(combine);

// mengcopy array
const copyArr = [...arr1];
copyArr.unshift(0);
// console.log(copyArr);

// ==========================
// rest parameter

function exam(max, action, ...person) {
  for (let isi = max; isi < person.length; isi++) {
    action(`${person[isi]} : ${isi + 1}`);
  }
  return console.log(person);
}

// console.log(exam(0, console.log, "diva", "rehan", "anjas"));

// =======================
// give animation to text on the webpage

const getText = document.querySelector("h1.header-text");
const changeText = [...getText.textContent].map((m) => `<span>${m}</span>`).join(" ");

getText.innerHTML = changeText;
console.log(getText);
