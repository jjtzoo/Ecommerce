import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js"

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

// middleware
app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use("api/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});