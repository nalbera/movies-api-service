import { Request, Response } from "express";

const getAllMoviesController = (req: Request, res: Response) => {
    res.status(200).send('Proximamente estarán datos disponibles de películas');
}

export default getAllMoviesController;