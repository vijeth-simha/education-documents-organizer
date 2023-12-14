import { Request, Response, Router } from "express";
import { AppDataSource } from "../../../db";
import { Document, Lesson } from "../../../models";
const DocumentPublicRoutes = Router();

DocumentPublicRoutes.get("/",async (req: Request, res: Response) => {
  const docuementRepository = AppDataSource.getRepository(Document);
  const documentsList:Document[] = await docuementRepository.find();
  res.render("pages/documents/documents-view",{documentsList});
});


DocumentPublicRoutes.get("/add-documents", async (req: Request, res: Response) => {
  const lessonRepository = AppDataSource.getRepository(Lesson);
  const lessonList: Lesson[] = await lessonRepository.find();
  res.render("pages/documents/add-document",{lessonList});
});


DocumentPublicRoutes.get("/edit-document/:id", (req: Request, res: Response) => {
  res.render("pages/category/edit-subject");
});


// module.exports = router;
export default DocumentPublicRoutes 