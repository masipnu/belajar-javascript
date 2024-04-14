// // Fungsi lempar dadu
// function lemparDadu() {
//   dadu = Math.floor(Math.random() * 6) + 1;
//   console.log(dadu);
// }

// // Fungsi dasar
// function nyanyi() {
//   console.log("Do re mi...!");
// }
// nyanyi(); //memanggil fungsi nyanyi()

/**
 * Parameter dan Argumen
 */
//di sini disebut parameter
// function sapa(nama) {
//   console.log(`Hai ${nama}`);
// }
// //di sini disebut argument
// sapa("joko");

/**
 * return
 * return dalam sebuah fungsi membuat hasilnya
 * bisa diolah lagi/ ditampung ke dalam variabel lain,
 * tak sekedar hanya ditampilkan di log
 */
// function jumlahkan(a, b) {
//   let hasil = a + b;
//   return hasil;
//   console.log("tidak berhasil"); // perintah setelah return tidak akan dieksekusi
// }

// contoh return-2
// function jumlahkan(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return false;
//   }
//   return a + b;
// }

/**
 * Variable Scope
 * keyword let digunakan untuk mendeklarasikan variabel,
 * contoh => let makanan='bakso'
 * jika tanpa let, maka berfungsi untuk mengubah nilai variabel,
 * contoh => makanan='soto'
 *
 * variable yang didefinisikan di luar fungsi, tidak akan bisa berubah nilainya
 * jika membuat fungsi dan membuat variabel yang sama di dalam fungsi,
 * ini akan dianggap dua variabel yang berbeda
 * namun jika memanggil variabel luar fungsi dari dalam fungsi ini tentu akan bisa
 * memanggil nilai variabel luar fungsi tersebut.
 */

// let makanan = "bakso";
// function makan() {
//   let makanan = "soto";
//   console.log(makanan);
// }
// console.log(makanan);
// makan();

/**
 * Variabel yang didefinisikan di dalam fungsi dengan keyword let dan const
 * tidak akan bisa diakses dari luar fungsi,
 * namun jika didefinisikan menggunaka keyword var, akan bisa
 * diakses dari luar fungsi, bahkan dari fungsi lain.
 */

// let tinggi = 8;
// if (tinggi > 5) {
//   //   let lebar = 4;
//   var lebar = 4;
// }
// console.log(lebar);

/*
 * lexical scope
 * fungsi yang berada di dalam fungsi bisa memanggil variabel
 * dari fungsi di atasnya.
 */
// function lamarKerja() {
//   const jabatan = "programmer";

//   function orangDalam() {
//     let kenalan = `orang dalam bisa memasukkan ${jabatan}`;
//     console.log(kenalan);
//   }

//   orangDalam();
// }

/*
 * Function expression
 */
// function pangkat(angka) {
//   return angka * angka;
// }
// let hasil = pangkat(5);

/**
 * fungsi di atas bisa langsung kita persingkat dengan
 * memasukkan function ke dalam variabel
 */

// const hasilPangkat = function (angka) {
//   return angka * angka;
// };
// // memanggil nilai variabel hasilPangkat
// hasilPangkat(5);

/**
 * function sebagai argumen fungsi lain
 */
// function duaKali(fungsi) {
//   fungsi();
//   fungsi();
// }
// function lemparDadu() {
//   const hasil = Math.floor(Math.random() * 6) + 1;
//   console.log(hasil);
// }
// cara pemanggilan => duaKali(lemparDadu)

/**
 * function mengembalikan function
 * untuk mengambil nilainya harus dimasukkan ke dalam variabel
 * lalu variabel dipanggil dengan menambahkan tanda ()
 */
// function hasilnyaFunction() {
//   const rand = Math.random();
//   if (rand > 0.1) {
//     return function () {
//       console.log("Selamat, angkanya lebih besar!");
//     };
//   } else {
//     return function () {
//       console.log("Maaf, mungkin bisa coba lagi!");
//     };
//   }
// }
// untuk menyimpan nilainya => const hasil=hasilnyaFunction()
// lalu => hasil()

/**
 * Method
 * Method adalah function yang berada di dalam objek
 * atau value dari sebuah properti objek yang berupa function
 */
// const myMath = {
//   // objek
//   perkalian: function (x, y) {
//     // method
//     return x * y;
//   },
// };
// Cara memanggilnya => myMath.perkalian(2,4)

/**
 * This
 * adalah keyword untuk memanggil nilai properties dari objek yang sama
 */
// const saya = {
//   nama: "masipnu",
//   hobi: "membaca",
//   kenalan: function () {
//     console.log(`Perkenalkan nama saya ${this.nama}, hobi saya ${this.hobi}`);
//   },
// };

// saya.nama; // cara memanggil properti nama
// saya.nama = "joko"; // cara mengganti nilai properti
// saya.kenalan(); // cara memanggil method

/**
 * try dan catch
 * berfungsi untuk menghilangkan error,
 * juga untuk melewati bagian yang error dan melanjutkan kode pada blok catch
 * jika kode di dalam blok try tidak error, maka akan dijalankan
 * dan kode di dalam blok catch akan diabaikan
 */

// try {
//   saya.kenalan(); // kode ini error tapi tidak akan menampilkan error, karena diabaikan
// } catch {
//   console.log("Error!");
// }

// contoh lain
function teriak(pesan) {
  try {
    console.log(`${pesan.toUpperCase()}...!!!`);
  } catch {
    console.log("Masukkan hanya huruf!");
  }
}
