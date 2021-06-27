export interface Movie {
    id: string;
    name: string;
    image: string;
    rating: number;
}

export interface Cast {
    name: string;
    characterName: string;
    image: string;
}

export interface MovieDetails {
    id: string;
    genres: string[];
    schedule: string[];
    rating: number;
    network: string;
    image: string;
    name: string;
    cast: Cast[];
    summary: string;
    status: string;
}

export interface MovieResponse {
    show: {
        id: string
        name: string;
        image: { original: string; };
        rating: { average: number; };
    };
}

export interface CastResponse {
    person: {
        name: string;
        image: {
            original: string;
        }
    };
    character: {
        name: string;
    }
}
