import { Request, Response, NextFunction } from "express";
import { addFavService } from "../../services/users";

const addVavoriteController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const { id } = req.body.user;

        const {favId} = req.body;

        await addFavService(id, favId);

        res.status(200).json({message: "Movie added to favorites"});
        
    } catch (error) {
        next(error);
    }
};

export default addVavoriteController;