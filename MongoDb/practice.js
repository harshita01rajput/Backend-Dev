const mongoose = require("mongoose");
// Create Schema

const connection = mongoose.connect("mongodb://localhost:27017/student")
.then(()=> {
    console.log("Connection SUccess")
}).catch((err) => {
    console.log(err)
})
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    age:{
        type:Number,
        required: true,
        min:[18, "Age must be greater than or equal to 18"]
    },
    email:{
        type:String
    }
});

// Create Model
const student = mongoose.model("Student", studentSchema);