// const http=require("http");
// const fs=require("fs");
// const { log } = require("console");
// const myServer=http.createServer((req,res)=>{
//     // console.log("new req rec");
//     // console.log(req);
// console.log=`${date.now()} new request rec.\n`;
// console.log(log,data);

// fs.appendFile("log.txt",log,(err,data)=>{
// switch(req.url){
//     case "/":
//         res.end("home page");
//         break;
//     case "/about":
//         res.end("about page");
//         break;
//     case "/contact":
//         res.end("contact page");
//         break;
//     default:
//         res.end("404 page not found");
//         break;
// }

// res.end("hello from server");    
// });
// });

// myServer.listen(8000,()=>console.log("server started"));


// http server nd response mei data bhi aana chiye log.txt file ke andr ...


const http=require("http");
const fs=require("fs");
// const { log } = require("console");
const myServer=http.createServer((req,res)=>{
    let responseText="";
    
    switch(req.url){
        case "/":
            responseText="home page";
            break;
            case "/about":
                responseText="about page";
                break;
                case "/contact":
                    responseText="contact page";
                    break;
                    default:
                        responseText="404 page not found";
                        break;
                    }
                    fs.appendFile("log.txt",log,(err)=>{
                        if(err){
                            console.log("error in logging");
                        }
                        res.end(responseText);
                    });
     
const log=`${Date.now()} |${req.url} | ${responseText}\n`;
// const log(log,data);

// switch(req.url){
    //     case "/":
    //         res.end("home page");
    //         break;
    //     case "/about":
    //         res.end("about page");
    //         break;
    //     case "/contact":
    //         res.end("contact page");
    //         break;
    //     default:
    //         res.end("404 page not found");
    //         break;
    // }
    
    responseText=("hello from server");    
});

myServer.listen(8000,()=>console.log("server started"));
