import { Request, Response, Router } from "express";
import { AppDataSource } from "../../../db";
import { Semester, Subject } from "../../../models";

const SubjectPublicRoutes = Router();

SubjectPublicRoutes.get("/", async (req: Request, res: Response) => {
  const subjectRepository = AppDataSource.getRepository(Subject);
  const subjectsList: Subject[] = await subjectRepository.find();
  res.render("pages/subject/subject-view", { subjectsList });
});

SubjectPublicRoutes.get("/create-subject", async (req: Request, res: Response) => {
  const semesterRepository = AppDataSource.getRepository(Semester);
  const semestersList:Semester[] = await semesterRepository.find();
  res.render("pages/subject/create-subject",{semestersList});
});

SubjectPublicRoutes.get("/edit-subject/:id", async (req: Request, res: Response) => {
  const {id} = req.params;
  const subjectRepository = AppDataSource.getRepository(Subject);
  const semesterRepository = AppDataSource.getRepository(Semester);
  const semestersList:Semester[] = await semesterRepository.find();

  const subject: Subject | null = await subjectRepository.findOneBy({
    id: Number(id),
  });
  res.render("pages/subject/edit-subject",{semestersList,subject});
});

// module.exports = router;
export default SubjectPublicRoutes;
