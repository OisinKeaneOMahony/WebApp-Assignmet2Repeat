import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromMustWatchIcon = ({ movie }) => {
    const context = useContext(MoviesContext);

    const handleRemoveFromPlaylist = (e) => {
        e.preventDefault();
        context.removeFromMustWatch(movie);
    };

    return(
        <IconButton
            aria-label="Remove From Playlist"
            onClick={handleRemoveFromPlaylist}
        >
            <DeleteIcon color="primary" fontSize="large" />
        </IconButton>
    );
};
export default RemoveFromMustWatchIcon;