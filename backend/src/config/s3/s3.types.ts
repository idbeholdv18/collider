import { S3ClientConfig } from "@aws-sdk/client-s3";

export type T_S3Config = {
  client: S3ClientConfig;
  bucket: string;
  presignedExpirationTime: number;
};
