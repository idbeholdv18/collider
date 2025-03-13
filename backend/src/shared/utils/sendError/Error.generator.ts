import { ErrorMessage } from "@/shared/types/errors/ErrorMessages.enum";
import { StatusCode } from "@/shared/types/statuses/StatusCodes.enum";
import { Response } from "express";
import { sendError } from "./sendError";

export class SendError {
  static BadRequest(res: Response, message: ErrorMessage) {
    return sendError(res, StatusCode.BAD_REQUEST, message);
  }

  static InternalServerError(res: Response) {
    return sendError(
      res,
      StatusCode.INTERNAL_SERVER_ERROR,
      ErrorMessage.INTERNAL_SERVER_ERROR
    );
  }
}
