import { Request, Response, Router } from "express";

const CategoryRoutes = Router();

CategoryRoutes.get("/", (req: Request, res: Response) => {
  res.render("pages/dashboard");
});

// module.exports = router;
export default CategoryRoutes 