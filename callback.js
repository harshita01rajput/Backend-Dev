console.log("first")

function login(cb){
    setTimeout(() => {
       console.log("login")
       cb() 
    }, 2000);
}

function userdetails(cb){
    setTimeout(()=>{
    console.log("userdetails")
cb()
},1000)
}

function password(){
    setTimeout(()=>{
        console.log("password")
    }, 3000)
}

// callback hell

login (()=>{
    userdetails(()=>{
        password()
    })
})
console.log("END")
