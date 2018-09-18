const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");

//Database
const mongoose = require("mongoose");
const User = require("./models/User.js");
const Stats = require("./models/Stats.js");
mongoose.connect(
  "mongodb://vbakarian:passw0rd@ds159772.mlab.com:59772/forge-arena"
);
const db = mongoose.connection;

db.once("open", function() {
  console.log("Database Connection open");
}).on("error", console.error.bind(console, "connection error:"));

const app = express();

app.use(cors());

app.use(bodyParser.json());
const object = {
  name: "vako",
  age: 24
};

app.get("/getUsers", (req, res) => {
  User.find({}, function(err, document) {
    console.log(document);
    res.send(document);
  });
});

app.get('/getStats',(req,res) =>{
    Stats.find({},(err,document) =>{
        console.log(document)
        res.send(document)
    })
})

app.listen(5000, () => console.log("Listening on 5000"));
