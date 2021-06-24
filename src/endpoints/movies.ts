import axios from '../utils/axios';
import { MovieResponse } from "../interfaces";

export const getMovies = () => {
    return axios.get<any>('/schedule')
};

export const getShowDetails = (id: string) => {
    return axios.get<any>(`/shows/${id}?embed=cast`)
}
