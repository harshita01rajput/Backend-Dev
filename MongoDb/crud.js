const express = require("express")
const mongoose = require("mongoose")

const app = express();
// Connect to mongoDB
mongoose.connect("mongodb://localhost:27017/blog")
.then(()=>console.log("Connected Successfully"))
.catch((err) => console.log(err));

// Create Schemma
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },

    lastName:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
        unique:true,
    },
    jobTitle:{
        type:String,
    },
    gender:{
        type:String,
    },
},
{timestamps:true}
);

// Schema model

const user = mongoose.model("User", userSchema);

app.use(express.json);

app.use(express.urlencoded({extended:false}));

app.get("/user", async(req, resp) => {
    const allDbUsers = await user.find({});
    const html = `
    <ul>
    ${allDbUsers.map((user) => `<li>${user.firstName} ${user.lastName}</li>`).join("")};
    </ul>`
    resp.send(html);
});

app.get("/api/users", async(req, resp) => {
    const allDbUsers = await user.find({})
    resp.json(allDbUsers);
});

app.post("/api/users", async(req, resp) => {
    const body = req.body;
    if(!body || !body.first_name || body.last_name || !body.email || !body.gender || !body.job_title){
        return resp.status(400).json({message : "All Fields are required"});
    }
    const result = await user.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    });
    console.log("Result: ", result);
    return resp.status(201).json({message: "User Created Successsfully", user:result});
});

app.patch("api/users/:id", async(req, resp) => {
    await user.findByIdAndUpdate(req.params.id, {lastName: "Changed"})
    return resp.json({msg: "User Updated SUccesfully"})
});

app.delete("/api/users/:id", (req, resp) => {
    await
})
app.listen(6000, () => {
    console.log("Server started on 6000");
});