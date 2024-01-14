import {
  S3Client,
  PutObjectCommand,
  PutObjectRequest,
  GetObjectCommand,
  GetObjectCommandInput,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const region: string = process.env.AWS_BUCKET_REGION ?? " ";
const bucketName: string = process.env.AWS_BUCKET_NAME ?? " ";
const access: string = process.env.AWS_ACCESS_KEY_ID ?? " ";
const secretKey: string = process.env.AWS_SECRET_ACCESS_KEY ?? " ";

const s3 = new S3Client({
  region: region,
  credentials: {
    accessKeyId: access,
    secretAccessKey: secretKey,
  },
});

export const uploadToAWS = async (
  originalname: string,
  buffer: Blob,
  mimetype: string
) => {
  const params: PutObjectRequest = {
    Bucket: bucketName,
    Key: originalname,
    Body: buffer,
    ContentType: mimetype,
  };

  const commands = new PutObjectCommand(params);
  try {
    await s3.send(commands);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getS3SignedURL = async (keyName:string) => {
  const getObjectParams:GetObjectCommandInput ={
    Bucket: bucketName,
    Key: keyName
  }
  const command = new GetObjectCommand(getObjectParams);
  const signedURL:string = await getSignedUrl(s3, command, { expiresIn: 3600 });
  return signedURL;
};

export const deleteDocumentFromAWS = async (fileName:string)=>{
  const deleteParams = {
    Bucket: bucketName, // The name of your bucket
    Key: fileName, // The name of the file you want to delete
  };

  try {
    // Execute the delete operation
    await s3.send(new DeleteObjectCommand(deleteParams));
    console.log(`File ${fileName} deleted successfully.`);
  } catch (error) {
    console.error("Error deleting file: ", error);
    throw error;
  }

}
