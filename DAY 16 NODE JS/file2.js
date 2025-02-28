const fs = require("node:fs");
console.log("--start--");
function myReadFile() {
console.log("\n------- Reading File ---------");
const ans = fs.readFileSync("./dummy.txt", "utf-8");
console.log("--> File Reading done:", ans);
console.log("---\n");
}

myReadFile();
console.log("end");