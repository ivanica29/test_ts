import React from 'react';
import TableItem from "../TableItem";
import { Cast } from "../../interfaces";

const Starring: React.FC<{ casts: Cast[]}> = ({casts }) =>  (
    <div>
        {casts.map((cast: Cast) => (
            <TableItem image={cast.image} title={cast.name} description={cast.characterName} />
        ))}
    </div>
);

export default Starring;
