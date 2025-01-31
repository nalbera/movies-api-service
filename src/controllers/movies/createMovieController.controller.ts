import { Request, Response, NextFunction } from "express"
import { createMovieService } from "../../services/movies";

const createMovieController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const { title, year, director, duration, genre, rate, poster } = req.body;

        const newMovie = await createMovieService({title, year, director, duration, genre, rate, poster});

        res.status(200).json({
            status: 'ok',
            message: 'Movie created successfully',
            data: newMovie
        });

    } catch (error) {
        next(error);
    }
}

export default createMovieController;