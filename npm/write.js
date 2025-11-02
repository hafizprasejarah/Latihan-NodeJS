import fs from "fs";


export const writetofile = (file, content) =>{
    fs.writeFileSync(file,content);
};