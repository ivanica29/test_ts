import React, {useContext, useEffect, useState} from 'react';
import { observer } from "mobx-react";
import styled from 'styled-components';
import { Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import MovieStore from '../../stores/movies';
import { MovieItem, StyledContainer } from "../../components";

const Description = styled.p`
  text-align: left;
  margin-bottom: 50px;
  color: #323232;
`;

const LastestShow = styled.p`
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
            setShownMovies(movies.slice(page*itemsPerPage, page*itemsPerPage + itemsPerPage) as any);
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
                    <LastestShow>Latest Added shows:</LastestShow>
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
            <Row>
                <Col>
                    <Pagination>
                        <PaginationItem disabled={page === 1} onClick={() => {
                            setPage(1);
                        }}>
                            <PaginationLink first />
                        </PaginationItem>
                        <PaginationItem disabled={page === 1} onClick={() => {
                            setPage(page - 1);
                        }}>
                            <PaginationLink previous />
                        </PaginationItem>

                        {Array(maxPage - 1).fill(null).map((_, i) => {
                            return (
                                <PaginationItem active={i + 1 === page} onClick={() => {
                                    setPage(i + 1);
                                }} >
                                    <PaginationLink>
                                        {i + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            )
                        })}
                        <PaginationItem disabled={maxPage - 1 === page} onClick={() => {
                            setPage(page + 1);
                        }}>
                            <PaginationLink next/>
                        </PaginationItem>
                        <PaginationItem disabled={maxPage - 1 === page} onClick={() => {
                            setPage(maxPage - 1);
                        }}>
                            <PaginationLink last />
                        </PaginationItem>
                    </Pagination>
                </Col>
            </Row>
        </StyledContainer>
    ) : null;
});

export default Homepage;
