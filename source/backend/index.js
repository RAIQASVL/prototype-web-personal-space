import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { connectDB } from "./src/db/connectDB.js";

import authRoutes from "./src/routes/auth.route.js";



const app = express();
const PORT = process.env.PORT || 5000;
// const __dirname = path.resolve();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse incoming cookies

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log("'Server is running on port: ", PORT);
})