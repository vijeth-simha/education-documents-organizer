import { Request, Response, Router } from "express";
import { AppDataSource } from "../../../db";
import { Category } from "../../../models";

const SubjectPublicRoutes = Router();

SubjectPublicRoutes.get("/",async (req: Request, res: Response) => {
  const categoryRepository = AppDataSource.getRepository(Category);
  const categories:Category[] = await categoryRepository.find();
  res.render("pages/category/subject-view",{categories});
});


SubjectPublicRoutes.get("/create-subject", (req: Request, res: Response) => {
  res.render("pages/category/create-category");
});


SubjectPublicRoutes.get("/edit-category/:id", (req: Request, res: Response) => {
  res.render("pages/category/edit-subject");
});


// module.exports = router;
export default SubjectPublicRoutes 