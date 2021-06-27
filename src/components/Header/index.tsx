import React from 'react';
import styled from 'styled-components';
import { Container , Row, Col } from 'reactstrap';

const Wrapper = styled.div`
  background-color: #dddddd;
  width: 100%;
  height: 500px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  padding-top: 50px;
  
  @media (max-width: 576px) {
    height: 300px ;
  }
`;

const Title = styled.h3`
    text-align: left;
`;

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <Col><Title>Tv Bland</Title></Col>
                </Row>
            </Container>
        </Wrapper>
    );
};

export default Header;
