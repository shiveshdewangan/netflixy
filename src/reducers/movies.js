//import handleActions NOT handleAction - note plural form.
import { handleActions } from "redux-actions";
import produce from "immer";
import { SET_MOVIES, RATE_MOVIE } from "../constants/actionTypes";

export default handleActions(
  {
    [SET_MOVIES]: (state, action) => action.payload,
    [RATE_MOVIE]: produce((state, action) => {
      const { movieId, rating } = action.payload;
      state[movieId].rating = rating;
    })
  },
  {}
);
