import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import path from "path";

import cors from "cors"
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";
import admin from './routes/admin.js';
dotenv.config();

connectDB();


var app = express(); // main thing
app.use(cors())
app.use(cookieParser());
app.use(express.json()); // to accept json data

app.use(express.static("./table"));



app.use("/api/users", userRoutes);
app.use('/api/admin', admin);
// --------------------------deployment------------------------------
const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
 
}
// --------------------------deployment------------------------------

// Error Handling middlewares

app.use(errorHandler);

const PORT = process.env.PORT || 5005;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`.yellow
      .bold
  )
);
