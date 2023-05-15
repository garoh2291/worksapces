import { useSelector } from "react-redux";
import { StyledFilter } from "../styles/dashboard.styles";
import { Option } from "./Option";

export const Filter = () => {
  const { user } = useSelector((state) => state.workspace);

  return (
    <StyledFilter>
      <Option value={""} label={"All Workspaces"} />
      <Option value={user} label={"My Workspaces"} />
    </StyledFilter>
  );
};
