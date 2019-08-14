import React from "react";
import { Route } from "react-router-dom";
import StyledMovieContainer from "./StyledMovieContainer";
import MoviesContainer from "../containers/MoviesContainer";
import MovieDetailsContainer from "../containers/MovieDetailsContainer";

const App = () => {
  return (
    <StyledMovieContainer>
      <Route exact path="/" component={MoviesContainer} />
      <Route exact path="/movies/:id" component={MovieDetailsContainer} />
    </StyledMovieContainer>
  );
};

export default App;
