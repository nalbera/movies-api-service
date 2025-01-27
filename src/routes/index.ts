import { Router } from "express";
import moviesRouter from "./moviesRouter.routes";

const router: Router = Router();

router.use(moviesRouter);

export default router;