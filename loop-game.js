let nilaiMaksimal = parseInt(prompt("Masukkan nilai maksimal"));
const targetAngka = Math.floor(Math.random() * nilaiMaksimal) + 1;
console.log(targetAngka);

let tebakan = parseInt(prompt("Isi tebakan pertama kamu!"));
let percobaan = 1;
while (tebakan !== targetAngka) {
  percobaan++;
  if (tebakan > targetAngka) {
    tebakan = parseInt(prompt("Terlalu tinggi, Tebak lagi!"));
  } else {
    tebakan = parseInt(prompt("Terlalu rendah, Tebak lagi!"));
  }
}
alert(`😀 Yeay..!\nJawabanmu benar pada tebakan ke ${percobaan}`);
