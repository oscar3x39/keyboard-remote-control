const express = require('express')
const robot = require('robotjs')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const os = require('os');

const networkInterfaces = os.networkInterfaces();

function getIp() {
  for (interfaces in networkInterfaces) {
    for (Index in networkInterfaces[interfaces]) {
      address = networkInterfaces[interfaces][Index]['address']
      if (/^192/.test(address)) {
        return address
      }
    }
  }
  return "0.0.0.0"
}

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

let lock = false;

app.use('/', express.static(path.join(__dirname, '../frontend/out')))

app.post('/api', (req, res) => {

  if (lock) {
    res.send({success: falase})
    return
  }

  lock = true;

  switch (req.body.func) {
    case "openUrl":
      robot.keyTap("l",["ctrl"])
      robot.typeString(req.body.url)
      break

    case "keyboard":
      robot.keyTap(req.body.key)
      console.log(req.body.key)
      break

    case "tab":
      robot.keyTap("tab", ["control"]);
      break

    case "close":
      robot.keyTap("w",["control"])
      break
    // case "switchUser":
    //   robot.keyTap("j", ["ctrl", "shift"])
    //   robot.typeString(`$("div.profile-icon").click()`)
    //   break
  }

  lock = false

  res.send({success: true})
})

app.listen(port, '0.0.0.0', () => {
  console.log(`listening on http://${getIp()}:${port}`)
})