import { Request, Response, Router } from "express";
import { AppDataSource } from "../../../db";
import { Semester } from "../../../models";
const SemesterPublicRoutes = Router();

SemesterPublicRoutes.get("/",async (req: Request, res: Response) => {
  const categoryRepository = AppDataSource.getRepository(Semester);
  const semestersList:Semester[] = await categoryRepository.find();
  res.render("pages/category/semester-view",{semestersList});
});


SemesterPublicRoutes.get("/create-semester", (req: Request, res: Response) => {
  res.render("pages/category/create-semester");
});


SemesterPublicRoutes.get("/edit-semester/:id", (req: Request, res: Response) => {
  res.render("pages/category/edit-subject");
});


// module.exports = router;
export default SemesterPublicRoutes 