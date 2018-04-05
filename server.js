// Import the dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());