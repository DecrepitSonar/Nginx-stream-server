const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false }))

app.set("port", 8080)
app.get('/', (req,res ) => {
  res.send("Application")
})

app.listen(app.get("port"), () => {
  console.log( "app listening on port 8080")
})
