import express from "express";
import multer from "multer";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const app = express();
const PORT = process.env.PORT || 3008;
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("Hello, You have achieved, yeh..!");
});





app.listen(PORT, () => {
  console.log(`Server is running successfully on port ${PORT}`);
});
