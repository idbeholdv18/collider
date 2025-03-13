import { S3Config } from "./s3/s3.config";
import { T_S3Config } from "./s3/s3.types";

type T_Configuration = {
  S3: T_S3Config;
};

export const Configuration: T_Configuration = {
  S3: S3Config,
} as const;
