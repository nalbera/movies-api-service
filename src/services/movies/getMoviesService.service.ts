import Movie from "../../models/Movie";

const getMoviesService = async () => {
    const movies = await Movie.find();
    return movies;
}

export default getMoviesService;