// 1. Array Destructuring
// const [hewanPertama] = ['Kuda', 'Tikus', 'Kucing'];
// console.log(hewanPertama); // Output: Kuda

// const [, , hewanKetiga] = ['Kuda', 'Tikus', 'Kucing'];
// console.log(hewanKetiga); // Output: Kucing

// 2. Object Destructuring
const buburAyam = {
  jenisBeras: 'beras Cianjur',
  suwiran: 'ayam kampung',
  topping: 'cakwe',
  bumbu: ['kecap', 'sambal', 'kerupuk'],
};

const { jenisBeras, suwiran, bumbu } = buburAyam;

console.log(bumbu);

// console.log(jenisBeras, suwiran); // Output: beras Cianjur ayam kampung

// 3. Object Literal Enhancement
// const namaGunung = 'Semeru';
// const ketinggian = 3676; // dalam meter
// const cetakInfo = function () {
//   console.log(`Gunung ${this.namaGunung} memiliki ketinggian ${this.ketinggian} meter`);
// };

// const pendakian = { namaGunung, ketinggian, cetakInfo };
// console.log(pendakian);
// pendakian.cetakInfo();

// 4. Spread Operator: Menggabungkan Array
// const makanan = ['Nasi Goreng', 'Sate Ayam', 'Gado-gado'];
// const minuman = ['Es Teh', 'Jus Jeruk'];
// const menuLengkap = [...makanan, ...minuman];
// console.log(menuLengkap.join(', '));

// 5. Spread Operator: Mengambil sisa elemen pada Array
// const buahBuahan = ['Apel', 'Pisang', 'Jeruk', 'Mangga'];
// const [buahPertama, ...buahLainnya] = buahBuahan;
// console.log(buahLainnya.join(', '));

// 6. Spread Operator: Mengumpulkan argument
// function rutePerjalanan(...args) {
//   let [kotaAwal, ...kotaLanjutan] = args;
//   let [kotaTujuan, ...kotaSinggahan] = kotaLanjutan.reverse();
//   console.log(`melewati ${args.length} kota`);
//   console.log(`mulai dari ${kotaAwal}`);
//   console.log(`tujuan akhirnya adalah ${kotaTujuan}`);
//   console.log(`singgah ${kotaSinggahan.length} kali di antaranya`);
// }

// rutePerjalanan('Jakarta', 'Bogor', 'Puncak', 'Bandung', 'Cimahi');

// 7. Spread Operator pada Object
// const makanPagi = {
//   sarapan: 'nasi uduk',
//   makanSiang: 'ayam goreng',
// };

// const makanMalam = 'ikan bakar';

// const menuMakanan = {
//   ...makanPagi,
//   makanMalam,
// };

// console.log(menuMakanan);
