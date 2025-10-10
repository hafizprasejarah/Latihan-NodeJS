// Buffer merupakan object yang berisikan urutan byte dengan  panjang tetap.
// Buffer merupakan turunan dari tipe data Uint8Array

const buffer = Buffer.from("Hafiz Pratama Dr Devun");
console.info(buffer);
console.info(buffer.toString());

buffer.reverse();
console.info(buffer.toString());