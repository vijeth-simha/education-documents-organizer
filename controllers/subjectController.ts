import { Request,Response } from "express";
import { STATUS_CODES } from "../constants/constants";
import { AppDataSource } from "../db";
import { MulterRequest } from "../interfaces";
import { Subject } from "../models";

const createSubject = async (req: Request, res: Response) => {
    // const { filename } = (req as MulterRequest).file;
    const subjectObject: Subject = req.body;
  
    const subjectRepository = AppDataSource.getRepository(Subject);
    subjectObject.createdAt = new Date();
    // subjectObject.subjectPic = filename;
    try {
      await subjectRepository.save(subjectObject);
      res.status(STATUS_CODES.success).send("Semester created successfully");
    } catch (error) {
      console.log(error);
      res.status(STATUS_CODES.error).send("Internal Server Error");
    }
  };
  
//   const getAllSemesters = async(req:Request,res:Response)=> {
//     const subjectRepository = AppDataSource.getRepository(Semester);
//     try {
//       const semesters:Semester[] = await subjectRepository.find();
//       res.status(STATUS_CODES.success).send(semesters);
//     } catch (error) {    
//       res.status(STATUS_CODES.error).send("Internal Server Error");
//     }
//   }
  
  
//   const deleteSemester = async (req: Request, res: Response) => {
//     const subjectRepository = AppDataSource.getRepository(Semester);
//     const { id } = req.params;
//     try {
//       await subjectRepository.delete(Number(id));
//       res.status(STATUS_CODES.success).send("Semester Deleted Successfully");
//     } catch (error) {
//       console.log(error);
//     }
//   };


module.exports={
    createSubject,
    // getAllSemesters,
    // deleteSemester
}