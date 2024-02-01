import { Request, Response } from "express";
import { STATUS_CODES } from "../constants/constants";
import { AppDataSource } from "../db";
import { Semester } from "../models";
import { MulterRequest, RequestQuery } from "../interfaces";
import { deleteDocumentImage } from "../helpers/helperUtils";

const createSemester = async (req: Request, res: Response) => {
  const { filename } = (req as MulterRequest)?.file;
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

const getAllSemesters = async (
  req: Request<{}, {}, {}, RequestQuery>,
  res: Response
) => {
  const semesterRepository = AppDataSource.getRepository(Semester);
  const categoryId: number = req.query.categoryId;

  try {
    const semesters: Semester[] = await semesterRepository.find({
      where: { categoryId: categoryId },
    });
    res.status(STATUS_CODES.success).send(semesters);
  } catch (error) {
    res.status(STATUS_CODES.error).send("Internal Server Error");
  }
};

const editSemester = async (req: Request, res: Response) => {
  const semesterRepository = AppDataSource.getRepository(Semester);
  const { id } = req.params;
  const updatedSemesterBody: Semester = req.body;
  if ((req as MulterRequest).file) {
    const { filename } = (req as MulterRequest).file;
    updatedSemesterBody.semesterPic = filename;
  }
  try {
    const semester: Semester | null = await semesterRepository.findOneBy({
      id: Number(id),
    });

    const updatedSemesterData=  {
      ...semester,
      ...updatedSemesterBody,
    }
    await semesterRepository.save(updatedSemesterData);
    res.status(STATUS_CODES.success).send("Lesson Updated Successfully");
  } catch (error) {
    console.log(error);
    res.status(STATUS_CODES.error).send("Internal Server Error");
  }
};

const deleteSemester = async (req: Request, res: Response) => {
  const semesterRepository = AppDataSource.getRepository(Semester);
  const { id } = req.params;
  const semester: Semester | null = await semesterRepository.findOneBy({
    id: Number(id),
  });

  const filePath: string = `./dynamic/semester-images/${semester?.semesterPic}`;
  await deleteDocumentImage(filePath);
  try {
    await semesterRepository.delete(Number(id));
    res.status(STATUS_CODES.success).send("Semester Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createSemester,
  getAllSemesters,
  deleteSemester,
  editSemester
};
