import User from "../../models/User";
import Movie from "../../models/Movie";
import { generateErrorsUtils } from "../../utils";
const addFavService = async (id: string, favId: string): Promise<boolean> => {

    const favMovie = await Movie.findById(favId);

    if (!favMovie) {
        throw generateErrorsUtils("Movie not found", 404);
    }

    const currentUser = await User.findById(id);

    const isFav = currentUser?.favoriteMovies.find(fav => fav.includes(favId));
    
    if (isFav?.length) {
        throw generateErrorsUtils("Movie already in favorites", 400);
    }

    await User.updateOne({_id: id}, {$push: {favoriteMovies: favId}});

    return true;

};

export default addFavService;