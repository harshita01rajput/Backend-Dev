// const path=require('path');
// const filePath="/Users/admin/docs/report.pdf";
// console.log(path.basename(filePath)); 

const path = require("path");

console.log("file name:", path.basename(__filename));
console.log("folder name:", path.dirname(__filename));
console.log("extension:", path.extname(__filename));

const fullPath = path.join(__dirname, "public", "index.html");
console.log("full path:", fullPath);
