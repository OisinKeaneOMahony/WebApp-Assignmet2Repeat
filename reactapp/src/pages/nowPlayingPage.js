import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getNowPlaying } from "../api/tmdb-api";
import AddToPlaylistIcon from "../components/cardIcons/addToMustWatch";

const NowPlayingPage = () => {
    const { data, error, isLoading, isError } = useQuery('nowPlaying', getNowPlaying);

    if (isLoading) return <Spinner />;
    if (isError) return <h1>{error.message}</h1>
    const movies = data.results;

    return(
        <PageTemplate
            title="Now Playing Movies"
            movies={movies}
            action={(movie) => {
                return <AddToPlaylistIcon movie={movie} />
            }}
        />
    );
};
export default NowPlayingPage;