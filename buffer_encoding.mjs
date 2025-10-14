const buffer = Buffer.from("Hafiz Pratama Dr Devun","utf-8");

console.info(buffer);
console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));
console.info(buffer.toString("base64url"));
console.info(buffer.toString("ascii"));
console.info(buffer.toString("utf-16le"));

const bufferBase64 = Buffer.from("0Cq0YcF1j5QNl2DdG7i2csjjT7cXs%2B4yas1IFdZQoZmqjd4OVac2Qu362zJSFs%2BAR2Q0OVNmbWpWdHVjQXpCWVFGSEFPdXF0RWlDZm5ySDUrZXdtMHJZdzhBaFVHR2lycUhGVHROcWl2U21MdDFCREtLUmZhZlp5WEE3dCtHcXgvamUreUE9PQ%3D%3D","base64");
console.info(bufferBase64.toString());
