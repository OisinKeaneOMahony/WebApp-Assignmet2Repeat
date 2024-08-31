import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { TvShowsContext } from "../../contexts/tvShowsContext";

const RemoveFromTvShowsFavouritesIcon = ({ tvShow }) => {
  const context = useContext(TvShowsContext);

  const handleRemoveFromTvShowsFavourites = (e) => {
    e.preventDefault();
    context.removeFromTvShowsFavourites(tvShow);
  };
  return (
    <IconButton
      aria-label="remove from TV shows favourites"
      onClick={handleRemoveFromTvShowsFavourites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromTvShowsFavouritesIcon;