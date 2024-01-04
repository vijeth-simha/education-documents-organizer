import { Request, Response, Router } from "express";
import { AppDataSource } from "../../../db";
import { Category, Semester } from "../../../models";
const SemesterPublicRoutes = Router();

SemesterPublicRoutes.get("/", async (req: Request, res: Response) => {
  const semesterRepository = AppDataSource.getRepository(Semester);
  const semestersList: Semester[] = await semesterRepository.find();
  res.render("pages/semester/semester-view", { semestersList });
});

SemesterPublicRoutes.get(
  "/create-semester",
  async (req: Request, res: Response) => {
    const categoryRepository = AppDataSource.getRepository(Category);
    const categories: Category[] = await categoryRepository.find();
    res.render("pages/semester/create-semester", {
      categoriesList: categories,
    });
  }
);

SemesterPublicRoutes.get(
  "/edit-semester/:id",
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const categoryRepository = AppDataSource.getRepository(Category);
    const semesterRepository = AppDataSource.getRepository(Semester);
    const categories: Category[] = await categoryRepository.find();
    const semester: Semester | null = await semesterRepository.findOneBy({
      id: Number(id),
    });
    res.render("pages/semester/edit-semester", {semester, categoriesList: categories });
  }
);

// module.exports = router;
export default SemesterPublicRoutes;
