//Report merupakan fitur yang terdapat di NodeJS untuk membuat laporan secara otomatis dalam file ketika 
//terjadi sesuatu pada aplikasi Node JS kita

import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = true;
process.report.filename = "report.json";

const sampleError = () => {
    throw new Error("ups");
};

sampleError();
