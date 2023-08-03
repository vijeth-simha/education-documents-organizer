import { Request,Response } from "express";
import { STATUS_CODES } from "../constants/constants";
import { AppDataSource } from "../db";
import { MulterRequest } from "../interfaces";
import { Semester } from "../models";

const createSemeter = async (req: Request, res: Response) => {
    const { filename } = (req as MulterRequest).file;
    const semesterObject: Semester = req.body;
  
    const semesterRepository = AppDataSource.getRepository(Semester);
    semesterObject.createdAt = new Date();
    semesterObject.semesterPic = filename;
    try {
      await semesterRepository.save(semesterObject);
      res.status(STATUS_CODES.success).send("Semester created successfully");
    } catch (error) {
      console.log(error);
      res.status(STATUS_CODES.error).send("Internal Server Error");
    }
  };
  
  const getAllSemesters = async(req:Request,res:Response)=> {
    const semesterRepository = AppDataSource.getRepository(Semester);
    try {
      const semesters:Semester[] = await semesterRepository.find();
      res.status(STATUS_CODES.success).send(semesters);
    } catch (error) {    
      res.status(STATUS_CODES.error).send("Internal Server Error");
    }
  }
  
  
//   const deleteCategory = async (req: Request, res: Response) => {
//     const categoryRepository = AppDataSource.getRepository(Category);
//     const { id } = req.params;
//     try {
//       await categoryRepository.delete(Number(id));
//       res.status(STATUS_CODES.success).send("Category Deleted Successfully");
//     } catch (error) {
//       console.log(error);
//     }
//   };


module.exports={
    createSemeter,
    getAllSemesters
}