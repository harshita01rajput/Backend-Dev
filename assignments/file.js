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

const result = fs.readFileSync("./notes.txt", "utf-8");
console.log(result);

// trim() removes extra spaces and new lines
let words = result.trim().split(" ");
let count = words.length;

fs.writeFile("count.txt", "Word Count: " + count, function (error) {
  if (error) {
    console.log("Error");
  } else {
    console.log("Word count in count.txt");
  }
});
