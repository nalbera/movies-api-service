import { IUser } from "../../interfaces/IUser";
import User from "../../models/User";


const updateUserService = async (id: string, firstName: string, lastName: string, email: string, avatar: string) => {
    
    const modifiedUser = await User.updateOne({_id: id}, {firstName, lastName, email, avatar});

    return modifiedUser;
};

export default updateUserService;