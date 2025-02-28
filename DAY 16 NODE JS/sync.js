const fsPromises = require("node:fs/promises");

function myReadFile() {
console.log("--> Reading");
const ans = fsPromises.readFile("./dummy.txt", "utf-8");
print.then(()=>{
    console.log(ans);
}).catch{(err)=>{
    console.log("Error",err.message);
}}
};
myReadFile();
console.log("MIDDLE");
myReadFile();
console.log("END");


