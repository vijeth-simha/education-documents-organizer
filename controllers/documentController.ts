import { Request,Response } from "express";
import { STATUS_CODES } from "../constants/constants";
import { AppDataSource } from "../db";
import { MulterRequest } from "../interfaces";
import { Document } from "../models";

const createDocument = async (req: Request, res: Response) => {
    // const { filename } = (req as MulterRequest).file;
    const documentObject: Document = req.body;    
    const documentRepository = AppDataSource.getRepository(Document);
    documentObject.createdAt = new Date();
    documentObject.lessonId = documentObject.lesson;
    // documentObject.DocumentPic = filename;
    try {
      await documentRepository.save(documentObject);
      res.status(STATUS_CODES.success).send("Lesson for the subject created successfully");
    } catch (error) {
      console.log(error);
      res.status(STATUS_CODES.error).send("Internal Server Error");
    }
  };
  
  
  const deleteDocument = async (req: Request, res: Response) => {
    const lessonRepository = AppDataSource.getRepository(Document);
    const { id } = req.params;
    try {
      await lessonRepository.delete(Number(id));
      res.status(STATUS_CODES.success).send("Semester Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };


module.exports={
    createDocument,
    deleteDocument
}