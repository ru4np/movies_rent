import { Request, Response } from "express";
import prismaClient from "../database/prismaClient";

export async function GetUsers (req: Request, res: Response) {
   const users = await prismaClient.user.findMany({})
   res.status(200).json({users})
}