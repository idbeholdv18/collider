import { ErrorMessage } from "@/shared/types/errors/ErrorMessages.enum";
import { TypedResponse } from "@/shared/types/responses/TypedResponse.interface";

export type ErrorResponseBody = {
  message: ErrorMessage;
  details?: any;
};

export interface ErrorResponse extends TypedResponse<ErrorResponseBody> {}
