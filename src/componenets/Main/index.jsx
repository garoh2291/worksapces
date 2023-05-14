import React from "react";
import { Heading, StyledMain } from "../styles/dashboard.styles";
import { CardBoard } from "./CardBoard";
import { SearchField } from "../shared/SearchField";

export const Main = () => {
  return (
    <StyledMain>
      <Heading>
        <h2>
          Discover & Share <span> Inspiring Workspaces</span>
        </h2>
        <p>
          Experience a vibrant community of professionals, where creativity
          thrives and connections flourish in our dynamic workspaces.
        </p>
      </Heading>
      <SearchField />
      <CardBoard />
    </StyledMain>
  );
};
