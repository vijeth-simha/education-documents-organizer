import {
  S3Client,
  PutObjectCommand,
  PutObjectRequest,
} from "@aws-sdk/client-s3";
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
    return false
  }
};
