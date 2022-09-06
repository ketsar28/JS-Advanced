// ambil elemen video
const getVideos = Array.from(document.querySelectorAll("[data-waktu]"));

// ambil video js lanjutan
let jsLanjut = getVideos
  .filter((fil) => fil.textContent.includes("JS Lanjutan"))

  // ambil durasi video
  .map((lanjut) => lanjut.dataset.waktu)

  // ubah durasi tersebut menjadi detik
  .map((change) => {
    const ubah = change.split(":").map((changes) => parseFloat(changes));
    return ubah[0] * 60 + ubah[1];
  })
  // total detik
  .reduce((total, waktu) => (total += waktu));
// susun detik menjadi waktu baru
const jam = Math.round(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 60;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;
// masukan ke DOM

const countVideo = (document.querySelector("aside.jml-video span").innerHTML = `${getVideos.filter((fil) => fil.textContent.includes("JS Lanjutan")).length} Video`);

const countDuration = (document.querySelector("aside.durasi-video span").innerHTML = `${jam} jam - ${menit} menit - ${detik} detik`);

console.log(jsLanjut);
console.log(jam);
console.log(menit);
console.log(detik);

// ======================

// ambil elemen video
const getVideosDasar = Array.from(document.querySelectorAll("[data-waktu]"));

// ambil video js lanjutan
let jsDasar = getVideosDasar.filter((fil) => fil.innerHTML.includes("JS Dasar"));
// ambil durasi video
const getDuration = jsDasar.map((dasar) => dasar.dataset.waktu);
// ubah durasi tersebut menjadi detik
const convertDuration = getDuration.map((convert) => {
  const splitting = convert.split(":");
  const resultConvert = splitting.map((kompres) => parseFloat(kompres));
  return resultConvert[0] * 60 + resultConvert[1];
});
// total detik
let sumDuration = convertDuration.reduce((count, number) => (count += number));
// susun detik menjadi waktu baru
const resultJam = Math.round(sumDuration / 3600);
sumDuration = sumDuration - resultJam * 60;
const resultMenit = Math.floor(sumDuration / 60);
const resultDetik = sumDuration - resultMenit * 60;

// masukan ke DOM

const countVideoDasar = (document.querySelector("article.jml-video span").innerHTML = `${getVideosDasar.filter((fil) => fil.textContent.includes("JS Lanjutan")).length} Video`);

const countDurationDasar = (document.querySelector("article.durasi-video span").innerHTML = `${resultJam} jam - ${resultMenit} menit - ${resultDetik} detik`);

console.log(getVideosDasar);
console.log(jsDasar);
console.log(getDuration);
console.log(convertDuration);
console.log(sumDuration);
console.log(resultJam);
console.log(resultMenit);
console.log(resultDetik);
// console.log(jam);
// console.log(menit);
// console.log(detik);
