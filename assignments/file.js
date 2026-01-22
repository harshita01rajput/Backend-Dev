// const fs = require("fs");
// const result=fs.readFileSync("./notes.txt","utf-8");
// console.log(result);

// let words = result.split(" ");
// let count=words.length;

// fs.writeFile("count.txt", "Word Count: " + count, function (error) {
//     if (error) {
//       console.log("Error");
//     } else {
//       console.log("Word count in count.txt");
//     }
// });
 

const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "notes.txt");
const result = fs.readFileSync(filePath, "utf-8");
console.log(result);

let words = result.trim().split(" ");
let count = words.length;

fs.writeFile("count.txt", "Word Count: " + count, function (error) {
  if (error) {
    console.log("Error");
  } else {
    console.log("Word count in count.txt");
  }
});

