// ambil seluruh video
let getVideo = Array.from(document.querySelectorAll("[data-durasi]"));
// filter video yang ingin di implementasikan
let getVideos = getVideo
  .filter((fil) => fil.innerText.includes("JS Lanjutan"))
  // ambil data waktu seluruh video
  .map((grup) => grup.dataset.durasi)
  // ubah menjadi detik dan hilangkan titik duanya
  .map((second) => {
    const ubah = second.split(":").map((string) => parseFloat(string));
    return ubah[0] * 60 + ubah[1];
  })
  // akumulasikan detik tersebut
  .reduce((tampung, total) => tampung + total);
// convert menjadi data waktu sesuai herarki
const jam = Math.round(getVideos / 3600);
getVideos = getVideos - jam * 60;
const menit = Math.round(getVideos / 60);
const detik = Math.round(getVideos - menit * 60);
// masukan ke DOM
const isi = getVideo.filter((fill) => fill.textContent.includes("JS Lanjutan")).length;
const countVideo = (document.querySelector("aside.jml-video span").innerHTML = `${isi} Video`);
const duration = (document.querySelector("aside.durasi-video span").innerText = `${jam} Jam, ${menit} Menit, ${detik} Detik`);
// const durasi =
