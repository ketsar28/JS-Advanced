console.log("mulai");

function pusat(nama, email, callback) {
  setTimeout(() => {
    callback({ nama, email });
  }, 2000);
}

function async2(hobi, callagain) {
  setTimeout(() => {
    callagain([hobi]);
  }, 2000);
}

function async3(status, calltry) {
  setTimeout(() => {
    calltry("Pelajar");
  }, 1000);
}

// const run = pusat("ketsar", "muhammadketsar1@gmail.com", (call) => {
//   console.log(typeof call);

//   async2("coding", (call2) => {
//     console.log(call2);
//     async3(call2, (call3) => {
//       console.log(call3);
//     });
//   });
// });

// sync

console.log("akhir");
