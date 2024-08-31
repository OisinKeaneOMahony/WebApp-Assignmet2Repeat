import React, { useContext } from "react";
import { TvShowsContext } from "../../contexts/tvShowsContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToTvShowsFavouritesIcon = ({ tvShow }) => {
  const context = useContext(TvShowsContext);

  const handleAddToTvShowsFavourites = (e) => {
    e.preventDefault();
    context.addToTvShowsFavourites(tvShow);
  };

  return (
    <IconButton aria-label="add to favourites" onClick={handleAddToTvShowsFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToTvShowsFavouritesIcon;