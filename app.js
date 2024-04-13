// console.log("Hello World");
// tebakan = prompt("1+1=?");
// console.log(`1 + 1 = ${tebakan}`);

// if (1 + 1 === 2) {
//   console.log("Perhitungannya betul!");
// }

// // If
// let angka = Math.random();
// console.log(angka);
// if (angka >= 0.5) {
//   console.log("Angka lebih besar dari 0.5");
// } else {
//   console.log("Angka lebih kecil dari 0.5");
// }

// // If-else-if
// let iniHari = prompt("Sekarang hari?").toLocaleLowerCase();
// if (iniHari == "senin") {
//   console.log("Selamat bekerja kawan!");
// } else if (iniHari == "sabtu") {
//   console.log("Semoga jangan cepat berlalu.");
// } else {
//   console.log("Yah, biasa aja.");
// }

// let nilai = 80;
// if (nilai < 50) {
//   console.log("E");
// } else if (nilai < 60) {
//   console.log("D");
// } else if (nilai < 70) {
//   console.log("C");
// } else if (nilai < 80) {
//   console.log("B");
// } else if (nilai < 100) {
//   console.log("A");
// }

// // Validasi password - nested if-else
// let password = prompt("Masukkan password!");
// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("Password valid.");
//   } else {
//     console.log("Password tidak boleh mengandung karakter spasi!");
//   }
// } else {
//   console.log("Password minimal 6 karakter!");
// }

// Validasi password lebih sederhana dengan logical operator
// let password = prompt("Masukkan password!");
// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("Password valid.");
// } else {
//   console.log("Password tidak memenuhi syarat!");
// }

// Validasi akses dengan logika OR
// let role = prompt("Masukkan role!");
// if (role === "admin" || role === "user") {
//   console.log("Akses diterima.");
//   alert("Akses diterima.");
// } else {
//   console.log("Akses ditolak!");
//   alert("Akses ditolak!");
// }

// Validasi akses dengan logika NOT
// let role = prompt("Masukkan role!");
// if (role != "admin") {
//   console.log("Akses ditolak!");
//   alert("Akses ditolak!");
// } else {
//   console.log("Akses diterima.");
// }

// Penggunaan switch
// let balonku = "merah";
// switch (balonku) {
//   case "merah":
//     console.log("balonku warna merah");
//     break;
//   case "hijau":
//     console.log("meletus...");
//     break;
//   default:
//     console.log("bukan balon saya");
// }

// Switch untuk mendapatkan hari
let tanggal = new Date();
let hari = tanggal.getDay();
console.log(hari);
switch (hari) {
  case 0:
    console.log("Ahad");
    break;
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jum'at");
    break;
  case 6:
    console.log("Sabtu");
    break;
  default:
    console.log("Hari tidak ditemukan!");
}
