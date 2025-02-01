import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/IUser";

const userSchema = new Schema<IUser>({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String, required: true},
    password: {type: String, required: true}
});

const User = model('User', userSchema);

export default User;