import { Configuration } from "@/config";
import { T_S3Config } from "@/config/s3/s3.types";
import {
  GetObjectCommand,
  GetObjectCommandOutput,
  PutObjectCommand,
  PutObjectCommandInput,
  PutObjectCommandOutput,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuidv4 } from "uuid";

export class S3Service {
  private _s3Client: S3Client;
  private _bucket: string;
  constructor(configuration: T_S3Config) {
    this._s3Client = new S3Client(configuration.client);
    this._bucket = configuration.bucket;
  }
  public async uploadFile(
    file: Express.Multer.File
  ): Promise<{ metadata: PutObjectCommandOutput; filename: string }> {
    const filename = `images/${uuidv4()}-${file.originalname}`;
    const commandInput: PutObjectCommandInput = {
      Bucket: this._bucket,
      Key: filename,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read",
    };
    const command = new PutObjectCommand(commandInput);
    const s3UploadResponse = await this._s3Client.send(command);
    return {
      metadata: s3UploadResponse,
      filename,
    };
  }

  public async getFilePresignedUrl(filename: string): Promise<string> {
    const cmd = new GetObjectCommand({
      Bucket: this._bucket,
      Key: filename,
    });
    return await getSignedUrl(this._s3Client, cmd, {
      expiresIn: Configuration.S3.presignedExpirationTime,
    });
  }
}
