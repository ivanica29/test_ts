import React from 'react';
import {PaginationItem, PaginationLink, Pagination as BasicPagination} from "reactstrap";
import styled from "styled-components";
import {Movie} from "../../interfaces";

const StyledPaginationNumbers = styled.div`
    display: flex;
    @media(max-width: 576px) {
      display: none;
    }
`;

const Mobile = styled.div`
  display: none;

  @media (max-width: 576px) {
    margin: 0 10px;
    align-items: center;
    display: flex;
    flex-direction: row;
  }
`;

const Pagination: React.FC<{ page: number, maxPage: number, setPage: (page: number) => void }> =
    ({ page, maxPage, setPage }) => {
    return (
        <BasicPagination size="sm">
            <PaginationItem disabled={page === 1} onClick={() => {
                if (page !== 1) {
                    setPage(1);
                }
            }}>
                <PaginationLink first />
            </PaginationItem>
            <PaginationItem disabled={page === 1} onClick={() => {
                if (page !== 1) {
                    setPage(page - 1);
                }
            }}>
                <PaginationLink previous />
            </PaginationItem>
            <StyledPaginationNumbers>
                {Array(maxPage).fill(null).map((_, i) => {
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
            </StyledPaginationNumbers>

            <Mobile>
                {page} / {maxPage}
            </Mobile>

            <PaginationItem disabled={maxPage=== page} onClick={() => {
                if (maxPage !== page ) {
                    setPage(page + 1);
                }
            }}>
                <PaginationLink next/>
            </PaginationItem>
            <PaginationItem disabled={maxPage === page} onClick={() => {
                if (maxPage !== page) {
                    setPage(maxPage);
                }
            }}>
                <PaginationLink last />
            </PaginationItem>
        </BasicPagination>
    );
};

export default Pagination;
