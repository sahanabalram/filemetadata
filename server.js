// Import the dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const app = module.exports = express();
const PORT = process.env.port || 3000;
app.use(bodyParser.json());
app.use(cors());


app.listen(PORT,function(){
    console.log("App is listening on: " + PORT);
});