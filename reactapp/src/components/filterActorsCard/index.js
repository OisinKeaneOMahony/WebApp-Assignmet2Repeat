import React from "react";  // useState/useEffect redundant 
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useQuery } from "react-query";
import Spinner from '../spinner';
import { getActors } from "../../api/tmdb-api";
import image from '../../images/pexels-dziana-hasanbekava-5480827.jpg'

const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

  export default function FilterActorsCard(props) {
    const { error, isLoading, isError } = useQuery("actors", getActors);

    if (isLoading) {
      return <Spinner />;
    }

    if (isError) {
      return <h1>{error.message}</h1>;
    }

    const handleChange = (e, type, value) => {
      e.preventDefault();
      props.onUserInput(type, value); // NEW
    };

    const handleTextChange = (e, props) => {
      handleChange(e, "name", e.target.value);
    };

  return (
    <Card 
      sx={{
        maxWidth: 340,
        minHeight: 700,
        backgroundColor: "rgb(10,100,200)"
      }} 
      variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="medium" />
          Search for Actors.
        </Typography>
        <TextField
        sx={formControl}
        id="filled-search"
        label="Search field"
        type="search"
        variant="filled"
        value={props.titleFilter}
        onChange={handleTextChange}
        />
      </CardContent>
      <CardMedia
        sx={{ height: 300 }}
        image={image}
        title="Search"
      />
      <CardContent>
        <Typography variant="h5" component="h1">
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}