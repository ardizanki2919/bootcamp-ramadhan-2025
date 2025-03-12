// 1. Simple Promise 1
// const myProm = new Promise((resolve, reject) => {
//   resolve('resolved');
// });

// console.log(myProm);

// 2. Simple Promise 2
// const janji = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const berhasil = false;
//     if (berhasil) {
//       resolve('Janji ditepati!'); // Operasi berhasil
//     } else {
//       const err = new Error('Janji dibatalkan!');
//       reject(err); // Operasi gagal
//     }
//   }, 2000);
// });
// console.log(janji);
// janji
//   .then((hasil) => {
//     console.log(hasil); // "Janji ditepati!"
//   })
//   .catch((alasan) => {
//     console.error(alasan); // "Janji dibatalkan!"
//   });

// 3. Mengubah callback hell menjadi promise
function bacaFilePromise(namaFile) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = undefined;
      if (!data) {
        const err = new Error('File Error!');
        reject(err);
      } else {
        console.log(`Data dari file ${namaFile} dibaca.`);
        resolve(data);
      }
    }, 1000);
  });
}

function prosesDataPromise(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const hasil = data.toUpperCase();
      console.log('Data diproses:', hasil);
      resolve(hasil);
    }, 1000);
  });
}

function tampilkanHasilPromise(hasil) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Hasil pemrosesan:', hasil);
      resolve();
    }, 1000);
  });
}

// // Memanggil fungsi-fungsi dengan Promise
// bacaFilePromise('data.txt')
//   .then(prosesDataPromise)
//   .then(tampilkanHasilPromise)
//   .then(() => {
//     console.log('Selesai dengan Promise!');
//   })
//   .catch((error) => {
//     console.error('Terjadi kesalahan:', error);
//   });
