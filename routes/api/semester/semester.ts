import { Router } from "express";
import { FileType } from "../../../interfaces";
const { verifyAccessToken } = require("../../../helpers/JWTHelperUtils");
const semesterController = require("../../../controllers/semesterController");

const SemesterAPIRoutes = Router();

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req: Request, file: File, cb: any) => {
    cb(null, "./public/img/semester-images");
  },
  filename: function (req: Request, file: FileType, cb: any) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

SemesterAPIRoutes.post(
  "/create-semester",
  verifyAccessToken,
  upload.single("semesterPic"),
  semesterController.createSemester
);

SemesterAPIRoutes.get(
  "/get-all-semesters",
  verifyAccessToken,
  semesterController.getAllSemesters
);

SemesterAPIRoutes.put(
  "/edit-semester/:id",
  verifyAccessToken,
  upload.single("semesterPic"),
  semesterController.editSemester
);

export default SemesterAPIRoutes;
