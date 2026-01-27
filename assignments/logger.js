const fs = require("fs")

function logMessage(message) {
  const log = new Date().toISOString() + " - " + message + "\n"

  fs.appendFile("app.log", log, (err) => {
    if (err) {
      console.log("Error writing log")
    } else {
      console.log("Log saved")
    }
  })
}

logMessage("Application started")
logMessage("User logged in")
logMessage("Application closed")
