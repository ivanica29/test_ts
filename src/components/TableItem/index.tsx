import React from 'react';
import styled, { css } from 'styled-components';
import { Row, Col } from 'reactstrap';

const StyledRow = styled(Row)<{image: boolean}>`
  border-bottom: 1px solid #989898;
  
  @media (max-width: 576px) {
    ${({ image }) => !image && css`
      width: 50%;
      display: inline-flex;
            margin: auto;
    `}
  }
`;

const Description = styled.p`
  color: #8d8d8d;
  margin: 15px 0;
  word-break: break-word;
`;

const Image = styled.div<{ url: string }>`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-image: ${({ url }) => `url('${url}')`};
  background-position: center;
  background-size: cover;
  margin-top: 10px;
`;

const SecondRow = styled(Row)`
`;

const Title = styled.p`
  margin: 15px 0;
  
  @media (max-width: 576px) {
    margin: 0;
  }
`;

const TableItem: React.FC<{ image?: string, title: string, description: string }> = ({ image, title, description}) => {
    return (
        <StyledRow image={!!image}>
            {image && (
                <Col xs={3}>
                    <Image url={image} />
                </Col>
            )}
           <Col>
               <SecondRow>
                   <Col xs={12} md={6}>
                       <Title>{title}</Title>
                   </Col>
                   <Col xs={12} md={6}>
                       <Description>{description}</Description>
                   </Col>
               </SecondRow>
           </Col>
        </StyledRow>
    )
};

export default TableItem;
