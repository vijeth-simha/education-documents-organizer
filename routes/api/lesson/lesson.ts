import { Router } from "express";
import { FileType } from "../../../interfaces";
const { verifyAccessToken } = require("../../../helpers/JWTHelperUtils");
const lessonController = require("../../../controllers/lessonController");

const LessonAPIRoutes = Router();

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req: Request, file: File, cb: any) => {
    cb(null, "./public/img/lesson-images");
  },
  filename: function (req: Request, file: FileType, cb: any) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

LessonAPIRoutes.post(
  "/create-lesson",
  verifyAccessToken,
  upload.single("lessonPic"),
  lessonController.createLesson
);

LessonAPIRoutes.get(
  "/get-all-lessons",
  verifyAccessToken,
  lessonController.getAllLessons
);

export default LessonAPIRoutes;
