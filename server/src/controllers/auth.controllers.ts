import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const loginHandler = async (req: Request, res: Response) => {
  try {
    // req.body = {email: '', password: ''}
    // validation, express-validator, joi, zod
    // store in database
    // generate token

    const token = jwt.sign(
      {
        test: "test",
      },
      "secret",
      { expiresIn: 60 * 60 * 24 }
    );

    return res.status(200).json({
      token,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const profileHandler = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      profile: req.user,
      message: "profile data",
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
