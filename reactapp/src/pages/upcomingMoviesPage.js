import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcoming } from "../api/tmdb-api";
import AddToPlaylistIcon from "../components/cardIcons/addToMustWatch";
import {useQuery} from "react-query";
import Spinner from "../components/spinner"

const UpcomingMoviesPage = (props) => {
    const { data, error, isLoading, isError } = useQuery('upcomingMovies', getUpcoming);
    
    if (isLoading) return <Spinner />
    if (isError) return <h1>{error.message}</h1>
    const movies = data.results || [];
    const favorites = movies.filter((m) => m.favorites);
    localStorage.setItem("favorites", JSON.stringify(favorites));

    return (
        <PageTemplate
            title="Upcoming Movies"
            movies={movies}
            action={(movie) => {
                return <AddToPlaylistIcon movie={movie} />
            }}
        />
    );
};

export default UpcomingMoviesPage;