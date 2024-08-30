import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getSimilar } from "../api/tmdb-api";
import AddToPlaylistIcon from '../components/cardIcons/addToMustWatch';

const SimilarMoviesPage = () => {
    const { id } = useParams();
    const { data: similar, isLoading, isError, error } = useQuery(['similar', { id }], getSimilar);

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>Error: {error.message}</p>
    }

    return (
        <PageTemplate
            title="Similar Movies"
            movies={similar.results}
            action={(movie) => <AddToPlaylistIcon movie={movie} />}
        />
    );
};
export default SimilarMoviesPage;