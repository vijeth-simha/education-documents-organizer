import { Request, Response } from "express";
import { STATUS_CODES } from "../constants/constants";
import { AppDataSource } from "../db";
import { MulterRequest, RequestQuery } from "../interfaces";
import { Subject } from "../models";

const createSubject = async (req: Request, res: Response) => {
  const { filename } = (req as MulterRequest).file;
  const subjectObject: Subject = req.body;

  const subjectRepository = AppDataSource.getRepository(Subject);
  subjectObject.createdAt = new Date();
  subjectObject.subjectPic = filename;
  try {
    await subjectRepository.save(subjectObject);
    res
      .status(STATUS_CODES.success)
      .send("Subject for the semester created successfully");
  } catch (error) {
    console.log(error);
    res.status(STATUS_CODES.error).send("Internal Server Error");
  }
};

const getAllSubjects = async (
  req: Request<{}, {}, {}, RequestQuery>,
  res: Response
) => {
  const subjectRepository = AppDataSource.getRepository(Subject);
  const semesterId: number = req.query.semesterId;

  try {
    const subjects: Subject[] = await subjectRepository.find({
      where: { semesterId: semesterId },
    });
    res.status(STATUS_CODES.success).send(subjects);
  } catch (error) {
    res.status(STATUS_CODES.error).send("Internal Server Error");
  }
};

  const deleteSubject = async (req: Request, res: Response) => {
    const subjectRepository = AppDataSource.getRepository(Subject);
    const { id } = req.params;
    try {
      await subjectRepository.delete(Number(id));
      res.status(STATUS_CODES.success).send("Subject deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

module.exports = {
  createSubject,
  getAllSubjects,
  deleteSubject
};
