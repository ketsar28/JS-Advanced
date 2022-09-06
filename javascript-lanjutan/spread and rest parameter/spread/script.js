// spread operator ([...])
// first-conntext = menggabungkan 2 buah array
const arr = ["ketsar", "fadil", "herman"];
const arr2 = ["zalfa", "aliyah", "hanni"];
const combine = [...arr, "anjas", ...arr2]; // spread
const combine2 = arr.concat(arr2); //concat operator

console.log(combine2);

// second-context = mengcopy array
const copyArr = [1, 2, 3];
// const copied = copyArr;
// copied.push(4);
const copied = [...copyArr];
copied.unshift(0);
console.log(copied);

// third-context = mengambil data list pada dokumen HTML
const get = document.querySelectorAll("li");
const runGet = [...get].map((g) => g.textContent);
console.log(runGet);
