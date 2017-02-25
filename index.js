var exec = require('child_process').exec

module.exports = function (cmd) {
  new Promise(function (resolve, reject) {
    exec(cmd, function (err, stdout, stderr) {
      if (err) return reject(err)
      resolve(stdout || stderr)
    })
  })
}