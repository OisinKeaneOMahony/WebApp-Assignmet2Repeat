import React, { useState } from "react";
import Header from "../headerTvShowList";
import FilterCard from "../filterTvShowsCard";
import TvShowList from "../tvShowList";
import Grid from "@mui/material/Grid";

function TvShowListPageTemplate({ tvShows, title, action }) {
    const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  console.log(tvShows)

  let displayedTvShows = tvShows
    .filter((t) => {
      return t.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((t) => {
      return genreId > 0 ? t.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <TvShowList action={action} tvShows={displayedTvShows}></TvShowList>
      </Grid>
    </Grid>
  );
}
export default TvShowListPageTemplate;