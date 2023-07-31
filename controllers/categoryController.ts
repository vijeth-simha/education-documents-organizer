import { Request, Response } from "express";
import { Category } from "../models";
import { AppDataSource } from "../db";
import { STATUS_CODES } from "../constants/constants";

const createCategory = async (req: Request, res: Response) => {
  const categoryObject: Category = req.body;

  const categoryRepository = AppDataSource.getRepository(Category);
  categoryObject.createdAt = new Date();

  try {
    await categoryRepository.save(categoryObject);
    res.status(STATUS_CODES.success).send("Category created successfully");
  } catch (error) {
    res.status(STATUS_CODES.error).send("Internal Server Error");
  }
};

module.exports = {
  createCategory,
};
