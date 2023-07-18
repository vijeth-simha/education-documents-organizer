import express, { Express, Request, Response } from "express";
import "reflect-metadata";
import { hostname, port } from "./constants/constants";

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
