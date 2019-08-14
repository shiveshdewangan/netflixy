import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "../reducers";
import api from "../middleware/api";
import toastMiddleware from "../middleware/toasts";

const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(api, toastMiddleware)
  );

  const persiststore = persistStore(store);
  return { store, persiststore };
};

export default configureStore;
