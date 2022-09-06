// // object literal
// const literal = {
//   name: "ketsar",
//   class: "XI RPL 2",
//   sayName() {
//     const simpanValue = arguments;
//     console.log(simpanValue);
//     console.log(`nama : ${this.name}. kelas : ${this.class}`);
//   },
// };
// literal.sayName("nabil", "IV-A");

// ===============================================

// // object function

// function objectFunction(nama, energi) {
//   let object = {};
//   object.name = nama;
//   object.energy = energi;
//   object.playing = (waktu) => {
//     object.energy -= waktu * 2;
//     return "silahkan dicek kembali energinya";
//   };

//   return "object";
// }

// const run = objectFunction("ketsar", 20);

// ===============================================

// // object constructor

// function ObjectContructor(nama, energi) {
//   this.name = nama;
//   this.energy = energi;
//   this.eat = (porsi) => {
//     this.energy += porsi * 2;
//     return `energinya sudah bertambah, silahkan dicek kembali`;
//   };
// }

// const run2 = new ObjectContructor("nabil", 25);

// ===============================================

// // Object.create()

// const addedObjectFunction = {
//   eat(porsi) {
//     this.energy += porsi + 5;
//     return `energinya sudah bertambah, silahkan dicek kembali`;
//   },

//   main(waktu) {
//     this.energy -= waktu * 2;
//     return `energinya sudah bertambah, silahkan dicek kembali`;
//   },
// };

// function Tampung(nama, energi) {
//   let object = Object.create(addedObjectFunction);
//   object.name = nama;
//   object.energy = energi;
//   return object;
// }

// const run3 = Tampung("bagas", 16);

// ===============================================

function LearnProto(nama, energi) {
  //   let object = {};
  this.name = nama;
  this.energy = energi;
  //   return object;
}

LearnProto.prototype.game = function (waktu) {
  this.energy -= waktu * 2;
  return `energinya sudah bertambah, silahkan dicek kembali`;
};

const run4 = new LearnProto("Danial", 18);
