import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getTrending } from "../api/tmdb-api";
import AddToPlaylistIcon from "../components/cardIcons/addToMustWatch";

const TrendingMoviesPage = () => {
    const { data, error, isLoading, isError } = useQuery('trendingMovies', getTrending);

    if (isLoading) return <Spinner />;
    if (isError) return <h1>{error.message}</h1>
    const movies = data.results;

    return(
        <PageTemplate
            title="Trending Movies"
            movies={movies}
            action={(movie) => {
                return <AddToPlaylistIcon movie={movie} />
            }}
        />
    );
};
export default TrendingMoviesPage;
//adding this as I accidently commited this file in the Inital commit :)