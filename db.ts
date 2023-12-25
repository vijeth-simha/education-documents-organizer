import { DataSource } from "typeorm";
import { Category, Document, Lesson, Subject, User } from "./models";
import Semester from "./models/semester";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "u7?7@zU?f/r-.GA",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [User, Category, Semester, Subject, Lesson, Document],
});
