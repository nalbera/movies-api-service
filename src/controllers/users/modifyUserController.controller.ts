import { Request, Response, NextFunction } from "express";
import { updateUserService } from "../../services/users";


const modifyUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const { id } = req.body.user;

        const {firstName, lastName, email, avatar} = req.body;

        await updateUserService(id, firstName, lastName, email, avatar);
        
        res.status(200).json({message: 'User modified successfully'});

    } catch (error) {
        next(error);
    }
};

export default modifyUserController;