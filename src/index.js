
// SERVIDOR BÁSICO CON EXPRESS

// define the modules to use and stores them in constants

const express = require("express");
const app = express();
const path = require("path");

// settings


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// routers


app.use(require("./routes/index"));
app.use(express.static(__dirname + "/public"));



const server = app.listen(3000, ()=> console.log("server on port 3000"));


