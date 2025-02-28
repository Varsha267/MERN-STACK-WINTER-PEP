const fsPromises = require("node:fs/promises");

function myReadFile() {
console.log("--> Reading");
try{
const ans = fsPromises.readFile("./dummy.txt", "utf-8");
console.log("ans");
}catch{
    console.log("Error",err.message);
}}

myReadFile();
console.log("MIDDLE");
myReadFile();
console.log("END");