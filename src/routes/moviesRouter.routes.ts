import { Router } from "express";
import { createMovieController, getAllMoviesController } from "../controllers/movies";

const moviesRouter: Router = Router();

moviesRouter.get('/movies', getAllMoviesController);
moviesRouter.post('/movies', createMovieController);

export default moviesRouter;