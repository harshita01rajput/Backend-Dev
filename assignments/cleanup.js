const fs = require("fs")
const path = require("path")

const folderPath = path.join(__dirname, "files")
const now = Date.now()
const sevenDays = 7 * 24 * 60 * 60 * 1000

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.log("Error reading folder")
    return
  }

  files.forEach(file => {
    const filePath = path.join(folderPath, file)

    fs.stat(filePath, (err, stats) => {
      if (err) return

      if (now - stats.mtimeMs > sevenDays) {
        fs.unlink(filePath, () => {
          console.log("Deleted:", file)
        })
      }
    })
  })
})
