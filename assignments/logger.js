const os = require("os")
const fs = require("fs")

const info =
"Platform: " + os.platform() + "\n" +
"Architecture: " + os.arch() + "\n" +
"CPU Cores: " + os.cpus().length + "\n" +
"Total Memory: " + os.totalmem() + "\n" +
"Free Memory: " + os.freemem() + "\n" +
"Hostname: " + os.hostname()

fs.writeFile("systemInfo.txt", info, function (err) {
  if (err) {
    console.log("Error")
  } else {
    console.log("System information saved")
  }
})
