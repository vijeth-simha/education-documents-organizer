import express, { Express, Request, Response } from "express";
import "reflect-metadata";
import { hostname, port } from "./constants/constants";
require("dotenv").config();
import { AppDataSource } from "./db";
import {
  AuthRoutes,
  CategoryAPIRoutes,
  DocumentAPIRoutes,
  LessonAPIRoutes,
  SemesterAPIRoutes,
  SubjectAPIRoutes,
} from "./routes/api";
import {
  DashboardRoutes,
  CategoryPublicRoutes,
  LessonPublicRoutes,
  SubjectPublicRoutes,
  SemesterPublicRoutes,
} from "./routes/public";
import DocumentPublicRoutes from "./routes/public/document/document";

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
var env = process.env.NODE_ENV || 'development';

console.log(env);


// app.use(express.static(path.join(__dirname, "public")));
app.use('/static',express.static(path.join(__dirname, "public")));
if(env === "development") {
  app.use('/dynamic',express.static(path.join(__dirname, "dynamic")));
}else {
  app.use('/dynamic',express.static(path.join(__dirname, '..', "dynamic")));
}
// app.use(express.static(path.join(__dirname, "/dynamic")));

app.get("/", (req: Request, res: Response) => {
  // res.send("hello + TypeScript Server");
  res.render("pages/login");
});

app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/category", CategoryAPIRoutes);
app.use("/api/v1/semester", SemesterAPIRoutes);
app.use("/api/v1/subject", SubjectAPIRoutes);
app.use("/api/v1/lesson", LessonAPIRoutes);
app.use("/api/v1/document", DocumentAPIRoutes);

app.use("/dashboard", DashboardRoutes);
app.use("/categories", CategoryPublicRoutes);
app.use("/semesters", SemesterPublicRoutes);
app.use("/subjects", SubjectPublicRoutes);
app.use("/lessons", LessonPublicRoutes);
app.use("/documents", DocumentPublicRoutes);

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
