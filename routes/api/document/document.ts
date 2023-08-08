import { Router } from "express";
import { FileType } from "../../../interfaces";
const { verifyAccessToken } = require("../../../helpers/JWTHelperUtils");
const documentController = require("../../../controllers/documentController");

const DocumentAPIRoutes = Router();

const multer  = require('multer')
const storage = multer.diskStorage({
  destination:(req:Request, file:File, cb:any)=>{
    cb(null, './public/img/category-images')
  },
  filename:function (req:Request, file:FileType, cb:any) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + "-" + file.originalname)
  }
})
const upload = multer({ storage:storage });


DocumentAPIRoutes.post(
  "/create-document",
  verifyAccessToken,
  upload.single("documentURL"),
  documentController.createDocument
);

// DocumentAPIRoutes.delete(
//   "/delete-category/:id",
//   verifyAccessToken,
//   documentController.deleteCategory
// );


export default DocumentAPIRoutes;