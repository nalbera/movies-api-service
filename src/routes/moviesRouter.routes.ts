import { Router } from "express";
import { getAllMoviesController } from "../controllers/movies";

const moviesRouter: Router = Router();

moviesRouter.get('/movies', getAllMoviesController);

export default moviesRouter;