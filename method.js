/**
 * Callback function
 * hasil dari sebuah method/ fungsi
 * bisa dipangiil lagi untuk dimasukkan ke dalam fungsi
 */

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Konsep dasar
// function print(i) {
//   console.log(i);
// }
// angka.forEach(print);

// memakai callback / anonymous function
// kode berikut akan mengambil nilai dari array angka
// dan memprosesnya ke dalam anonymous fuction
// menghasilkan angka genap denga teknik modulo
// angka.forEach(function (el) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

// Contoh lagi
// const animes = [
//   {
//     title: "Attack on Titan",
//     rating: 90,
//   },
//   {
//     title: "One Piece",
//     rating: 89,
//   },
//   {
//     title: "Bleach",
//     rating: 82,
//   },
//   {
//     title: "Hunter x Hunter",
//     rating: 90,
//   },
//   {
//     title: "Naruto",
//     rating: 84,
//   },
// ];
// // menggunakan callback
// animes.forEach(function (anime) {
//   console.log(`${anime.title} - ${anime.rating}/100`);
// });

/**
 * Map
 * method dari array yang mengembalikan sebuah array baru
 */
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const angkaDouble = angka.map(function (num) {
//   // masing-masing angka dikali 2
//   return num * 2;
// });

// Contoh lagi
// const animes = [
//   {
//     title: "Attack on Titan",
//     rating: 90,
//   },
//   {
//     title: "One Piece",
//     rating: 89,
//   },
//   {
//     title: "Bleach",
//     rating: 82,
//   },
//   {
//     title: "Hunter x Hunter",
//     rating: 90,
//   },
//   {
//     title: "Naruto",
//     rating: 84,
//   },
// ];

// const animeList = animes.map(function (anime) {
//   return anime.title.toUpperCase();
// });

/**
 * Arrow function
 * membuat fungsi lebih sederhana dengan tanda =>
 * dan hasilnya langsung masuk ke variable
 * sebaiknya parameter diapit tanda kurung, biar lebih jelas
 * kalau parameternya 1, boleh tanpa tanda kurung
 */
// const pangkat = (x) => {
//   return x * x;
// };

// contoh lagi
// const random = () => {
//   return Math.floor(Math.random() * 1000);
// };

/**
 * Return secara explisit dari arrow function
 * jika function sangat sederhana, penulisan bisa diperingkas
 * tanpa keyword return
 * kurung kurawal diganti dengan kurung biasa, bahkan tanpa tanda kurung
 * dalam blok return hanya 1 baris
 */
// const random = () => Math.floor(Math.random() * 1000);
// // contoh lagi
// const tambah = (x, y) => x + y;

/**
 * setTimeout dan setInterval
 * setTimeout : akan menjalankan program setelah sekian detik
 * setInterval : akan menjalankan program setiap sekian detik
 */

// console.log("Halo...");
// setTimeout(() => {
//   console.log("Masih di sana nggak?");
// }, 5000);
// console.log("Saya pergi ya..");
// 'halo' dan 'saya pergi ya' akan ditampilkan langsung,
// tapi 'masih di sana nggak?' sebenranya sudah dijalankan, tapi ditunda 5 detik

// setInterval, ini akan berjalan terus
// setInterval(() => {
//   console.log(Math.floor(Math.random() * 1000));
// }, 2000);

// agar interval bisa dihentikan, masukkan ke dalam variable
// lalu dari console panggil => clearInterval(interval)
// const interval = setInterval(() => {
//   console.log(Math.floor(Math.random() * 1000));
// }, 2000);

/**
 * Filter
 * mengembalikan nilai array yang sudah dimanipulasi
 * dengan kriteria tertentu
 */
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const ganjil = angka.filter((a) => {
//   return a % 2 === 1;
// });

// const angkaBaru = angka.filter((a) => a < 5);

// Contoh lagi
const animes = [
  {
    title: "Attack on Titan",
    rating: 90,
    year: 2015,
  },
  {
    title: "One Piece",
    rating: 89,
    year: 2010,
  },
  {
    title: "Bleach",
    rating: 82,
    year: 2014,
  },
  {
    title: "Hunter x Hunter",
    rating: 90,
    year: 2013,
  },
  {
    title: "Naruto",
    rating: 84,
    year: 2009,
  },
];

const animeBagus = animes.filter((anime) => anime.rating >= 90);
const animeCukupBagus = animes.filter((anime) => anime.rating < 90);
const animeBaru = animes.filter((anime) => anime.year > 2010);

// Menggabungkan map dengan filter
// dari filter animeBagus
const judulAnimeBagus = animeBagus.map((anime) => anime.title);

// catatan : keyword anime adalah nama variable baru dan bebas untuk diganti
// karena sebagai parameter

// filter bisa langsung digabung dengan map, tapi kodenya menjadi lebih panjang
const judulAnimeBaru = animes
  .filter((anime) => anime.year > 2010)
  .map((anime) => anime.title);

/**
 * every dan some
 * akan menghasilkan true/ false
 * every akan menghasilkan true jika semua sesuai kriteria, jika tidak maka false
 * some akan menghasilkan true jika beberapa sesuai kriteria, jika tidak sama sekali maka false
 */

const nilaiUjian = [80, 85, 70, 90, 93, 77];
const semuaLulus = nilaiUjian.every((nilai) => nilai >= 70);

// fungsi ini menggunakan object animes di atas
// menghasilkan nilai true
// karena beberapa ada yang di atas tahun 2010
const apakahAnimeBaru = animes.some((anime) => anime.year > 2010);

/**
 * Reduce
 * melakukan proses sebanyak elemen milik suatu array
 * nilai baliknya adalah single value
 */
const examGrade = [80, 85, 70, 90, 93, 77];
const examTotal = examGrade.reduce((grade, total) => {
  return grade + total;
});
// catatan:
// grade dan total adalah parameter, jadi bisa diganti apapun
// grade akan mengambil nilai pertama dari array
// total akan mengambil nilai setelah grade,
// semua akan berhenti ditambahkans etelah mencapai angka array terakhir

// contoh berikut menggunakan variable anime
// ini akan menghasilkan anime terbaik berdasarkan rating
const bestAnime = animes.reduce((bestAnime, currAnime) => {
  //   console.log(bestAnime, currAnime);
  if (currAnime.rating > bestAnime.rating) {
    return currAnime;
  }
  return bestAnime;
});

/**
 * Catatan
 * keyword this dalam arrow function yang berada dalam objek akan gagal
 * jika menghendaki menggunakan this, maka harus menggunakan function biasa
 */
// Contoh
const person = {
  firstNamme: "John",
  lastName: "Doe",
  fullName: function () {
    //akan error jika menggunakan 'fullname:()=>{'
    return `${this.firstNamme} ${this.lastName}`;
  },
};
