import timers from "timers/promises";

console.info(new Date());
await timers.setTimeout(5000);
const name = await timers.setTimeout(5000,"hafiz");
console.info(new Date());
console.info(name);

for await (const startTime of timers.setInterval(1000, "tidak naruh")) {
    console.info(`Start time at ${new Date()}`);
}