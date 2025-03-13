import { S3Service } from "@/services/s3/s3.service";
import { ErrorMessage } from "@/shared/types/errors/ErrorMessages.enum";
import {
  TypedRequest,
  TypedRequestWithFile,
} from "@/shared/types/requests/TypedRequest.interface";
import { TypedResponse } from "@/shared/types/responses/TypedResponse.interface";
import { StatusCode } from "@/shared/types/statuses/StatusCodes.enum";
import { SendError } from "@/shared/utils/sendError/Error.generator";

export class S3Controller {
  private _s3Service: S3Service;
  constructor(s3service: S3Service) {
    this._s3Service = s3service;
  }

  public async uploadImage(req: TypedRequestWithFile, res: TypedResponse) {
    const file = req.file;
    if (!file) {
      return SendError.BadRequest(res, ErrorMessage.S3__NO_FILE_UPLOADED);
    }
    if (file.mimetype !== "image/png") {
      return SendError.BadRequest(
        res,
        ErrorMessage.S3__ONLY_PNG_IMAGES_ALLOWED
      );
    }
    try {
      const uploadResponse = await this._s3Service.uploadFile(file);
      return res.status(StatusCode.CREATED).json(uploadResponse.filename);
    } catch (e) {
      console.error(e);
      return SendError.InternalServerError(res);
    }
  }

  public async getFilePresignedUrl(
    req: TypedRequest<any, { filename: string }>,
    res: TypedResponse
  ) {
    const filename = req.query.filename;
    if (!filename) {
      return SendError.BadRequest(res, ErrorMessage.S3__FILENAME_NOT_SPECIFIED);
    }
    try {
      const presignedUrl = await this._s3Service.getFilePresignedUrl(filename);
      return res.status(StatusCode.OK).json(presignedUrl);
    } catch (e) {
      console.error(e);
      return SendError.InternalServerError(res);
    }
  }
}
