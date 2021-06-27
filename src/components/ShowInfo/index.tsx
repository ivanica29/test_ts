import React from 'react';
import styled from "styled-components";
import TableItem from "../TableItem";

const Wrapper = styled.div`
    margin-right: 15px;
`;

const ShowInfo: React.FC<{ status: string, schedule: string[], network: string, genres: string[] }> = ({ status, schedule, network, genres }) => (
    <Wrapper>
        <TableItem title="Streamed on" description={network} />
        <TableItem title="Schedule" description={schedule.join()} />
        <TableItem title="Status" description={status} />
        <TableItem title="Genres" description={genres.join()} />
    </Wrapper>
)

export default ShowInfo;
