import { Router } from "express";
import { FileType } from "../../../interfaces";
const { verifyAccessToken } = require("../../../helpers/JWTHelperUtils");
const subjectController = require("../../../controllers/subjectController");

const SubjectAPIRoutes = Router();

const multer  = require('multer')
const storage = multer.diskStorage({
  destination:(req:Request, file:File, cb:any)=>{
    cb(null, './public/img/subject-images')
  },
  filename:function (req:Request, file:FileType, cb:any) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + "-" + file.originalname)
  }
})
const upload = multer({ storage:storage });


SubjectAPIRoutes.post(
  "/create-subject",
  verifyAccessToken,
  upload.single("subjectPic"),
  subjectController.createSubject
);


SubjectAPIRoutes.get(
  "/get-all-subjects",
  verifyAccessToken,
  subjectController.getAllSubjects
);

SubjectAPIRoutes.put(
  "/edit-subject/:id",
  verifyAccessToken,
  upload.single("subjectPic"),
  subjectController.editSubject
);


// SubjectAPIRoutes.delete(
//   "/delete-subject/:id",
//   verifyAccessToken,
//   subjectController.deleteSubject
// );


export default SubjectAPIRoutes;