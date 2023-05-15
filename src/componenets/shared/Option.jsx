import { useContext } from "react";
import { FilterItem } from "../styles/dashboard.styles";
import { WorkspaceContext } from "../../context";

export const Option = ({ label, value, handleClick }) => {
  const { changeSearch, queryObject } = useContext(WorkspaceContext);

  return (
    <FilterItem
      value={value === queryObject.userId && "100%"}
      onClick={() => changeSearch("userId", value)}
    >
      {label}
    </FilterItem>
  );
};
