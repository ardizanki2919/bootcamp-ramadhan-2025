// 0. First-class Function: Function sebagai nilai dalam variabel
// let helo = function () {
//   console.log('Hello World');
// };
// helo();

// 1. Function Declaration
// function validasiPassword(password) {
//   return password.length >= 8;
// }

// 2. Function Expression
// const validasiPassword = function (password) {
//   return password.length >= 8;
// };

// 3. Arrow Function
// const validasiPassword = (password) => password.length >= 8;

// 4. Function sebagai object yang memiliki property
// function contoh() {
//   contoh.properti = 'Properti Fungsi';
// }

// contoh();
// console.log(contoh.properti);

// 5. Function dikembalikan dari function lain
// function buatPengali(pengali) {
//   return function (angka) {
//     return angka * pengali;
//   };
// }

// const pengaliDua = buatPengali(2);
// console.log(pengaliDua(5));

// 6. Function dikirim sebagai argumen (callback)
// function sapa(nama, sapaan) {
//   sapaan(nama);
// }

// function salam(nama) {
//   console.log('Halo, ' + nama + '!');
// }

// sapa('Sandhika', salam);
