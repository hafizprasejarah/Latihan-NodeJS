// console.log("hello hapis");
// const nama = "Hafiz Pratama";
// const cetakNama = (nama) => `Hi nama saya ${nama}`;
// console.log(cetakNama(nama));\\
// const perkenalan = require('./latihanNodeJs.js');


// console.log(perkenalan("Hafiz Pratama"));

import  os  from "os";

const FunctionArrow = () => {
    // return console.table(`jenis module os yang dipakai ${os}`); 
    console.info(os.platform());
    console.info(os.arch());
    console.table(os.cpus());
    console.info(os.uptime());
    console.info(os.totalmem());
    console.info(os.freemem());
    console.table(os.networkInterfaces());
}

await FunctionArrow();
