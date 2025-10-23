// Standard library HTTP juga tidak hanya bisa digunakan untuk membuat HTTP Client, tapi juga bisa
// digunakan untuk membuat HTTP Server
// untuk kasus sederhana, cocok sekali jika ingin membuat HTTP server menggunakan standard library NodeJS,
// namun untuk kasus yang lebih kompleks, direkomendasikan menggunakan library atau framework yang lebih mudah penggunaanya

import http from "http";

const server = http.createServer((request, response) => {
    console.info(request.method);
    console.info(request.url);

    if (request.method === "POST") {
        request.addListener("data", (data) => {
            response.setHeader("Content-Type", "application/json");
            response.write(data);
            response.end();
        });
    } else {
        if (request.url === "/hafiz") {
            response.write(`Hello Hafiz`);
        } else {
            response.write("Hello http server");
        }
        response.end();
    }


});

server.listen(9000);