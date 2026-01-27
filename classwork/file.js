// const fs = require("fs");   
// // file ko import karna

// fs.writeFileSync("./example","hello world");
// // const result =fs.readFileSync("./unknown.txt","utf-8");
// // console.log(result);

// fs.readFile("./unknown.txt" ,"utf-8", (err,result)=>{
//     if(err){
//         console.log("error reading files:", err);

//     }else{
//         console.log("file comtent:", result);

//     }
// });

// file system operations


// are of two types:
// 1. synchronous
// 2. asynchronous

// synchronous -> blocking
// asynchronous -> non-blocking

// const data=fs.readFileSync("./example","utf-8");
// console.log("file content:",data);

// const data=fs.readFile("./example","utf-8",(err,result)=>{
//     if(err){
//         console.log("error reading file:", err);
//     }else{
//         console.log("file content:", result);
//     }
// });
// const path=require('path');
// const filePath="/Users/admin/docs/report.pdf";
// console.log(path.basename(filePath));        



 const fs = require("fs");
// const promises = require("fs").promises;

// create file with synchronous method
//  fs.writeFileSync("./example.txt","this is sync file:welcome to gla");

// create file with asynchronous method
// const r = fs.writeFile("./file.txt","this is async file: welcome to gla",(err)=>{});


// read file with synchronous method
// const result=fs.readFileSync("./notes.txt","utf-8");
// console.log(result);

// read file with asynchronous method
// fs.readFile("./notes.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("error", err);                       
//     }else{
//         console.log(result);               
//     }
// });

// fs.appendFile("./file.txt",new Date(),get Date().toLoclString());
// fs.appendFileSync("./file.txt",`${Date.now()}hey harshita \n`);

// copy file
 fs.cpSync("./file.txt","./file_copy.txt");

// delete file
  fs.unlinkSync("./file_copy.txt");

 console.log(fs.statSync("./file.txt"));
 console.log(fs.statSync("./file.txt").isFile());

// fs.mkdirSync("./new_folder/folder 2/folder 3" ,{recursive:true});

// remove directory
// fs.rmdirSync("./new_folder");      

// fs.readdir("./", (err, files) => {
//     if (err) {
//         console.log("error", err);
//     } else {
//         console.log("files", files); 
//     }
// });


