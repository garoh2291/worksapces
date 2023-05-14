import React from "react";
import { StyledText } from "../styles/dashboard.styles";

export const SlugText = ({ available, suggested, confirmGenerated }) => {
  if (available) {
    return <StyledText available={available}>Slug is available</StyledText>;
  }
  return (
    <StyledText available={available}>
      You Can Choose <span onClick={confirmGenerated}>{suggested.value}</span>
    </StyledText>
  );
};
