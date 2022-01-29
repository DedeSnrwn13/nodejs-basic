// const fs = require("fs");

// fs.copyFileSync("text.txt", "text2.txt");

// console.log("Berhasil dicopy");

// const hero = require("superheroes");

// for (let index = 0; index < 10; index++) {
//   console.log(hero.random());
// }

const op = require("./module");

const modulePenjumlahan = op.tambah(10, 5);
const modulePerkalian = op.kali(10, 5);
const moduleTitle = op.title;

console.log(moduleTitle);
console.log(modulePenjumlahan);
console.log(modulePerkalian);
