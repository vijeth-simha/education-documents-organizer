import { Request, Response, Router } from "express";

const DashboardRoutes = Router();

DashboardRoutes.get("/dashboard", (req: Request, res: Response) => {
  res.render("pages/dashboard");
});

// module.exports = router;
export default DashboardRoutes 