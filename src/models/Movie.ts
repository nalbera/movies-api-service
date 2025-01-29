import { Schema, model} from "mongoose";
import { IMovie } from "../interfaces/IMovie";


const movieSchema = new Schema<IMovie>({
    title: {type: String, required: true},
    year: {type: Number},
    director: {type: String, required: true},
    duration: {type: String},
    genre: {type: [String]},
    rate: {type: Schema.Types.Double},
    poster: {type: String}
})

const Movie = model('Movie', movieSchema);

export default Movie;