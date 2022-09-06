const jml = document.querySelector(".jumlah-video");
const duration = document.querySelector(".total-durasi");

let getVideos = [...document.querySelectorAll(`[data-duration]`)]
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

  .map((durasi) => durasi.dataset.duration)
  .map((change) => {
    const result = change.split(":").map((convert) => parseInt(convert));
    return result[0] * 60 + result[1];
  })
  .reduce((a, b) => a + b);

const jam = Math.floor(getVideos / 3600);
getVideos -= jam * 3600;
const menit = Math.floor(getVideos / 60);
const detik = Math.floor(getVideos - menit * 60);

jml.innerText = `${[...document.querySelectorAll(`[data-duration]`)].filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")).length} Video`;

duration.innerText = `${jam} jam : ${menit} menit : ${detik} detik`;

console.log(getVideos);
console.log(jam);
console.log(menit);
console.log(detik);
