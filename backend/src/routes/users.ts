import express from "express";
import { Router } from "express";
import { userRegister } from "../controllers/user.controller";
const userRouter = Router();

//api/users/register
userRouter.post("/register", userRegister);

export default userRouter;
