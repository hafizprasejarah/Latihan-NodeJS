// Readline merupakan standard library yang digunakan utk membaca input
import readline from "readline";
import process from "process";

const input = readline.createInterface({
    input: process.stdin,
    output:process.stdout
 });

 input.question("Siapa Nama Anda ? ", (nama) => {
    console.info(`hello ${nama}`);
    input.close;
 });