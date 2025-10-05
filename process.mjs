// process merupakan standard library yang digunakan untuk mendapatkan informasi proses Node.JS yang sedang berjalan
// process juga merupakan instance dari eventEmmiter, sehingga kita bisa menambahkan listener kedalam process

import process from "process";

process.addListener("exit", (exitCode)=>{
    console.info(`Node.JS exit with code  ${exitCode}`);
});

console.info(process.version);
console.info(process.argv);
console.info(process.report);

process.exit(1);
console.info(process.env);