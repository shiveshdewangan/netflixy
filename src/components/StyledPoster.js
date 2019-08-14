import styled, { keyframes } from "styled-components";
import { devices } from "../utils/styledUtils";

const show = keyframes`
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledPoster = styled.img`
  ${"" /* width and height now check if the "isExpanded" prop exists */}
  width: ${props =>
    props.isExpanded
      ? props.theme.posterWidthExpanded
      : props.theme.posterWidth};
  height: ${props =>
    props.isExpanded
      ? props.theme.posterHeightExpanded
      : props.theme.posterHeight};
  border-radius: 4px;

  ${"" /* ANIMATE */}
  opacity: 0;
  transform: translateY(-100px);
  animation: ${show} 500ms forwards;
  animation-delay: ${props =>
    props.index ? `${props.index / 10}s` : "initial"}

  ${"" /* extra styling if the movie has prop, isExpanded */}
  ${devices.md`
    position: ${props => (props.isExpanded ? "absolute" : "initial")};
    top: ${props => (props.isExpanded ? "-10%" : "initial")};
    left: ${props => (props.isExpanded ? "-6%" : "initial")};
  `}
`;

export default StyledPoster;
