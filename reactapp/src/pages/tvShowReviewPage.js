import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateTvShowPage";
import TvShowReview from "../components/tvShowReview";

const TvShowReviewPage = (props) => {
  let location = useLocation();
  const {tvShow, tvShowReview} = location.state;

  return (
    <PageTemplate tvShow={tvShow}>
      <TvShowReview tvShowReview={tvShowReview} />
    </PageTemplate>
  );
};

export default TvShowReviewPage;