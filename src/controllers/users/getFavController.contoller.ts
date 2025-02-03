import { Request, Response, NextFunction } from 'express';
import { getFavServices } from '../../services/users';

const getFavController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const { id } = req.body.user;

        const favs = await getFavServices(id);
        
        res.status(200).json({
            message: 'Favorite movies fetched successfully',
            favs,
        });
        
    } catch (error) {
        next(error);
    }
};

export default getFavController;