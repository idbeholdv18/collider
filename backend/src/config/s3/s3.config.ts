import { T_S3Config } from "./s3.types";

export const S3Config: T_S3Config = {
  client: {
    region: "ru-1",
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_KEY,
    },
    endpoint: process.env.S3_URL,
    apiVersion: "latest",
  },
  bucket: process.env.S3_BUCKET,
  presignedExpirationTime: +process.env.S3_PRESIGNED_EXPIRATION_TIME,
};
