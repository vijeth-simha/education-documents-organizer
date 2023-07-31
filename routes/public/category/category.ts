import { Request, Response, Router } from "express";

const CategoryRoutes = Router();

CategoryRoutes.get("/", (req: Request, res: Response) => {
  res.render("pages/category/category-view");
});


CategoryRoutes.get("/create-category", (req: Request, res: Response) => {
  res.render("pages/category/create-category");
});


CategoryRoutes.get("/edit-category/:id", (req: Request, res: Response) => {
  res.render("pages/category/edit-category");
});


// module.exports = router;
export default CategoryRoutes 