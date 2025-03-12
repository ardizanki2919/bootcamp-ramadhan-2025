// 1. Simple Async Await
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('nilai hasil promise ketika resolved');
//   }, 2000);
// });

// dengan promise biasa
// p.then(function (res) {
//   console.log(res);
// });

// dengan async await
// async function getResult() {
//   console.log(await p);
// }

// getResult();

// 2. Mengubah promise menjadi async await (1)
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

// async function handlePromise() {
//   try {
//     console.log(await janji);
//   } catch (e) {
//     console.error(e);
//   }
// }

// console.log(handlePromise());

// 3. Mengubah promise menjadi async await (2)
function bacaFilePromise(namaFile) {
  return new Promise((resolve, reject) => {
    if (!namaFile) {
      reject('file error');
    } else {
      setTimeout(() => {
        const data = 'Data dari file';
        console.log(`Data dari file ${namaFile} dibaca.`);
        resolve(data);
      }, 1000);
    }
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

const file = 'data.txt';
async function handleFileAsync(file) {
  try {
    const bacaFile = await bacaFilePromise(file);
    const prosesData = await prosesDataPromise(bacaFile);
    await tampilkanHasilPromise(prosesData);
    console.log('Selesai!');
  } catch (err) {
    console.error('Terjadi kesalahan:', err);
  }
}

handleFileAsync(file);

// async function handleFileAsync(file) {
//   try {
//     const bacaFile = await bacaFilePromise(file);
//     const prosesData = await prosesDataPromise(bacaFile);
//     await tampilkanHasilPromise(prosesData);
//     console.log('Selesai dengan Promise!');
//   } catch (e) {
//     console.error('Terjadi kesalahan:', e);
//   }
// }

// const file = 'data.txt';
// handleFileAsync(file);
