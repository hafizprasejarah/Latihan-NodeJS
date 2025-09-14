import path  from "path";

const filepath = "user/lenovo/hafiz.gg/numerouno"

const pathFunction = ()=>{
    console.info(path.sep);
    console.info(path.dirname(filepath));
    console.info(path.basename(filepath));
    console.info(path.extname(filepath));
    console.info(path.parse(filepath));
}

console.log(pathFunction());

