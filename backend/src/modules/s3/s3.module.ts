import { Configuration } from "@/config";
import { S3Controller } from "@/controllers/s3/s3.controller";
import { S3Service } from "@/services/s3/s3.service";
import { Router } from "express";
import multer, { Multer } from "multer";

export class S3Module {
  private _controller: S3Controller;
  private _service: S3Service;
  private _router: Router;
  private _upload: Multer;

  constructor(service?: S3Service) {
    this._service = service || new S3Service(Configuration.S3);
    this._controller = new S3Controller(this._service);
    this._router = Router();
    this._upload = multer({
      storage: multer.memoryStorage(),
      limits: { fileSize: 30 * 1024 * 1024 }, // 5MB
    });
    this._register();
  }

  private _register() {
    this._router.post(
      "/upload",
      this._upload.single("image"),
      this._controller.uploadImage.bind(this._controller)
    );
    this._router.get(
      "/get",
      this._controller.getFilePresignedUrl.bind(this._controller)
    );
  }

  get router() {
    return this._router;
  }

  get services() {
    return this._service;
  }
}

export const s3 = new S3Module();
