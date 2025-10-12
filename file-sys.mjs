import { writeFile } from "fs";
import fs from "fs/promises";
import path from "path";

const pathFile = "index.mjs";
const buffer = await fs.readFile("file-sys.mjs");
const buffer2 = await fs.readFile("file-sys.mjs");



console.info(buffer.toString());
try {
    await fs.stat(pathFile);

    await fs.rm(pathFile);
} catch {
    await fs.writeFile(pathFile, buffer2);
}