import { Router } from "express";
import { FileType } from "../../../interfaces";
const { verifyAccessToken } = require("../../../helpers/JWTHelperUtils");
const categoryController = require("../../../controllers/categoryController");

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
  "/create-category",
  verifyAccessToken,
  upload.single("categoryPic"),
  categoryController.createCategory
);


DocumentAPIRoutes.get(
  "/get-all-categories",
  verifyAccessToken,
  categoryController.getAllCategories
);

// DocumentAPIRoutes.delete(
//   "/delete-category/:id",
//   verifyAccessToken,
//   categoryController.deleteCategory
// );


export default DocumentAPIRoutes;