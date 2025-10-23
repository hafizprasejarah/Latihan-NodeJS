// zlib adalah standard library yang digunakan untuk melakukan kompresi menggunakan Gzip
import fs from "fs/promises";
import zlib from "zlib";

const source = await fs.readFile("zlib_compressor.mjs");
const result = zlib.gzipSync(source);

await fs.writeFile("zlib.mjs.txt", result);
