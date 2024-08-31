import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { ActorsContext } from "../../contexts/actorsContext";

const RemoveFromfavouriteActorsIcon = ({ actor }) => {
  const context = useContext(ActorsContext);

  const handleRemoveFromfavouriteActors = (e) => {
    e.preventDefault();
    context.removeFromfavouriteActors(actor);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromfavouriteActors}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromfavouriteActorsIcon;