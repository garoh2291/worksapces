import { useContext } from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

import {
  ButtonWrapper,
  Heading,
  MoreButton,
  StyledMain,
} from "../styles/dashboard.styles";
import { CardBoard } from "./CardBoard";
import { SearchField } from "../shared/SearchField";
import { WorkspaceContext } from "../../context";
import { Filter } from "../shared/Filter";

export const Main = () => {
  const { queryObject, changePage } = useContext(WorkspaceContext);
  const {
    pages: { page, pages },
    status,
  } = useSelector((state) => state.workspace);

  const lastPage = page === pages || pages === 0;

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
      <Filter queryObject={queryObject} />
      <CardBoard />
      <ButtonWrapper>
        {!lastPage && (
          <MoreButton
            variant="contained"
            onClick={() => changePage("page", queryObject.page + 1)}
          >
            {status === "loading" ? (
              <CircularProgress color="success" size={25} />
            ) : (
              "More"
            )}
          </MoreButton>
        )}
      </ButtonWrapper>
    </StyledMain>
  );
};
