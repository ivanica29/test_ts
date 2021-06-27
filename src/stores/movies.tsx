import {observable, action, makeObservable} from "mobx";
import { createContext } from "react";
import {getMovies, getShowDetails} from "../endpoints/movies";
import { MovieDetails, Movie, MovieResponse, CastResponse } from "../interfaces";

class MovieStore {
    constructor() {
        makeObservable(this);
    }

    @observable movies: Movie[] = [];

    @observable showDetails: MovieDetails | null = null ;

    @observable isLoading: boolean = false;

    @observable error: string = '';

    @action getMovies = async () => {
        this.isLoading = true;
        try {
            const { data } = await getMovies();
            this.movies = data.map((movie: MovieResponse) => ({
                id: movie.show.id,
                name: movie.show.name,
                image: movie.show.image.original,
                rating: movie.show.rating.average,
            }))
        } catch (e) {

        }
        this.isLoading = false;
    };

    @action getShowDetails = async (movieId: string) => {
        this.isLoading = true;
        try {
            const { data } = await getShowDetails(movieId);
            const { id, genres, schedule, rating, network, image, name, _embedded, summary, status } = data;
            console.log(data, 'genres')
            this.showDetails = {
                id: id,
                genres: genres,
                schedule: schedule.days,
                rating: rating.average,
                network: network.name,
                image: image.original,
                name: name,
                summary: summary,
                status: status,
                cast: _embedded.cast.map((item: CastResponse) => ({
                    name: item.person.name,
                    characterName: item.character.name,
                    image: item.person.image.original,
                })),
            }
        } catch (e) {

        }
        this.isLoading = false;
    }
}

// @ts-ignore
const StoreContext = createContext();

// @ts-ignore
export function StoreProvider({ value, children }) {
    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export default MovieStore;
