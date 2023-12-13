import { Request, Response, Router } from "express";
import { AppDataSource } from "../../../db";
import { Lesson, Subject } from "../../../models";
const LessonPublicRoutes = Router();

LessonPublicRoutes.get("/",async (req: Request, res: Response) => {
  const lessonRepository = AppDataSource.getRepository(Lesson);
  const lessonsList:Lesson[] = await lessonRepository.find();
  res.render("pages/lesson/lesson-view",{lessonsList});
});


LessonPublicRoutes.get("/create-lesson", async (req: Request, res: Response) => {
  const subjectRepository = AppDataSource.getRepository(Subject);
  const subjectsList: Subject[] = await subjectRepository.find();
  res.render("pages/lesson/create-lesson",{subjectsList});
});


LessonPublicRoutes.get("/edit-semester/:id", (req: Request, res: Response) => {
  res.render("pages/category/edit-subject");
});


// module.exports = router;
export default LessonPublicRoutes 