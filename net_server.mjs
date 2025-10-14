// Net merupakan standard library yang bisa digunakan untuk membuat network client dan server berbasis TCP
// Net Server dan Client merupakan  Object Stream. sehingga kita bisa baca datanya, tulis datanya dan juga menambahkan listener

import net from "net";

const server = net.createServer((Client) => {
    console.info("Client Connected");
    Client.addListener("data", (data) => {
        console.info(`Receive Data ${data.toString()}`);
        Client.write(`Hello ${data.toString()}\r\n`);
    });
});

server.listen(3000, "localhost"); //port dan server