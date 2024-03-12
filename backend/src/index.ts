import express from "express";
import cors from "cors";
import "dotenv/config";
import connect from "./db/db";

const app = express();
app.use(cors());
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
