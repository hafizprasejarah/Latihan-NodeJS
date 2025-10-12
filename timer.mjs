// Timer merupakan standard libarry untuk melakukan schedulling
// Function di timer terdapat di globals, sehingga kita bisa menggunakannya tanpa melakukan import,
// namun semua function Timer menggunakan callback
// jika kita ingin menggunakan timer versi Promise, kita bisa meng-import dari module timer/promiese

import timer from "timers";

setInterval(() => {
    console.info(`Start time at ${new Date()}`);
}, 1000);