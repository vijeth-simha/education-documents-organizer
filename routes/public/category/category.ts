import { Request, Response, Router } from "express";

const CategoryPublicRoutes = Router();

CategoryPublicRoutes.get("/", (req: Request, res: Response) => {
  res.render("pages/category/category-view");
});


CategoryPublicRoutes.get("/create-category", (req: Request, res: Response) => {
  res.render("pages/category/create-category");
});


CategoryPublicRoutes.get("/edit-category/:id", (req: Request, res: Response) => {
  res.render("pages/category/edit-category");
});


// module.exports = router;
export default CategoryPublicRoutes 