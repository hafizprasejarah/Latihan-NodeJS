// Util adalah standard library yang berisikan utility-utility yang bisa kita gunakan untuk mempermudah
// pembuatan kode program di Node JS
 
import util from "util";


const firstname = "Hafiz";
const lastname = "Pratama";
console.info(`Hello ${firstname} ${lastname}`);

// cara lama
console.info(util.format("Hello %s",firstname,lastname));

const person = {
    firstname: "Hafiz",
    lastname: "Pratama",
};

console.info(`Person:  ${JSON.stringify(person)}`);
console.info(util.format("Person: %j",person));

