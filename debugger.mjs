// materi dasar
// breakpoint, yaitu lokasi dimana kita ingin menghentikan program sementara
// menjalankan mode debug harus mengetikkan perintah  "node inspect namafile.mjs"

// perintah - perintah debugger

// cont, c: Continue Execution
// next, n: Step next
// step, s: Step in
// out, o: Step out
// pause: Pause running code

// contoh 1
function sayHello(name) {
    debugger; //ini adalah breakpoint
    return `Hello ${name}`;
}

const firstname = "devunn";
debugger
console.log(sayHello(firstname));