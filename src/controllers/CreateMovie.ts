import { Request, Response } from "express";
import prismaClient from "../database/prismaClient";
import { IMovie } from "../interfaces";

export async function CreateMovie(req: Request, res: Response) {
  try {
    const { title, duration, release_date } = req.body;

    const newMovie = await prismaClient.movies.create({
      data: {
        title,
        duration,
        release_date,
      },
    });
    res.status(200).json({ message: "Movie created." });
  } catch (err) {
    console.log(err);
  }
}
