import { Request, Response } from "express";
import prismaClient from "../database/prismaClient";

export async function CreateUser(req: Request, res: Response) {
  const { name, email } = req.body;

  const newUser = await prismaClient.user.create({
    data: {
      email,
      name,
    },
  });

  console.log("Created user", email, name);
}
