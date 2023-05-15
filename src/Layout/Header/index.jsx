import { LogoutWrapper } from "../../componenets/styles/dashboard.styles";
import { StyledHeader } from "../../componenets/styles/layout.styles";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

export const Header = ({ cb }) => {
  return (
    <StyledHeader>
      <Link to={"/"}>WORKSPACE</Link>

      <LogoutWrapper onClick={cb}>
        Logout <LogoutIcon />
      </LogoutWrapper>
    </StyledHeader>
  );
};
