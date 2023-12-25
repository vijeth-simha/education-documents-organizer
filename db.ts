import { DataSource } from "typeorm";
import { Category, Document, Lesson, Subject, User } from "./models";
import Semester from "./models/semester";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "^!Cky^0n0r",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [User, Category, Semester, Subject, Lesson, Document],
});
