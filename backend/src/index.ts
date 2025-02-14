import bodyParser from "body-parser";
import express from "express";
import "reflect-metadata";

const app = express();
const PORT = +process.env.BACKEND_APP_PORT || 3000;
const HOST = process.env.BACKEND_APP_HOST || "localhost";
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "data" });
});

app.listen(PORT, HOST, () => {
  console.log(`App is running: http://${HOST}:${PORT}`);
});
