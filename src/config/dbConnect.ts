import mongoose from "mongoose";
import { MONGO_URI } from "./envs";

const dbConnect = async () => {
    if(MONGO_URI){
        await mongoose.connect(MONGO_URI);
    }
};

export default dbConnect;