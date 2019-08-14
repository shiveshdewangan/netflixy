import React from "react";
import FontAwesomeIcon from "./FontAwesomeIcon";
import StyledHeader from "./StyledHeader";
import StyledHeaderTitle from "./StyledHeaderTitle";

const Header = () => (
  <StyledHeader>
    <FontAwesomeIcon icon="bars" text="help" />
    <StyledHeaderTitle>The Movie Recommender</StyledHeaderTitle>
    <FontAwesomeIcon icon="search" />
  </StyledHeader>
);
export default Header;
