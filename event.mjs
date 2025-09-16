// Events adalah standard library di NodeJS yang bisa digunakan sebagai implementasi Event Listener
// Di dalam Events terdapat sebuah class bernama EventEmitter yang bisa digunakan untuk menampung data listener per jenis event
// Lalu kita bisa melakukan emmit untuk mentrigger jenis event dan mengirim data ke event tersebut
import { EventEmitter } from "events";

const emmiter = new EventEmitter();

emmiter.addListener("hello", (name)=>{
    console.info(`Hello ${name}`);
});

emmiter.addListener("hello", (name)=>{
    console.info(`Hello ${name}`);
});

emmiter.emit("hello","Hafiz");