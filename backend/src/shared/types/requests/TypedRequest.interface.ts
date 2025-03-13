import { Query } from "express-serve-static-core";
import { Request } from "express";

export interface TypedRequest<B = any, Q extends Query = Query>
  extends Request {
  body: B;
  query: Q;
}

export interface TypedRequestWithFile<B = any, Q extends Query = Query>
  extends Request {
  body: B;
  query: Q;
  file: Express.Multer.File;
}
