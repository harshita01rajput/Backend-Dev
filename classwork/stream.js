// read stream
    // const fs=require("fs");
    // const readStream=fs.createReadStream("./notes.txt",{
    //     encoding:"utf-8",
    //     highWaterMark: 64*1024
    // });

    // readStream.on("data",(chunk)=>{
    //     console.log(" chunk received:",chunk.length);
    // });

    // readStream.on("end",()=>{
    //     console.log(" file read completed");
    // });


// write stream

    // const fs=require("fs");
    // const writeStream=fs.createWriteStream("./sample.txt");
    // writeStream.write(" hello harshita \n");
    // writeStream.write(" how r u \n");
    // writeStream.end();


// Transform Stream
//     const fs=require("fs");
//     const {Transform}=require("stream");
//     const upperCaseTransform= new Transform({
//         transform(chunk,encoding,callback){
//              const modification =chunk.toString().toUpperCase();
//              this.push(modification);
//             callback();
//         }
//     });

// pipe flow
fs.createReadStream("./notes.txt")
.pipe(upperCaseTransform)
.pipe(fs.createWriteStream("./example.txt"));