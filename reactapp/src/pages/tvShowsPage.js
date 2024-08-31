import React from "react";
import { getTvShows } from "../api/tmdb-api";
import PageTemplate from '../components/templateTvShowListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToTvShowsFavouritesIcon from '../components/cardIcons/addToFavouriteTvShows'

const TvShowsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('tvshows', getTvShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvShows = data.results;

  // Redundant, but necessary to avoid app crashing.
  const tvShowsFavourites = tvShows.filter(t => t.tvShowsFavourite)
  localStorage.setItem('favourites', JSON.stringify(tvShowsFavourites))

  return (
    <PageTemplate
      title="Discover TV Shows"
      tvShows={tvShows}
      action={(tvShow) => {
        return <AddToTvShowsFavouritesIcon tvShow={tvShow} />
      }}
    />
);
};
export default TvShowsPage;