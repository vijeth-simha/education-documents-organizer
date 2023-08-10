import { Request, Response } from "express";
import { STATUS_CODES } from "../constants/constants";
import { AppDataSource } from "../db";
import { MulterRequest, RequestQuery } from "../interfaces";
import { Lesson } from "../models";

const createLesson = async (req: Request, res: Response) => {
  // const { filename } = (req as MulterRequest).file;
  const lessonObject: Lesson = req.body;
  const lessonRepository = AppDataSource.getRepository(Lesson);
  lessonObject.createdAt = new Date();
  lessonObject.subjectId = lessonObject.subject;
  // lessonObject.lessonPic = filename;
  try {
    await lessonRepository.save(lessonObject);
    res
      .status(STATUS_CODES.success)
      .send("Lesson for the subject created successfully");
  } catch (error) {
    console.log(error);
    res.status(STATUS_CODES.error).send("Internal Server Error");
  }
};

const getAllLessons = async (req: Request<{}, {}, {}, RequestQuery>, res: Response) => {
  const lessonRepository = AppDataSource.getRepository(Lesson);
  const subjectId: number = req.query.categoryId;

  try {
    const lesson: Lesson[] = await lessonRepository.find({
      where: { subjectId: subjectId },
    });
    res.status(STATUS_CODES.success).send(lesson);
  } catch (error) {
    res.status(STATUS_CODES.error).send("Internal Server Error");
  }
};

const deleteLesson = async (req: Request, res: Response) => {
  const lessonRepository = AppDataSource.getRepository(Lesson);
  const { id } = req.params;
  try {
    await lessonRepository.delete(Number(id));
    res.status(STATUS_CODES.success).send("Semester Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createLesson,
  getAllLessons,
  deleteLesson,
};
