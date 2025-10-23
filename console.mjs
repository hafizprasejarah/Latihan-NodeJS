// Console adalah standard library yang sudah serimg kita gunakan
// secara global, object console bisa kita gunakan tanpa harus melakukan import module, dan console
// melakukan print txt nya
// Namun jika kita juga bisa membuat object Console sendiri jika kita mau


import { Console } from "console";
import fs from "fs";


const logFile = fs.createWriteStream("application.log");

const log = new Console({
    stdout: logFile,
    stderr: logFile
});

log.info("Hello World");
log.error("ups");

const person = {
    firstname: "Hafiz",
    lastanem: "Pratama",
    hobby: "Watching Movies"
}
log.table(person);
