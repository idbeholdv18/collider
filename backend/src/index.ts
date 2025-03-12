import bodyParser from "body-parser";
import express from "express";
import "reflect-metadata";
import { v4 as uuidv4 } from "uuid";
const multer = require("multer");
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const client = new S3Client({
  region: "ru-1",
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY,
  },
  endpoint: process.env.S3_URL,
  apiVersion: "latest",
});

const app = express();
const PORT = +process.env.BACKEND_APP_PORT || 3001;
const HOST = process.env.BACKEND_APP_HOST || "localhost";
app.use(bodyParser.json());

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

app.post("/upload", upload.single("image"), async (req: any, res: any) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  if (req.file.mimetype !== "image/png") {
    return res.status(400).send("Only PNG images are allowed.");
  }

  try {
    const data = await client.send(
      new PutObjectCommand({
        Bucket: process.env.S3_BUCKET,
        Key: `images/${uuidv4()}-${req.file.originalname}`,
        Body: req.file.buffer,
        ContentType: req.file.mimetype,
        ACL: "public-read",
      })
    );
    console.log("The file was uploaded successfully:", data);
    res.json({ url: data.ETag });
  } catch (error) {
    console.error("File upload error:", error);
    res.status(500).send("Error uploading file");
  }
});

app.get("/get", async (req: any, res: any) => {
  const fileName = req.query.fileName;

  if (!fileName) {
    return res.status(400).send("The file name is not specified");
  }

  const cmd = new GetObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: fileName,
  });
  try {
    const url = await getSignedUrl(client, cmd, { expiresIn: 3600 });
    return res.json({ url });
  } catch (error) {
    console.error("Error when creating a pre-signed URL:", error);
    return res.status(500).send("Error receiving the image");
  }
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "data" });
});

app.listen(PORT, HOST, () => {
  console.log(`App is running: http://${HOST}:${PORT}`);
});
