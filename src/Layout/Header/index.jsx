import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  LogoutWrapper,
  StyledHeader,
} from "../../componenets/styles/layout.styles";

export const Header = ({ cb }) => {
  return (
    <StyledHeader>
      <Link to={"/"}>WORKSPACES</Link>

      <LogoutWrapper onClick={cb}>
        Logout <LogoutIcon />
      </LogoutWrapper>
    </StyledHeader>
  );
};
