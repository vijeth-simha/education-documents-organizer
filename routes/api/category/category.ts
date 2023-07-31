import { Router } from "express";
const { verifyAccessToken } = require("../../../helpers/JWTHelperUtils");
const categoryController = require("../../../controllers/categoryController");

const CategoryAPIRoutes = Router();

CategoryAPIRoutes.post(
  "/create-category",
  verifyAccessToken,
  categoryController.createCategory
);

export default CategoryAPIRoutes;