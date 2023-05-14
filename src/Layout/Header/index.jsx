import { LogoutWrapper } from "../../componenets/styles/dashboard.styles";
import { StyledHeader } from "../../componenets/styles/layout.styles";
import LogoutIcon from "@mui/icons-material/Logout";

export const Header = ({ cb }) => {
  return (
    <StyledHeader>
      <h6>WORKSPACE</h6>
      <LogoutWrapper onClick={cb}>
        Logout <LogoutIcon />
      </LogoutWrapper>
    </StyledHeader>
  );
};
