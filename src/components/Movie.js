import React from "react";
import StyledMovie from "./StyledMovie";
import StyledPoster from "./StyledPoster";
import StyledMovieTitle from "./StyledMovieTitle";
import StyledMovieLengthYear from "./StyledMovieLengthYear";

const Movie = ({ poster, name, duration, year, index }) => (
  <StyledMovie>
    <StyledPoster src={poster} alt={`Movie: ${name}`} index={index} />
    <StyledMovieTitle>{name}</StyledMovieTitle>
    <StyledMovieLengthYear>{`${duration} ${year}`}</StyledMovieLengthYear>
  </StyledMovie>
);

export default Movie;
