/*==========
Perulangan
contoh perintah perulangan
- tampilkan "hello" 10 kali
- totalkan angka pada sebuah array

tipe-tipe perulangan
- for
- while
- for...of
- for...in
==========*/

// sintaks dasar
// (initiator; condition; increment/decrement)
// for (let i = 1; i <= 10; i++) {
//   console.log(`ini adalah perulangan ke ${i}`);
// }

// Contoh lain
// for (let i = 2; i <= 20; i += 2) {
//   console.log(`angka genap : ${i}`);
// }

// Hitung mundur
// for (let i = 10; i >= 1; i--) {
//   console.log(`hitungan ke ${i}`);
// }

// Perkalian
// for (let i = 10; i <= 10000; i *= 10) {
//   console.log(`hitungan ke ${i}`);
// }

// Hati-hati infinite-loop
// Jangan dijalankan, karena bisa menyebabkan freeza dan BSOD
// for (let i = 20; i >= 0; i++) {
//   console.log(i);
// }

// Mendapatakan nilai array dengan loop
// const animals = ["kucing", "rusa", "sapi", "kambing"];
// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }

// Nested loop
// let pilihan = "abcde";
// for (let angka = 1; angka <= 5; angka++) {
//   console.log(`Soal nomor ${angka}`);
//   for (let abjad = 0; abjad < pilihan.length; abjad++) {
//     console.log(`   ${pilihan[abjad]}. Pilihan jawaban`);
//   }
// }

// Loop untuk nested array
// const siswaPerBaris = [
//   ["Olivia", "Liam", "Emma", "Noah"],
//   ["Amelia", "Oliver", "Ava", "Elijah"],
//   ["Sophia", "Mateo", "Isabella", "Lucas"],
// ];
// for (let i = 0; i < siswaPerBaris.length; i++) {
//   const baris = siswaPerBaris[i];
//   console.log(`Baris ke-${i + 1}`);
//   for (let j = 0; j < baris.length; j++) {
//     console.log(`   ${j + 1}. ${baris[j]}`);
//   }
// }

// Perulangan - While
// ===================

// perulangan whila akan terus berjalan selama kondisi tesnya bernilai true
// Hati-hati, jika increment/decrement-nya dihilangkan, akan emnyebabkan hang!
// Sintaks dasar
// let num = 0;
// while (num <= 10) {
//   console.log(num);
//   num++;
// }

// Kasus pop-up passsword
// const PASSWORD = "pass1234";
// let input = prompt("Masukkan Password!");
// while (input !== PASSWORD) {
//   input = prompt("Masukkan Password!");
// }
// alert(`Yeay..!\nPassword anda benar.`);

// Trik menghentikan while - menggunakan break
// let input = prompt("Ketikkan sesuatu");
// while (true) {
//   input = prompt(`${input} \nKetik stop untuk berhenti.`);
//   if (input === "stop") break;
// }
// alert("Ok..!");

// Menghentikan loop pada for
// for (let i = 0; i <= 1000; i++) {
//   console.log(i);
//   if (i == 100) break;
// }

// Cara aestetic menggunakan for
// const sayuran = ["bayam", "wortel", "cabe", "kangkung"];
// for (sayur of sayuran) {
//   console.log(`sayur ${sayur}`);
// }

// for of untuk nested array
// const siswa = [
//   ["Olivia", "Liam", "Emma", "Noah"],
//   ["Amelia", "Oliver", "Ava", "Elijah"],
//   ["Sophia", "Mateo", "Isabella", "Lucas"],
// ];
// for (baris of siswa) {
//   console.log(`Baris ke-${siswa.indexOf(baris) + 1}`);
//   for (murid of baris) {
//     console.log(`  ${baris.indexOf(murid) + 1}. ${murid}`);
//   }
// }

// for-in untuk data object
const skorSiswa = {
  Olivia: 20,
  Liam: 13,
  Emma: 40,
  Noah: 18,
  Amelia: 32,
  Oliver: 10,
  Ava: 11,
  Elijah: 21,
  Sophia: 14,
  Mateo: 22,
};
for (skor in skorSiswa) {
  console.log(`${skor} memiliki nilai\t: ${skorSiswa[skor]}`);
}

let total = 0;
let totalSkor = Object.values(skorSiswa);
for (let angka of totalSkor) {
  total += angka;
}
console.log(`Nilai rata-rata\t\t: ${total / totalSkor.length}`);

/*
Catatan
for-of untuk tipe data iterable/ bisa diurutkan, seperti array
yang didapat adalah value-nya

for-in untuk tipe data non-iterable/ tidak bisa diurutkan, seperti data-object
yang didapat adalah key-nya
*/
