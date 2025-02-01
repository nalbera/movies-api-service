import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { generateErrorsUtils } from "../../utils";
import { createUserServices, findUserByEmailServices } from "../../services/users";
import { IUser } from "../../interfaces/IUser";


const createUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
       
        const { email, password } = req.body;

        if (!email || !password) {
            throw generateErrorsUtils("Email and password are required", 400);
        }

        const currentUser: IUser | null = await findUserByEmailServices(email);

        if(currentUser) {
            throw generateErrorsUtils("User already exists", 400);
        }

        const passwordHash = await bcrypt.hash(password, 10);
        
        const newUser = await createUserServices(email, passwordHash);

        res.status(201).json({
            message: "User created successfully",
            data: newUser
        });

    } catch (error) {
        next(error);
    }
};

export default createUserController;