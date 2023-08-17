import { Request, Response, Router } from "express";
import { AppDataSource } from "../../../db";
import { Semester } from "../../../models";
const SemesterPublicRoutes = Router();

SemesterPublicRoutes.get("/",async (req: Request, res: Response) => {
  const semesterRepository = AppDataSource.getRepository(Semester);
  const semestersList:Semester[] = await semesterRepository.find();
  res.render("pages/semester/semester-view",{semestersList});
});


SemesterPublicRoutes.get("/create-semester", (req: Request, res: Response) => {
  res.render("pages/semester/create-semester");
});


SemesterPublicRoutes.get("/edit-semester/:id", (req: Request, res: Response) => {
  res.render("pages/semester/edit-subject");
});


// module.exports = router;
export default SemesterPublicRoutes 