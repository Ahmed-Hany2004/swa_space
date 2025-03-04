const express = require("express");
const morgan = require("morgan");
var cors = require('cors');
const bodyparser = require("body-parser");
const { main} = require("./connection");


const app = express();


app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use(cors())



const userpath = require("./routes/user")

app.use("/user",userpath)

main(app);