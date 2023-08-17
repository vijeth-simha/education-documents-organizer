import { Request, Response, Router } from "express";
import { AppDataSource } from "../../../db";
import { Subject } from "../../../models";

const SubjectPublicRoutes = Router();

SubjectPublicRoutes.get("/", async (req: Request, res: Response) => {
  const subjectRepository = AppDataSource.getRepository(Subject);
  const subjectsList: Subject[] = await subjectRepository.find();
  res.render("pages/subject/subject-view", { subjectsList });
});

SubjectPublicRoutes.get("/create-subject", (req: Request, res: Response) => {
  res.render("pages/subject/create-subject");
});

SubjectPublicRoutes.get("/edit-subject/:id", (req: Request, res: Response) => {
  res.render("pages/subject/edit-subject");
});

// module.exports = router;
export default SubjectPublicRoutes;
