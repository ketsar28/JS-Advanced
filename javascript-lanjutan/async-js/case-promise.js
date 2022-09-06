console.log("mulai");

function pusat(nama, email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log({ nama, email });
      resolve({ nama, email });
    }, 2000);
  });
}

function async2(hobi) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log([hobi]);
      resolve([hobi]);
    }, 2000);
  });
}

function async3(status) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Pelajar");
    }, 1000);
  });
}

// sync

// const run = pusat("ketsar", "ketsar@com.id");
// run
//   .then((user) => async2(user.email))
//   .then((user2) => async3(user2[0]))
//   .then((user3) => console.log(user3));

// async 2
let allData = [{ nama: "ketsar" }];

const input = prompt("masukan data : ");
for (let i = 0; i <= allData.length; i++) {
  objIndex = allData.findIndex((obj) => obj.nama[i]);

  allData[objIndex].nama = input;
}

console.log(allData);

function change() {
  //return new Promise((resolve, reject) => {
  setTimeout(() => {
    const err = false;
    if (input != err) {
      allData.forEach((text, i) => {});
    } else {
      alert("silahkan refresh kembali halaman anda");
    }
  }, 2000);
  //});
}

function metode() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let saveData = "";
      let error = false;
      allData.forEach((data, i) => {
        saveData += `
      
      <li>${i + 1}. ${data.nama}</li>
      `;
      });
      if (!error) {
        resolve();
      } else {
        reject("ada yang error,coba cek deh!");
      }
      // console.log(saveData);
      document.body.innerHTML = saveData;
    }, 1000);
  });
}

function addData(add) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      allData.push(add);

      let error = false;

      if (!error) {
        resolve();
      } else {
        reject("ada yang error!");
      }
    }, 1000);
  });
}

// change();

// metode()
//   .then(change)
//   .catch((err) => console.log(err));

// addData({ nama: "galih" })
//   .then(metode)
//   .catch((e) => console.log(e));

console.log("akhir");
