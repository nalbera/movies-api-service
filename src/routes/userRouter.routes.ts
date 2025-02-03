import { Router } from "express";
import { addVavoriteController, createUserController, getFavController, loginUserController, modifyUserController } from "../controllers/users";
import authUserMiddleware from "../middlewares/authUserMiddleware";


const userRouter: Router = Router();

userRouter.post('/users/register', createUserController);
userRouter.post('/users/login', loginUserController);

userRouter.put('/users/modify', authUserMiddleware, modifyUserController);

userRouter.put('/users/addFav', authUserMiddleware, addVavoriteController);
userRouter.get('/users/fav', authUserMiddleware, getFavController);

export default userRouter;