import express from "express";
import { Router } from "express";

import { check } from "express-validator";
import authLogin from "../controllers/login.controller";
const authRouter = Router();

//api/users/login
authRouter.post(
  "/login",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({
      min: 6,
    }),
  ],
  authLogin
);

export default authRouter;
