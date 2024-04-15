/**
 * Default Argument
 * default argument akan mengisi parameter pada function
 * ketika user lupa memasukkan argumen saat memanggil fungsi.
 * default argumen bisa lebih dari satu,
 * namun jika dalam function memiliki campuran parameter yang memiliki nilai default dan tidak,
 * maka sebaiknya parameter yang memiliki degault argument diletakkan di belakang.
 */
// ini tidak memiliki default argumen
// jika saat pemanggilan fungsi tanpa  argumen, maka akan menghasilkan NaN
// function lemparDadu(sisi) {
//   return Math.floor(Math.random() * sisi) + 1;
// }

// // dengan default argumen
// function lemparDaduLagi(sisi = 400) {
//   return Math.floor(Math.random() * sisi) + 1;
// }

// // dengan default argumen dan tidak
// function sapa(nama, pesan = "Salam kenal!") {
//   return `Hai ${nama}, ${pesan}`;
// }

// /**
//  * Spread Operator
//  * mengubah array atau object bahkan string
//  * menjadi deret parameter untuk function
//  * spread operator adalah ...
//  */
// /**
//  * Math.max => untuk mendapatkan nilai tertinggi,
//  * Math.min => untuk mendapatkan nilai terendah,
//  * harusnya seperti ini Math.max(1,2,3,4,5)
//  * jika datanya diambil dari array, kita gunakan spread operator
//  */
// const angka = [1, 2, 3, 4, 5];
// // console.log(Math.max(angka)); //ini akan bernilai NaN
// console.log(Math.max(...angka)); //ini yang benar

// /**
//  * Merge Array dengan spread
//  */
// const number = [1, 2, 3, 4, 5];
// const nama = ["alex", "dio", "tony"];

// // penggabungan1, dengan metode dafault .push
// number.push(6);

// //penggabungan2
// const array1 = [...number, 7, "eko"];

// // penggabungan3
// const array2 = [...number, ...nama];

// /**
//  * Merge object dengan spread operator
//  */
// const user = {
//   nama: "john",
//   email: "john@doe.com",
// };
// const userUpdate = { ...user, id: 123, password: "pass1234" };

// const credential = { token: "foljkdnbgepr9ibfu" };
// const userPro = { ...userUpdate, ...credential };

// /**
//  * Rest-param
//  * memecah isi array untuk menjadikan argument function tak terhingga
//  */

// // menggunakan reduce, arrow function
// const sumAll = (...nums) => {
//   return nums.reduce((total, el) => total + el);
// };
// sumAll(1, 7, 8, 9, 8, 3, 5, 7, 9); //cara memanggil fungsi

// // dengan string
// const namaBaru = ["alex", "dio", "tony", "joko", "ella"];
// const pemenang = (gold, silver, bronze, ...sisa) => {
//   console.log(`Pemenang medali emas : ${gold}`);
//   console.log(`Pemenang medali perak : ${silver}`);
//   console.log(`Pemenang medali perunggu : ${bronze}`);
//   console.log(`Peserta lainnya : ${sisa}`);
// };
// pemenang(...namaBaru); //memanggil function

// // fungsi total
// const nilai = [80, 90, 67, 98, 86];
// function nilaiTotal(...nilai) {
//   let total = 0;
//   for (let n of nilai) total += n;
//   return total;
// }
// // memanggil fungsi nilaiTotal
// nilaiTotal(...nilai);

/**
 * Destruct Array
 * membongkar nilai array dan measukkan ke dalam variabel lain
 */
// const nama = ["alex", "bimo", "cici", "delia", "felix", "gerard"];
// const [gold, silver, bronze, ...lainnya] = nama;
/**
 * Hasilnya
 * gold = "alex";
 * silver = "bimo";
 * bronze = "cici";
 * lainnya = ["delia", "felix", "gerard"];
 */

/**
 * Destruct Object
 * membongkar objek dan memasukkan ke variabel baru
 */
// const user = {
//   nama: "john",
//   email: "john@doe.com",
// };
// // destruct
// const { nama: jeneng, email, phone = "08213495" } = user;

/**
 * Destruct Properti Object
 */
const user = {
  nama: "john",
  email: "john@doe.com",
  role: "admin",
};
const userAndRole = ({ nama, role }) => {
  return `${nama} itu ${role}`;
};

// Destruct kasus anime
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
const anime = animes.map(({ title, year, rating }) => {
  return `${title} (${year}) rating ${rating}`;
});
