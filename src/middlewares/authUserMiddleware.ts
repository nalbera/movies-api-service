import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { generateErrorsUtils } from "../utils";

import { JWT_SECRET } from "../config/envs";


const authUserMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const { authorization } = req.headers;
        
        if (!authorization) {
            throw generateErrorsUtils("Authorization header is required", 401);
        }

        let tokeninfo;

        try {
            tokeninfo = jwt.verify(authorization, JWT_SECRET as string);
        } catch (error) {
            throw generateErrorsUtils("Invalid token", 401);
        }

        req.body.user = tokeninfo;

        next();
        
    } catch (error) {
        next(error);
    }
};

export default authUserMiddleware;