const fs = require("fs")
const path = require("path")

const sourceFile = "data.txt"
const errorLog = "error.log"

function logError(message) {
  const log = new Date().toISOString() + " - " + message + "\n"
  fs.appendFile(errorLog, log, () => {})
}

try {
  if (!fs.existsSync(sourceFile)) {
    logError("Source file not found")
    console.log("Source file missing")
    return
  }

  const timestamp = new Date().toISOString().replace(/:/g, "-")
  const ext = path.extname(sourceFile)
  const name = path.basename(sourceFile, ext)
  const backupFile = name + "_" + timestamp + ext

  fs.copyFile(sourceFile, backupFile, (err) => {
    if (err) {
      logError("Backup failed: " + err.message)
      console.log("Backup failed")
    } else {
      console.log("Backup created:", backupFile)
    }
  })

} catch (error) {
  logError("Unexpected error: " + error.message)
}
