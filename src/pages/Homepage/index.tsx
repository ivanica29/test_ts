import React, {useContext, useEffect, useState} from 'react';
import { observer } from "mobx-react";
import MovieStore from '../../stores/movies';

const Homepage = observer(() => {
    const movieStore = useContext(MovieStore);
    const { movies } = movieStore;
    const [page, setPage ] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [itemsPerPage, setItemsPerpage] = useState(10);
    const [shownMovies, setShownMovies] = useState([]);

    useEffect(() => {
        movieStore.getMovies();
    }, []);

    useEffect(() => {
        setMaxPage(Math.ceil(movies.length/itemsPerPage));
        setPage(1);
    }, [movies]);

    useEffect(() => {
        if (movies.length) {
            setShownMovies(movies.slice(page*itemsPerPage, page*itemsPerPage + itemsPerPage) as any);
        }
    }, [page]);

    return movies.length ? (
        <div>{movies[0].name}</div>
    ) : null;
});

export default Homepage;
