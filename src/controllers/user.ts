import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.js";

export const newUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, photo, gender, role, _id } = req.body;

    const user = await User.create({
      name,
      email,
      photo,
      gender,
      role,
      _id,
    });

    return res.status(200).json({
      success: true,
      message: "Welcome",
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: error,
    });
  }
};
