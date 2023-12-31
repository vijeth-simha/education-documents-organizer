import { DataSource } from "typeorm";
import { Category, Document, Lesson, Subject, User } from "./models";
import Semester from "./models/semester";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: [User, Category, Semester, Subject, Lesson, Document],
});
