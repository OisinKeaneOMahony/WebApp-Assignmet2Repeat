import React, { useContext } from "react";
import PageTemplate from "../components/templateTvShowListPage";
import { TvShowsContext } from "../contexts/tvShowsContext";
import { useQueries } from "react-query";
import { getTvShow } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromTvShowsFavourites from "../components/cardIcons/removeFromFavouriteTvShows";
import WriteTvShowReview from "../components/cardIcons/writeTvShowReview";

const FavouriteTvShowsPage = () => {
  const {tvShowsFavourites: tvShowIds } = useContext(TvShowsContext);

  // Create an array of queries and run in parallel.
  const favouriteTvShowQueries = useQueries(
    tvShowIds.map((tvShowId) => {
      return {
        queryKey: ["tvShow", { id: tvShowId }],
        queryFn: getTvShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteTvShowQueries.find((t) => t.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const tvShows = favouriteTvShowQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  return (
    <PageTemplate
      title="Favourite TV Shows"
      tvShows={tvShows}
      action={(tvShow) => {
        return (
          <>
            <RemoveFromTvShowsFavourites tvShow={tvShow} />
            <WriteTvShowReview tvShow={tvShow} />
          </>
        );
      }}
    />
  );
};

export default FavouriteTvShowsPage;