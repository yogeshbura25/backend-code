import express from "express";  // Import the express framework
import { Router } from "express";  // Import the Router function from express

const app = express();  // Initialize the express app
const PORT =  3004;  // Set the port

const router = Router();  // Create a router instance

router.get("/", (req, res) => {
  res.send("Hello, You have achieved, yeh..!");
});

// Attach the router to the app
app.use(router);

// Start the server to listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running successfully on port ${PORT}`);
});
