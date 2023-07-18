import { Request, Response } from "express";
import prismaClient from "../database/prismaClient";

export async function CreateMovieRent(req: Request, res: Response) {
  
  const { movieId, userId } = req.body;
  
  const movieRent = await prismaClient.movieRent.create({
    data: {
      movieId, 
      userId
    }
  })

  res.status(200).json({ message: "Filme alugado com sucesso" })
}