import React from 'react';
import styled from 'styled-components';
import { Movie } from "../../interfaces";
import Rating from "../Rating";
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  text-align: left;
  cursor: pointer;
  margin: 10px 0;
  display: grid;
    &:hover {
      background-color: white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
      h5 {
        color: #CC6A19;
      }
    }
`;

const Image = styled.div<{ url: string }>`
    background-image: ${({ url }) => `url(${url})`};
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
  
    @media (max-width: 576px) {
      height: 200px;
    }
`;

const Title = styled.h5`
  margin: 10px 0 20px;
  text-align: left;
  color: #212121;
`;

const BottomContent = styled.div`
    padding: 0px 10px 10px 10px;
`;

const MovieItem: React.FC<Movie> = ({ id, name, image, rating }) => {
    return (
        <Link style={{ textDecoration: 'none' }} to={`/${id}`}>
            <Wrapper as="div">
                <Image url={image} />
                <BottomContent>
                    <Rating rating={rating} showNumbers={false} />
                    <Title>{name}</Title>
                </BottomContent>
            </Wrapper>
        </Link>
    )
};

export default MovieItem;
