const tesPro = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ nama: "ketsar", usia: "17 Tahun" });
    reject(new Error("Kode Kamu Salah"));
  }, 1500);
});

tesPro
  .then((a) => {
    console.log(a);
  })
  .catch((b) => {
    console.log(b.message);
  });
