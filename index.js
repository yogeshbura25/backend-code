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


app.post("/create-user", async (req, res) => {
    const { email, name } = req.body;
  
    try {
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });
  
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }
  
      const newUser = await prisma.user.create({
        data: { name, email },
      });
  
      res.status(201).json({
        data: newUser,
        message: "User created successfully",
      });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });


app.listen(PORT, () => {
  console.log(`Server is running successfully on port ${PORT}`);
});
