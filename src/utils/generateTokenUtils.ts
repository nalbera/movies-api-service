import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/envs";

const generateTokenUtils = (id: string, email: String): string => {

    const tokenInfo = {
        id,
        email
    };
    
    
    return jwt.sign(tokenInfo, JWT_SECRET as string, {
        expiresIn: "30d"
    });
};

export default generateTokenUtils;