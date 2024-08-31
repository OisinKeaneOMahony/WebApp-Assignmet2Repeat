import React from "react";
import { getActors } from "../api/tmdb-api";
import PageTemplate from '../components/templateActorListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouriteActorsIcon from '../components/cardIcons/addToFavouriteActors'

const ActorsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('actors', getActors)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favouriteActors = actors.filter(a => a.actorFavourite)
  localStorage.setItem('favouriteActors', JSON.stringify(favouriteActors))

  return (
    <PageTemplate
      title= "Popular Actors"
      actors={actors}
      action={(actor) => {
        return <AddToFavouriteActorsIcon actor={actor} />
      }}
    />
);
};
export default ActorsPage;