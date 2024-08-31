import React, { useState } from "react";

export const TvShowsContext = React.createContext(null);

const TvShowsContextProvider = (props) => {
  const [tvShowsFavourites, setTvShowsFavourites] = useState( [] )
  const [myTvShowReviews, setMyTvShowReviews] = useState( {} ) 

  const addToTvShowsFavourites = (tvShow) => {
    let newTvShowsFavourites = [...tvShowsFavourites];
    if (!tvShowsFavourites.includes(tvShow.id)) {
      newTvShowsFavourites.push(tvShow.id);
    }
    setTvShowsFavourites(newTvShowsFavourites);
  };

  const removeFromTvShowsFavourites = (tvShow) => {
    setTvShowsFavourites( tvShowsFavourites.filter(
      (tId) => tId !== tvShow.id
    ) )
  };

  const addTvShowReview = (tvShow, tvShowReview) => {
    setMyTvShowReviews( {...myTvShowReviews, [tvShow.id]: tvShowReview } )
  };

 return (
    <TvShowsContext.Provider
      value={{
        tvShowsFavourites,
        addToTvShowsFavourites,
        removeFromTvShowsFavourites,
        addTvShowReview,
      }}
    >
      {props.children}
    </TvShowsContext.Provider>
  );
};

export default TvShowsContextProvider;