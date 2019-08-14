import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "./FontAwesomeIcon";
import StyledHeader from "./StyledHeader";
import StyledHeaderTitle from "./StyledHeaderTitle";
import StyledHorizontalScroll from "./StyledHorizontalScroll";
import Movie from "./Movie";
import StyledFooter from "./StyledFooter";
import StyledLargeBtn from "./StyledLargeBtn";
import HelpMenuContainer from "../containers/HelpMenuContainer";
import StyledLoader from "./StyledLoader";
import StyledMovieLink from "./StyledMovieLink";
import { rateAMovie } from "../constants/toasts";

class Movies extends Component {
  state = {};
  static defaultProps = {
    movies: [],
    loading: true
  };
  static propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
  };

  componentDidMount() {
    //make request to fetch movies, only if we haven't done so before.
    //otherwise, the previous movies - thanks to redux persist, will be loaded.
    if (this.props.movies.length === 0) {
      this.props.getMovies();
    }
  }

  _handleMovieRecommendations = () => {
    //get rated movies
    const ratedMoviesList = this.props.movies.filter(movies => movies.rating);

    //if no rated movies so far, display toast asking user to rate at least one movie
    if (ratedMoviesList.length === 0) {
      this.props.showToast("error", rateAMovie);
      return;
    }
    //else, dispatch getRecommendations action creator - pass ratedMovies parameter
    this.props.recommendMovies(ratedMoviesList);
  };

  render() {
    return (
      <Fragment>
        <StyledHeader>
          {/* Help icon extracted to a separate component */}
          <HelpMenuContainer />
          <StyledHeaderTitle>The Movie Recommender</StyledHeaderTitle>
          <FontAwesomeIcon icon="search" />
        </StyledHeader>
        {/* the list of movies */}
        <StyledHorizontalScroll>
          {this.props.loading ? (
            <StyledLoader />
          ) : (
            this.props.movies.map((movie, index) => (
              <StyledMovieLink href={`/movies/${movie.id}`} key={movie.id}>
                <Movie
                  name={movie.name}
                  poster={movie.poster}
                  duration={movie.duration}
                  year={movie.year}
                  index={index}
                />
              </StyledMovieLink>
            ))
          )}
        </StyledHorizontalScroll>
        <StyledFooter>
          <StyledLargeBtn onClick={this._handleMovieRecommendations}>
            Get Recommended Movies
          </StyledLargeBtn>
        </StyledFooter>
      </Fragment>
    );
  }
}

export default Movies;
