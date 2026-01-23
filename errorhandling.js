// common errors

// ENOENT=file not exist
// eacess=permission denied
// EISDIR=file expected folder not exist
// eexist=file already exist

// error handling with callback
const fs = require("fs");
// fs.readFile("./notes.txt","utf-8",(err,data)=>{
//     if(err){
//         if(err.code==="ENOENT"){
//             console.log("file does not exist");
//         }
//         return;     
//     }
//     console.log(data);
// });


// error handling with async/await
// const fsPromises = require("fs").promises;
// async function readFile(){
//     try{
//         const data=await fsPromises.readFile("./notes.txt","utf-8");
//         console.log(data);
//     }catch(err){
//         console.log("error", err);
//     }
// }


// stream error handling
const readStream=fs.createReadStream("./notes.txt");
const writeStream=fs.createWriteStream("./source.txt");

readStream.on("error",(err)=>{
    console.log("read error:", err);
    readStream.destroy();
});

writeStream.on("error",(err)=>{
    console.log("write error:", err);
    writeStream.destroy();
});