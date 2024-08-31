import React, { useContext } from "react";
import { ActorsContext } from "../../contexts/actorsContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddTofavouriteActorsIcon = ({ actor }) => {
  const context = useContext(ActorsContext);

  const handleAddTofavouriteActors = (e) => {
    e.preventDefault();
    context.addTofavouriteActors(actor);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddTofavouriteActors}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddTofavouriteActorsIcon;