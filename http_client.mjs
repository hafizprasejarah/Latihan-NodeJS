// Node JS juga memiliki standard library untuk HTTP
//Salah satu fitur di module HTTP adalah Client, dimana kita bisa melakukan simulasi HTTP
//Request dengan menggunakan Node JS
//Terdapat 2 jenis module HTTP di Node JS, HTTP dan HTTPS


import https from "https";


const endpoint = "https://eoarwvf6t4shr87.m.pipedream.net";
const clientRequest = https.request(endpoint, {
    method:"POST",
    headers: {
        "Content-Type" : "aplications/json",
        "Accept" : "aplications/json",
    }
},(response)=>{
    response.addListener("data", (data)=>{
        console.info(`Receive data ${data.toString()}`);
    });
});

const body = JSON.stringify({
    firstname: "Hafiz",
    lastname: "Pratama"
});

clientRequest.write(body);  
clientRequest.end();