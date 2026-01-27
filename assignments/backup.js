const fs = require("fs")
const path = require("path")

const sourceFile = "data.txt"

const timestamp = new Date().toISOString().replace(/:/g, "-")
const ext = path.extname(sourceFile)
const name = path.basename(sourceFile, ext)

const backupFile = name + "_" + timestamp + ext

fs.copyFile(sourceFile, backupFile, (err) => {
  if (err) {
    console.log("Backup failed")
  } else {
    console.log("Backup created:", backupFile)
  }
})
