import React from "react";

const TvShowReview =  ({ tvShowReview }) => {
  return (
    <>
      <p>Review By: {tvShowReview.author} </p>
      <p>{tvShowReview.content} </p>
    </>
  );
};
export default TvShowReview