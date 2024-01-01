import { Request, Response, Router } from "express";
import { AppDataSource } from "../../../db";
import { Category } from "../../../models";

const CategoryPublicRoutes = Router();

CategoryPublicRoutes.get("/", async (req: Request, res: Response) => {
  const categoryRepository = AppDataSource.getRepository(Category);
  const categories: Category[] = await categoryRepository.find();
  res.render("pages/category/category-view", { categories });
});

CategoryPublicRoutes.get("/create-category", (req: Request, res: Response) => {
  res.render("pages/category/create-category");
});

CategoryPublicRoutes.get(
  "/edit-category/:id",
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const categoryRepository = await AppDataSource.getRepository(Category);
    const category: Category | null = await categoryRepository.findOneBy({
      id: Number(id),
    });
    res.render("pages/category/edit-category",{category});
  }
);

// module.exports = router;
export default CategoryPublicRoutes;
