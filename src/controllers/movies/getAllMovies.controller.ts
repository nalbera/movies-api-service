import { Request, Response } from "express";
import { getMoviesService } from "../../services/movies";

const getAllMoviesController = async (req: Request, res: Response) => {
    try {
        const movies = await getMoviesService();
        res.status(200).json({
            status: 'ok',
            data: movies
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error de servidor'
        });
    }

}

export default getAllMoviesController;