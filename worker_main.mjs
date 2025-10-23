// Worker Threads adalah standard library yang bisa kita gunakan untuk menggunakan thread ketika mengeksekusi
// Javascript secara pararel
// Worker Threads sangat cocok ketika kita membuat kode program yang butuh jalan secara paralel,
// dan biasanya kasusnya adalah ketika kode program kita membutuhkan proses yang CPU intensive
// Seperti misalnya enkripsi dan kompresi
// Cara kerja Worker Threads mirip dengan Web Worker di JavaScript Web API

import { threadId, Worker } from "worker_threads";

const worker1 = new Worker("./worker.mjs");
const worker2 = new Worker("./worker.mjs");

worker1.addListener("message", (message)=>{
    console.info(`Threads-${threadId} receive from worker 1 : ${message}`);
});


worker2.addListener("message", (message)=>{
    console.info(`Threads-${threadId} receive from worker 1 : ${message}`);
});

worker1.postMessage(10);
worker2.postMessage(10);