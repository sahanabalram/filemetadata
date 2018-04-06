// Import the dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const app = module.exports = express();
const PORT = process.env.port || 3000;
const upload = multer({dest: "uploads/"});
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + "/public"));
app.post("/upload",upload.single("file"),function(req,res,next){
    return res.json(req.file);
});
app.listen(PORT,function(){
    console.log("App is listening on: " + PORT);
});