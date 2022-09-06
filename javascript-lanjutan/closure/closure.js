// NOTE

/*
MDN : "Closure merupakan kombinasi antara function dan lingkungan leksikal(lexical scope) didalam function tersebut"

W3SCHOOL : "Closure adalah sebuah function ketika memiliki akses ke parent scopenya, meskipun parent scopenya sudah selesai dieksekusi"

CODE FOLLOW : "Closure adalah sebuah function yang dikembalikan oleh function yang lain, yang mrmiliki akses ke lingkungan saat ia diciptakan"

TECHSITH : "Closure adalah sebuah function yang sebelumnya sudah memiliki data, hasil dari function yang lain"
*/

// Lexical Scope Example
// 1
function lexical() {
  const nama = "ketsar";
  function eksekusi() {
    console.log(nama);
    console.log("======================");
  }

  eksekusi();
}

lexical();

// 2

function sayUser(time) {
  return function (user) {
    console.log(`halo, selamat ${time} ${user}`);
  };
}

let morning = sayUser("pagi");
let afternoon = sayUser("siang");
let evening = sayUser("sore");

afternoon("bagas");
evening("claura");
