const fs = require("fs")

const data = fs.readFileSync("answer1.json", "utf-8")
const obj = JSON.parse(data)

console.log(obj)
