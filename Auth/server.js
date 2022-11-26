const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.set("Port", 8000)
app.use(bodyParser())
app.post("/auth", (req,res) => {
  console.log( req.body.name)

  let key = req.body.name

  if( key === "streamKey"){
    res.status(200).send()
    return
  }

  res.status(401).send()

})

app.listen(app.get("Port", ), () => {
  console.log( "app started on port 8000")
})
