import { Request, Response, Router } from "express";
import { AppDataSource } from "../../../db";
import { Category, Semester } from "../../../models";
const SemesterPublicRoutes = Router();

SemesterPublicRoutes.get("/",async (req: Request, res: Response) => {
  const semesterRepository = AppDataSource.getRepository(Semester);
  const semestersList:Semester[] = await semesterRepository.find();
  res.render("pages/semester/semester-view",{semestersList});
});


SemesterPublicRoutes.get("/create-semester", async (req: Request, res: Response) => {
  const categoryRepository = AppDataSource.getRepository(Category);
  const categories:Category[] = await categoryRepository.find();
  res.render("pages/semester/create-semester",{categoriesList:categories});
});


SemesterPublicRoutes.get("/edit-semester/:id", (req: Request, res: Response) => {
  res.render("pages/semester/edit-semester");
});


// module.exports = router;
export default SemesterPublicRoutes 