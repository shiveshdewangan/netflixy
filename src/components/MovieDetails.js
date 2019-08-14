import React, { Component, Fragment } from "react";
import ReactStars from "react-stars";
import StyledHeader from "./StyledHeader";
import StyledHeaderLink from "./StyledHeaderLink";
import FontAwesomeIcon from "./FontAwesomeIcon";
import styled, { keyframes } from "styled-components";
import StyledPoster from "./StyledPoster";
import StyledMovieTitle from "./StyledMovieTitle";
import StyledMovieLengthYear from "./StyledMovieLengthYear";
import { devices } from "../utils/styledUtils";

const StyledMovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  ${devices.md`
    flex-direction: row;
  `};
`;

const show = keyframes`
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const StyledMovieInfo = styled.div`
  padding: 2rem 0 1rem 0;
  ${"" /* ANIMATE */} ${"" /* eslint-disable */}
  &,
  & > * {
    transform: translateX(-150px);
    opacity: 0;
    animation-name: ${show};
    animation-duration: 500ms;
    animation-fill-mode: forwards;
  }

  ${devices.md`
    ${
      "" /* the left margin is required to accomodate the space left when the poster image is positioned absolutely i.e moved up */
    }
    margin-left: 13rem;
  `};
`;

const StyledMovieDesc = styled.div`
  margin-top: 30px;
  font-size: 0.8rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.5);
  animation-delay: 0.4s;
`;

const StyledSmallBtn = styled.a`
  background: #eb6259;
  border: none;
  border-radius: 20px;
  color: #fff;
  font-size: 12px;
  line-height: 1.5;
  display: inline-block;
  padding: 8px 17px;
  margin: 20px 0 15px 0;
  text-transform: uppercase;
  z-index: 10;
  outline: none !important;
  cursor: pointer;
  animation-delay: 0.5s;
  &:active {
    transform: translateY(4px);
  }
`;

class MovieDetails extends Component {
  static defaultProps = {
    selectedMovie: {
      name: "",
      poster: "",
      year: "",
      duration: "",
      trailer: "",
      details: "",
      id: "0"
    }
  };

  componentDidMount() {
    // react router passes some props to every route component. The MovieDetailsContainer component has forwarded those to this component as well.
    //For example when you hit the route /movies/:id, the "id" can be gotten from this.props.match.params.id - thanks to react-router.
    const movieId = +this.props.match.params.id;
    this.props.selectMovie(movieId);
  }

  _handleRating = rating => {
    const movieId = +this.props.match.params.id;
    this.props.rateMovie(rating, movieId);
  };

  render() {
    const {
      poster,
      name,
      duration,
      details,
      year,
      rating
    } = this.props.selectedMovie;
    return (
      <Fragment>
        {/* header */}
        <StyledHeader>
          <StyledHeaderLink href="/">
            <FontAwesomeIcon icon="chevron-left" text="Go back" />
          </StyledHeaderLink>
        </StyledHeader>
        {/* actual movie details */}
        <StyledMovieDetails>
          {/* Note the "isExpanded" prop passed to StyledPoster   */}
          <StyledPoster src={poster} alt={`Movie: ${name}`} isExpanded />
          <StyledMovieInfo>
            {/* Note the "isLarge" prop passed to StyledMovieTitle   */}
            <StyledMovieTitle isLarge> {name} </StyledMovieTitle>
            <StyledMovieLengthYear
            >{`${duration} ${year}`}</StyledMovieLengthYear>
            <StyledMovieDesc>{details}</StyledMovieDesc>
            <StyledSmallBtn>watch trailer</StyledSmallBtn>
            {/* ReactStars is a simple component from the OSS module, https://github.com/n49/react-stars */}
            <ReactStars
              count={5}
              size={24}
              color2={"#ffd700"}
              value={rating}
              onChange={this._handleRating}
            />
          </StyledMovieInfo>
        </StyledMovieDetails>
      </Fragment>
    );
  }
}

export default MovieDetails;
