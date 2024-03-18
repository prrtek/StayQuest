import express from "express";
import { Router } from "express";
import { userRegister } from "../controllers/user.controller";
import { check } from "express-validator";
const userRouter = Router();

//api/users/register
userRouter.post(
  "/register",
  [
    check("firstName", "First Name is required").isString(),
    check("lastName", "Last Name is required").isString(),
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({
      min: 6,
    }),
  ],
  userRegister
);

export default userRouter;
