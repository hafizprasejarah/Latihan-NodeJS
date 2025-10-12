// const buffer = Buffer.from("Hafiz Pratama Dr Devun","utf-8");

// console.info(buffer);
// console.info(buffer.toString());
// console.info(buffer.toString("hex"));
// console.info(buffer.toString("base64"));
// console.info(buffer.toString("base64url"));
// console.info(buffer.toString("ascii"));
// console.info(buffer.toString("utf-16le"));

// const bufferBase64 = Buffer.from("0Cq0YcF1j5QNl2DdG7i2csjjT7cXs%2B4yas1IFdZQoZmqjd4OVac2Qu362zJSFs%2BAR2Q0OVNmbWpWdHVjQXpCWVFGSEFPdXF0RWlDZm5ySDUrZXdtMHJZdzhBaFVHR2lycUhGVHROcWl2U21MdDFCREtLUmZhZlp5WEE3dCtHcXgvamUreUE9PQ%3D%3D","base64");
// console.info(bufferBase64.toString());

// try_decode.js
import { Buffer } from "buffer";

const raw = "0Cq0YcF1j5QNl2DdG7i2csjjT7cXs+4yas1IFdZQoZmqjd4OVac2Qu362zJSFs+AR2Q0OVNmbWpWdHVjQXpCWVFGSEFPdXF0RWlDZm5ySDUrZXdtMHJZdzhBaFVHR2lycUhGVHROcWl2U21MdDFCREtLUmZhZlp5WEE3dCtHcXgvamUreUE9PQ==";

function isMostlyPrintable(str, threshold = 0.85) {
  if (!str) return false;
  let printable = 0;
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    if (c >= 32 && c <= 126) printable++;
  }
  return printable / str.length >= threshold;
}

function findBase64Like(sub) {
  // cari substring yang cocok pola base64 (panjang>20, hanya base64 chars + =)
  const b64pattern = /[A-Za-z0-9+/=]{20,}/g;
  const matches = sub.match(b64pattern);
  return matches || [];
}

(async () => {
  let data = raw;
  console.log("Input (len):", data.length);

  // coba beberapa kali lapis base64
  for (let round = 1; round <= 6; round++) {
    try {
      const buf = Buffer.from(data, "base64");
      const asUtf8 = buf.toString("utf8");
      console.log(`\n== Round ${round} ==`);
      console.log("Decoded bytes length:", buf.length);
      console.log("Printable ratio (approx):", (() => {
        let printable = 0;
        for (let i=0;i<asUtf8.length;i++){
          const c = asUtf8.charCodeAt(i);
          if (c>=32 && c<=126) printable++;
        }
        return (asUtf8.length ? printable/asUtf8.length : 0).toFixed(3);
      })());
      console.log("Preview (first 200 chars):");
      console.log(asUtf8.slice(0,200));

      // cari 'http'
      if (asUtf8.includes("http")) {
        console.log("=> Found 'http' in decoded text!:");
        const idx = asUtf8.indexOf("http");
        console.log(asUtf8.slice(idx, idx + 300));
        break;
      }

      // cari substrings yang tampak base64 lagi
      const found = findBase64Like(asUtf8);
      if (found.length) {
        console.log("Found base64-like substrings:", found.slice(0,3));
        // coba gunakan substring pertama sebagai new data
        data = found[0];
        continue;
      }

      // kalau teks cukup printable, stop
      if (isMostlyPrintable(asUtf8, 0.6)) {
        console.log("Decoded looks mostly printable, stop here.");
        break;
      }

      // jika bukan, coba treat decoded bytes sebagai new 'data' base64 (masih)
      data = buf.toString("base64"); // keep trying with base64 rep
    } catch (e) {
      console.log("Stop decoding, not valid base64 at round", round);
      break;
    }
  }

  console.log("\nDone.");
})();
