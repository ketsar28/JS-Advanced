// first-context
const savingValues = (a, ...restValues) => {
  return restValues;
};

console.log(savingValues(1, 2, 3, 4, 5));

// second-context
const hitung = (...angka) => {
  return angka.reduce((a, b) => a + b);
};

console.log(hitung(1, 2, 3, 4, 5));

// third-context
const group = ["ketsar", "bagas", "syifa", "zahra", "topan", "gladys"];
const [ketua, wakil, ...anggota] = group;
console.log(...anggota);
