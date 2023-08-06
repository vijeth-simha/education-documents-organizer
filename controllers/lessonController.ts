import { Request,Response } from "express";
import { STATUS_CODES } from "../constants/constants";
import { AppDataSource } from "../db";
import { MulterRequest } from "../interfaces";
import { Lesson } from "../models";

const createLesson = async (req: Request, res: Response) => {
    // const { filename } = (req as MulterRequest).file;
    const lessonObject: Lesson = req.body;
  
    const lessonRepository = AppDataSource.getRepository(Lesson);
    lessonObject.createdAt = new Date();
    // lessonObject.subjectPic = filename;
    try {
      await lessonRepository.save(lessonObject);
      res.status(STATUS_CODES.success).send("Lesson for the subject created successfully");
    } catch (error) {
      console.log(error);
      res.status(STATUS_CODES.error).send("Internal Server Error");
    }
  };
  
//   const getAllLesson = async(req:Request,res:Response)=> {
//     const lessonRepository = AppDataSource.getRepository(Lesson);
//     try {
//       const lesson:Lesson[] = await lessonRepository.find();
//       res.status(STATUS_CODES.success).send(Lesson);
//     } catch (error) {    
//       res.status(STATUS_CODES.error).send("Internal Server Error");
//     }
//   }
  
  
  const deleteSemester = async (req: Request, res: Response) => {
    const subjectRepository = AppDataSource.getRepository(Lesson);
    const { id } = req.params;
    try {
      await subjectRepository.delete(Number(id));
      res.status(STATUS_CODES.success).send("Semester Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };


module.exports={
    createLesson,
    // getAllLesson,
    deleteSemester
}