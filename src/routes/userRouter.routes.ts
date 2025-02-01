import { Router } from "express";
import { createUserController, loginUserController } from "../controllers/users";



const userRouter: Router = Router();

userRouter.post('/users/register', createUserController);
userRouter.post('/users/login', loginUserController);

export default userRouter;