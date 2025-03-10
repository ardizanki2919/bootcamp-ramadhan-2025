// 1. Simple fetch example

fetch('https://api.github.com/users/sandhikagalih')
  .then((res) => res.json())
  .then((user) => {
    console.log(`Nama : ${user.name}`);
    console.log(`Jumlah Repo : ${user.public_repos}`);
  });
