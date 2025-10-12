// Stream adalah standard untuk kontrak aliran data di Node js
// ada banyak sekali Stream object di Node JS
// Stream bisa jadi object yang bisa di tulis, dan Stream adalah turunan dari Event Emitter

import fs from "fs";

const writer = fs.createWriteStream("target.log");


writer.write("Hafiz\n");
writer.write("Pratama\n");
writer.write("Pratama\n");
writer.write("Hafiz Pratama White Knight");
writer.end;


const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    console.info(data.toString());
    
});


