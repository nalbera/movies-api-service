import User from "../../models/User";
import { IUser } from "../../interfaces/IUser";

const findUserByEmailServices = async (email: string): Promise<IUser | null> => {
    
    const user = await User.findOne({ email });

    return user;
};

export default findUserByEmailServices;