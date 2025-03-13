import bodyParser from "body-parser";
import express from "express";
import "reflect-metadata";
import { s3 } from "@/modules/s3";

const app = express();
const PORT = +process.env.BACKEND_APP_PORT || 3001;
const HOST = process.env.BACKEND_APP_HOST || "localhost";

app.use(bodyParser.json());
app.use("/api/image", s3.router);

app.listen(PORT, HOST, () => {
  console.log(`App is running: http://${HOST}:${PORT}`);
});
