import { Request } from "express";

export default interface StatusCode {
  success: number;
  duplicate: number;
  notFound: number;
  error: number;
  unAuthorized: number;
  forbidden: number;
  invalid: number;
}

export interface Error {
  errno: number;
  code: string;
  sqlState: string;
  name: string;
}

export interface FileType {
  fieldname: string;
  /** Name of the file on the uploader's computer. */
  originalname: string;
  /**
   * Value of the `Content-Transfer-Encoding` header for this file.
   * @deprecated since July 2015
   * @see RFC 7578, Section 4.7
   */
  encoding: string;
  /** Value of the `Content-Type` header for this file. */
  mimetype: string;
  /** Size of the file in bytes. */
  size: number;

  /** `DiskStorage` only: Directory to which this file has been uploaded. */
  destination: string;
  /** `DiskStorage` only: Name of this file within `destination`. */
  filename: string;
  /** `DiskStorage` only: Full path to the uploaded file. */
  path: string;
  /** `MemoryStorage` only: A Buffer containing the entire file. */
  buffer: Blob;
}

export interface MulterRequest extends Request {
  file: FileType;
}

export interface RequestQuery {
  lessonId:number;
  categoryId:number;
  semesterId:number;
  subjectId:number;
}