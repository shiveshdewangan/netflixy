import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { persiststore } from "../store";
import StyledContainer from "../components/StyledContainer";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import theme from "../constants/theme";
import App from "../components/App";

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persiststore} loading={null}>
        <ThemeProvider theme={theme}>
          <StyledContainer>
            <Router>
              <App />
            </Router>
            <ToastContainer />
          </StyledContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default Root;
