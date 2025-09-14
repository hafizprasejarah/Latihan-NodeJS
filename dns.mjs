
// DNS merupakan standard library yang biasa digunakan  untuk bekerja dengan DNS (Domain Name Server)


import dns from "dns/promises";

await dns.setServers(["1.1.1.1", "8.8.8.8"]);
const DNS = await dns.getServers();

console.info("dns yang sekarang", DNS);

const ip = await dns.lookup("youtube.com");

console.info(ip.address);
console.info(ip.family);

const lookupservice = await dns.lookupService(ip.address, 80);
console.info("lookupService", lookupservice);

const resolve1 = await dns.resolve("youtube.com", "A");
const resolve2 = await dns.resolve("youtube.com", "AAAA");
const resolve3 = await dns.resolve("youtube.com", "MX");

console.info("resolve", resolve1);
console.info("resolve", resolve2);
console.info("resolve", resolve3);


