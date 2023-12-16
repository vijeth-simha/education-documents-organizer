import { Request, Response } from "express";
import { STATUS_CODES } from "../constants/constants";
import { AppDataSource } from "../db";
import { MulterRequest, RequestQuery } from "../interfaces";
import { Document } from "../models";
import { getS3SignedURL, uploadToAWS } from "../helpers/S3Utils";
import { getRandomString } from "../helpers/helperUtils";

const createDocument = async (req: Request, res: Response) => {
  const { buffer, originalname, mimetype } = (req as MulterRequest).file;
  const documentObject: Document = req.body;
  const newOtherLinks: string[] = JSON.parse(req.body.otherLinks);
  const randomOriginalFileName: string = getRandomString() + originalname;
  const documentRepository = AppDataSource.getRepository(Document);
  documentObject.createdAt = new Date();
  documentObject.lessonId = documentObject.lesson;
  documentObject.documentURL = randomOriginalFileName;
  documentObject.otherLinks = newOtherLinks;

  try {
    const uploadStatus: boolean = await uploadToAWS(
      randomOriginalFileName,
      buffer,
      mimetype
    );
    if (uploadStatus) {
      await documentRepository.save(documentObject);
      res.status(STATUS_CODES.success).send("Document for the lesson created");
    }
  } catch (error) {
    console.log(error);
    res.status(STATUS_CODES.error).send("Internal Server Error");
  }
};

const getAllDocuments = async (
  req: Request<{}, {}, {}, RequestQuery>,
  res: Response
) => {
  const documentRepository = AppDataSource.getRepository(Document);
  const lessonId: number = req.query.lessonId;

  try {
    const documents: Document[] = await documentRepository.find({
      where: { lessonId: lessonId },
    });

    for (let element of documents) {
      element.documentURL = await getS3SignedURL(element.documentURL);
    }

    res.status(STATUS_CODES.success).send(documents);
  } catch (error) {
    res.status(STATUS_CODES.error).send("Internal Server Error");
  }
};

const deleteDocument = async (req: Request, res: Response) => {
  const documentRepository = AppDataSource.getRepository(Document);
  const { id } = req.params;
  try {
    await documentRepository.delete(Number(id));
    res.status(STATUS_CODES.success).send("document Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createDocument,
  deleteDocument,
  getAllDocuments,
};
