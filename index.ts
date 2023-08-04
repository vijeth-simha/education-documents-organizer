import express, { Express, Request, Response } from "express";
import "reflect-metadata";
import { hostname, port } from "./constants/constants";
require("dotenv").config();
import { AppDataSource } from "./db";
import { AuthRoutes, CategoryAPIRoutes, SemesterAPIRoutes } from "./routes/api";
import { DashboardRoutes,CategoryPublicRoutes } from "./routes/public";


const expressLayouts = require("express-ejs-layouts");
const cors = require("cors");
const path = require("path");

const app: Express = express();
app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));



app.get("/", (req: Request, res: Response) => {
  // res.send("hello + TypeScript Server");
  res.render("pages/login");
});


app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/category", CategoryAPIRoutes);
app.use("/api/v1/semester", SemesterAPIRoutes);


app.use("/dashboard", DashboardRoutes);
app.use("/category", CategoryPublicRoutes);


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
