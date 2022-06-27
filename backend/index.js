const express = require('express')
const robot = require('robotjs')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const port = 3333

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

let lock = false;

app.post('/', (req, res) => {

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
      robot.keyTap("tab",["ctrl"])
      break

    case "close":
      robot.keyTap("tab",["ctrl"])
      break
    // case "switchUser":
    //   robot.keyTap("j", ["ctrl", "shift"])
    //   robot.typeString(`$("div.profile-icon").click()`)
    //   break
  }

  lock = false

  res.send({success: true})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})