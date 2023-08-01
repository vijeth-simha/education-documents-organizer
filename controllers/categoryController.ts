import { Request, Response } from "express";
import { Category } from "../models";
import { AppDataSource } from "../db";
import { STATUS_CODES } from "../constants/constants";
import { MulterRequest } from "../interfaces";

const createCategory = async (req: Request, res: Response) => {
  const { filename } = (req as MulterRequest).file;
  const categoryObject: Category = req.body;

  const categoryRepository = AppDataSource.getRepository(Category);
  categoryObject.createdAt = new Date();
  categoryObject.categoryPic = filename;
  try {
    await categoryRepository.save(categoryObject);
    res.status(STATUS_CODES.success).send("Category created successfully");
  } catch (error) {
    console.log(error);
    res.status(STATUS_CODES.error).send("Internal Server Error");
  }
};

const getAllCategories = async(req:Request,res:Response)=> {
  const categoryRepository = AppDataSource.getRepository(Category);
  try {
    const categories:Category[] = await categoryRepository.find();
    res.status(STATUS_CODES.success).send(categories);
  } catch (error) {    
    res.status(STATUS_CODES.error).send("Internal Server Error");
  }
}

module.exports = {
  createCategory,
  getAllCategories
};
