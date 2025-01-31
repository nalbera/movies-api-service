import { Request, Response, NextFunction } from "express";
import { getMoviesService } from "../../services/movies";
import { generateErrorsUtils } from "../../utils";

const getAllMoviesController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const movies = await getMoviesService();

        if (!movies) {
           throw generateErrorsUtils('No movies found', 404);
        }

        res.status(200).json({
            status: 'ok',
            data: movies
        });
    } catch (error) {
      next(error);
    }

}

export default getAllMoviesController;