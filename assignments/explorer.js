const fs = require("fs")
const path = require("path")

const folderPath = __dirname

fs.readdir(folderPath, (err, items) => {
  if (err) {
    console.log("Error reading directory")
    return
  }

  items.forEach(item => {
    const itemPath = path.join(folderPath, item)

    fs.stat(itemPath, (err, stats) => {
      if (err) return

      if (stats.isFile()) {
        console.log("File:", item, "- Size:", stats.size, "bytes")
      } else {
        console.log("Folder:", item)
      }
    })
  })
})
