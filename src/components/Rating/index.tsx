import React from 'react';
import styled, { css } from 'styled-components';
import StarIcon from '../../assets/star.png';

const Star = styled.img<{ selected: boolean }>`
  width: 16px;
  height: 16px;
  margin: 20px 10px 10px 0;
  filter: ${({ selected }) => selected ?
    'invert(40%) sepia(50%) saturate(2000%) hue-rotate(8deg) brightness(95%) contrast(80%)'
    : 'opacity(30%)'
 };

  @media (max-width: 576px) {
    width: 13px;
    height: 13px;
    margin: 10px 5px 10px 0px;
  }
`;

const RatingNumbers = styled.p`
  display: inline-flex;
  vertical-align: middle;
  margin: 10px 0 0 10px;
  font-weight: bold;
`;

const Rating: React.FC<{ rating: number, showNumbers: boolean }> = ({ rating, showNumbers }) => {
    return (
        <div>
            <div className="d-inline">
                {Array(5)
                    .fill(null)
                    .map((_, i) => i + 1)
                    .map(starNumber => {
                        return (
                            <Star
                                selected={starNumber <= rating/2}
                                src={StarIcon}
                            />
                        )
                    })}
            </div>
            {showNumbers && (
                <RatingNumbers className="d-inline">{rating/2} / 5</RatingNumbers>
            )}
        </div>
    );
};


export default Rating;
