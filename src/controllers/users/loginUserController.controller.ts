import { NextFunction, Request, Response } from "express";
import { generateErrorsUtils, generateTokenUtils } from "../../utils";
import { findUserByEmailServices } from "../../services/users";
import bcrypt from "bcrypt";


const loginUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw generateErrorsUtils("Email and password are required", 400);
        }

        const user = await findUserByEmailServices(email);

        let passwordMatch: Boolean = false;

        if (user) {
            passwordMatch = await bcrypt.compare(password as string, user.password as string);
        }


        if (!passwordMatch || !user) {
            throw generateErrorsUtils("Incorrect email or password", 404);
        }

        const token = generateTokenUtils(user._id as string, user.email, user.role);

        res.status(200).json({
            message: "User logged in successfully",
            data: {
                token
            }
        });

    } catch (error) {
        next(error);
    }
};

export default loginUserController;