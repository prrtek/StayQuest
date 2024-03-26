import express from "express";
import { Router } from "express";
import { Request, Response } from "express";
import { check } from "express-validator";
import authLogin from "../controllers/login.controller";
import { verifyToken } from "../middleware/auth";
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

authRouter.get(
  "/validate-token",
  verifyToken,
  (req: Request, res: Response) => {
    res.status(200).send({ userId: req.userId });
  }
);

export default authRouter;
