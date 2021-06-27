import React, {useContext, useEffect, useState} from 'react';
import { observer } from "mobx-react";
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import MovieStore from '../../stores/movies';
import { MovieItem, StyledContainer, Pagination } from "../../components";

const Description = styled.p`
  text-align: left;
  margin-bottom: 50px;
  color: #323232;
`;

const LatestShow = styled.p`
  text-align: left;
  font-weight: bold;
`;

const Homepage = observer(() => {
    const movieStore = useContext(MovieStore);
    const { movies } = movieStore;
    const [page, setPage ] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [itemsPerPage] = useState(12);
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
            setShownMovies(movies.slice((page - 1) * itemsPerPage, (page - 1) * itemsPerPage + itemsPerPage) as any);
        }
    }, [page, movies]);

    return movies.length ? (
        <StyledContainer>
            <Row>
                <Col xs={12} md={7}>
                    <Description>Tv show and web series database. Create personalized schedules.
                        {' '}Episode guide, cast, crew and character information.</Description>
                </Col>
            </Row>
            <Row>
                <Col>
                    <LatestShow>Latest Added shows:</LatestShow>
                </Col>
            </Row>
            <Row>
                {shownMovies.map(({ id, name, image, rating }) => (
                        <Col xs={6} md={2}>
                            <MovieItem id={id} image={image} name={name} rating={rating} />
                        </Col>
                    )
                )}
            </Row>
            {maxPage && (
                <Row>
                    <Col>
                        <Pagination
                            page={page}
                            setPage={setPage}
                            maxPage={maxPage}
                        />
                    </Col>
                </Row>
            )}
        </StyledContainer>
    ) : null;
});

export default Homepage;
