/*==========
Object
adalah sekumpulan properties
Properties merupakan sebuah key-value
Mengaksesnya dengan menggunakan custom keys
==========*/

// contoh-1
const fitnessData = {
  totalSteps: 1341234,
  totalMiles: 119.2,
  avgCaloriesBurn: 6654,
};

// contoh-2
let user = {
  name: "john",
  age: 18,
};

// contoh-3
const orang = {
  nama: "Aim",
  tanggal: 16,
  alamat: "Cirebon",
};

// contoh-4
const barang = {
  judul: "Sepatu",
  harga: 2000000,
  isReady: true,
  size: ["38", "39", "40", "41", "42"],
  location: {
    indonesia: 48,
    singapore: 50,
  },
};

// cara memanggil value objek
barang.harga;
barang.size[0];
barang.location.indonesia;

// mengubah properti objek
barang.harga = 150000;
barang.location.indonesia = 25;

// menambah properti objek
orang.gender = "laki-laki";
orang["umur"] = 25;

// Objek di dalam array
const shoppingCart = [
  {
    product: "vue.js",
    price: 1.22,
    quantity: 3,
  },
  {
    product: "react.js",
    price: 2.32,
    quantity: 1,
  },
  {
    product: "angular.js",
    price: 3.32,
    quantity: 2,
  },
];

// cara memanggil data
shoppingCart[0].product; //rekomendasi
shoppingCart[0]["price"];

// array dan objek di dalam objek
const student = {
  firstName: "David",
  lastName: "Beckham",
  strengths: ["Foot", "Balls"],
  exam: {
    midterm: 96,
    final: 69,
  },
};
