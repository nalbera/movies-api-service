import { IMovie } from "../../interfaces/IMovie";
import Movie from "../../models/Movie";


const createMovieService = async (movie: IMovie): Promise<IMovie> => {
     
    const newMovie = await Movie.create(movie);
    
    return newMovie;
}

export default createMovieService;