// function yang bisa langsung di pakai tanpa mengimport dari nodejs

// di dalam node js, terdapt library berupa variable atau function yang secara global bisa di akses dimana saja, tanpa harus melakukan import
// kita bisa melihat detail apa saja fitur yang terdapat secara global di halaman dokumentasinya

setTimeout(() => {
    console.info("Hello Globals");
}, 2000);

// global-demo.mjs
// Dipakai untuk bikin variabel global yang bisa diakses di mana saja
globalThis.Appname = "Latihan NodeJS";
console.log(globalThis.Appname); // Latihan NodeJS

// process-demo.mjs
console.log("Argumen CLI:", process.argv); // argumen saat jalankan node
console.log("Environment:", process.env.NODE_ENV); // misalnya: development
console.log("Versi Node:", process.version);

// keluar dari program
// process.exit(0);

// buffer-demo.mjs
// Dipakai untuk data biner (misalnya teks → byte array).
const buf = Buffer.from("Halo NodeJS", "utf-8");
console.log(buf);              // <Buffer 48 61 6c 6f 20 4e 6f 64 65 4a 53>
console.log(buf.toString());   // Halo NodeJS


// Jalan berulang setiap 1 detik
let count = 0;
const interval = setInterval(() => {
  console.log("setInterval ke-", ++count);
  if (count === 3) clearInterval(interval); // stop setelah 3x
}, 1000);

// Jalan segera setelah stack kosong
setImmediate(() => {
  console.log("setImmediate jalan lebih cepat");
});

// Jalan sebelum event loop berikutnya
queueMicrotask(() => {
  console.log("queueMicrotask jalan duluan");
});
