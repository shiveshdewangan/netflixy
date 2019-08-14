import { createAction } from "redux-actions";
import { normalize, schema } from "normalizr";
import {
  API,
  SET_MOVIES,
  SELECT_MOVIE,
  RATE_MOVIE
} from "../constants/actionTypes";
import { apiPayloadCreator } from "../utils/appUtils";
import { GET_MOVIES, GET_RECOMMENDED_MOVIES } from "../constants/labels";
import { showToast } from "./toastActions";
import { recommendedMovies } from "../constants/toasts";

const getMoviesAC = createAction(API, apiPayloadCreator);
export const getMovies = () =>
  getMoviesAC({
    url: "/vcvx0",
    onSuccess: setMovies,
    label: GET_MOVIES
  });

//rate movie action creator
export const rateMovie = createAction(RATE_MOVIE, (rating, movieId) => ({
  rating,
  movieId
}));

//recommend movie
const recommendMoviesAC = createAction(API, apiPayloadCreator);
export const recommendMovies = ratedMovies =>
  recommendMoviesAC({
    url: "",
    method: "POST",
    data: ratedMovies,
    label: GET_RECOMMENDED_MOVIES,
    onSuccess: setRecommendedMovies
  });

function setRecommendedMovies(res) {
  console.log(
    `%c Recommended Movies are here 👉  ${res.uri}`,
    "background:yellow;color:black;font-weight:bold"
  );
  return showToast("success", recommendedMovies);
}

//this function will be called upon a successful data fetch  - and passed the retrieved data.
function setMovies(movies) {
  //data returned from the server is an array of objects
  //we gotta normalize this data before sending it off to the reducers.
  const movieSchema = new schema.Entity("movies");
  const movieListSchema = new schema.Array(movieSchema);
  //in computer programming, a schema is the organization or structire for a database.
  const normalizedData = normalize(movies, movieListSchema);
  return {
    type: SET_MOVIES,
    payload: normalizedData.entities.movies
  };
}

export const selectMovie = createAction(SELECT_MOVIE);
