import React, {useContext, useEffect, useState} from 'react';
import { observer } from "mobx-react";
import styled from "styled-components";
import { Container, Row, Col } from 'reactstrap';
import MovieStore from '../../stores/movies';
import {ShowInfo, Starring, StyledContainer} from "../../components";
import {Cast} from "../../interfaces";
import Rating from "../../components/Rating";

const Image = styled.div<{ url: string }>`
  background-image: ${({ url }) => `url('${url}')`};
  background-size: cover;
  background-position: center;
  height: 400px;
`;

// id: string;
// genres: string[];
// schedule: string[];
// rating: number;
// network: string;
// image: string;
// name: string;
// cast: Cast[];

const ShowDetails : React.FC<any> = observer(({ match }) => {
    const movieStore = useContext(MovieStore);
    const { showDetails } = movieStore;
    const { id } = match.params;

    useEffect(() => {
        if (typeof id !== "undefined") {
            movieStore.getShowDetails(id);
        }
    }, [id]);

    return showDetails ? (
        <StyledContainer>
            <Row>
                <Col md={3}>
                    <Image url={showDetails.image} />
                </Col>
                <Col>
                    <Row>
                        <Rating rating={showDetails.rating} showNumbers />
                    </Row>
                    <Row>
                        <Col><h2 className="mt-3">{showDetails.name}</h2></Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="my-3" dangerouslySetInnerHTML={{ __html: showDetails.summary}} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="my-5">
                <Col md={6}>
                    <h5>Show Info</h5>
                    <ShowInfo
                        status={showDetails.status}
                        schedule={showDetails.schedule}
                        network={showDetails.network}
                        genres={showDetails.genres}
                    />
                </Col>
                <Col md={6}>
                    <h5>Starring</h5>
                    <Starring casts={showDetails.cast} />
                </Col>
            </Row>
        </StyledContainer>
    ) : null;
});

export default ShowDetails;
