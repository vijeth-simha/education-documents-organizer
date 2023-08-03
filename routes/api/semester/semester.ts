import { Router } from "express";
import { FileType } from "../../../interfaces";
const { verifyAccessToken } = require("../../../helpers/JWTHelperUtils");
const semesterController = require("../../../controllers/semesterController");

const CategoryAPIRoutes = Router();

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req: Request, file: File, cb: any) => {
    cb(null, "./public/img/category-images");
  },
  filename: function (req: Request, file: FileType, cb: any) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

CategoryAPIRoutes.post(
  "/create-semester",
  verifyAccessToken,
  upload.single("semesterPicsemesterPic"),
  semesterController.createSemester
);

export default CategoryAPIRoutes;
