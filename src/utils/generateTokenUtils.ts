import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/envs";

const generateTokenUtils = (id: String, email: String, role: String): string => {

    const tokenInfo = {
        id,
        email,
        role
    };
    
    
    return jwt.sign(tokenInfo, JWT_SECRET as string, {
        expiresIn: "30d"
    });
};

export default generateTokenUtils;