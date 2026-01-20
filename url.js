const url=require("url");
const http=require("http");

const myServer=http.createServer((req,res)=>{
    const myUrl=url.parse(req.url,true);
    console.log( myUrl);
    
    switch(myUrl.pathname){
    case "/":
        res.end("home page");
        break;
    case "/about":
        // const qp= res.end("about page");
        const username=myUrl.query.myname;
        res.end(`hi,${username}`);
        break;
    default:
        res.end(" 404 page not found");
        break;
    }
});
 
myServer.listen(8000,()=>console.log("server started"));