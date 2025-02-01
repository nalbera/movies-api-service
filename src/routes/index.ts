import { Router } from "express";
import moviesRouter from "./moviesRouter.routes";
import userRouter from "./userRouter.routes";

const router: Router = Router();

router.use(moviesRouter);
router.use(userRouter);

export default router;