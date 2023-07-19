import express, { Express } from "express";
import "reflect-metadata";
import { hostname, port } from "./constants/constants";
require('dotenv').config();
import { AppDataSource } from "./db";


var expressLayouts = require("express-ejs-layouts");
const path = require("path");
var cors = require("cors");

const app: Express = express();
app.use(express.json());

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(expressLayouts);

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const initiate = () => {
  AppDataSource.initialize()
    .then(() => {
      // here you can start to work with your database
      console.log("connection successfull");
    })
    .catch((error) => console.log(error));
};
initiate();
