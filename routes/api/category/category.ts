import { Router } from "express";
const { verifyAccessToken } = require("../../../helpers/JWTHelperUtils");
const categoryController = require("../../../controllers/categoryController");

const CategoryRoutes = Router();

CategoryRoutes.post(
  "/create-category",
  verifyAccessToken,
  categoryController.createCategory
);
