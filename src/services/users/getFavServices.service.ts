import { IUser } from '../../interfaces/IUser';
import Movie from '../../models/Movie';
import  User  from '../../models/User';


const getFavServices = async (id: string) => {
    
    const currentUser: IUser | null = await User.findById(id);
    
    const favsArray = currentUser?.favoriteMovies
        ? await Promise.all(
            currentUser.favoriteMovies.map(async (movieId) => {
                const movie = await Movie.findById(movieId);
                return movie;
            })
        )
        : [];
    
    return favsArray;
    
};

export default getFavServices;