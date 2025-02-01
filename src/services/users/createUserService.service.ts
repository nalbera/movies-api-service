import { IUser } from "../../interfaces/IUser";
import User from "../../models/User";

const createUserServices = async (email: String, password: String): Promise<IUser> => {

    const newUser = await User.create({ email, password});

    return newUser;
    
};

export default createUserServices;