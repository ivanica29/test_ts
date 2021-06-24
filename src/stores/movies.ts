import {observable, action, computed, reaction, makeObservable} from "mobx";
import { createContext } from "react";
import {getMovies} from "../endpoints/movies";
import { MovieDetails, Movie, MovieResponse } from "../interfaces";

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
    };

    @action getShowDetails = async (id: string) => {

    }
}

export default createContext(new MovieStore());
