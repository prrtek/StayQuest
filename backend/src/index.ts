import express from "express";
import cors from "cors";
import "dotenv/config";
import connect from "./db/db";
import userRouter from "./routes/users";
import authRouter from "./routes/auth";

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connect()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error:  not connected to MongoDB");
    console.log(error);
  });

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
