import { Send } from "express-serve-static-core";
import { Response } from "express";

export interface TypedResponse<ResBody extends any = any>
  extends Response {
  json: Send<ResBody, this>;
}
