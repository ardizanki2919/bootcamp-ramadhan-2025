// 8. contoh enkapsulasi data
function counter() {
  let angka = 0;
  function tambahAngka() {
    angka++;
    return console.log(angka);
  }
  return tambahAngka;
}

angka = 100;

let counterBaru = counter();
counterBaru();
counterBaru();
counterBaru();

// 7. contoh simple closure
// function x() {
//   let a = 10;
//   function y() {
//     console.log('hello world');
//   }
//   return y;
// }

// let z = x();
// z();

// 6. contoh let & const
// const x = 100;
// x = 10;
// console.log(x);

// 5. contoh let
// halo();
// console.log(x);

// let x = 10;
// function halo() {
//   console.log('Hello World!');
// }

// 4. contoh scope
// function a() {
//   var b = 10;
//   c();
//   function c() {
//     console.log(b);
//   }
// }

// a();

// 3. contoh execution context 3
// function funcA(m, n) {
//   return m * n;
// }

// function funcB(m, n) {
//   return funcA(m, n);
// }

// function getResult(num1, num2) {
//   return funcB(num1, num2);
// }

// var res = getResult(5, 6);

// console.log(res);

// 2. contoh execution context 2
// var n = 3;
// function kuadrat(n) {
//   var hasil = n * n;
//   return hasil;
// }

// var kuadrat1 = kuadrat(n);
// var kuadrat2 = kuadrat(8);

// console.log(kuadrat1);
// console.log(kuadrat2);

// 1. contoh execution context
// halo();
// console.log(x);

// var x = 10;
// function halo() {
//   console.log('Hello World!');
// }
