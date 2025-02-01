import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/IUser";

const userSchema = new Schema<IUser>({
    firstName: {type: String, default: 'no name'},
    lastName: {type: String, default: 'no last name'},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, default: 'user'},
    avatar: {type: String, default: 'no avatar'},
    favoriteMovies: {type: [String], default: []}
});

const User = model('User', userSchema);

export default User;