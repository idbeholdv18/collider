import { Response } from "express";
import { ErrorMessage } from "@/shared/types/errors/ErrorMessages.enum";
import { ErrorResponseBody } from "@/shared/types/responses/ErrorResponseBody.interface";
import { StatusCode } from "@/shared/types/statuses/StatusCodes.enum";

export const sendError = (
  res: Response,
  statusCode: StatusCode,
  message: ErrorMessage,
  details?: any
) => {
  const errorResponse: ErrorResponseBody = {
    message,
    details,
  };
  return res.status(statusCode).json(errorResponse);
};
