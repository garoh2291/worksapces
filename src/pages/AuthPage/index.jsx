import { Outlet } from "react-router-dom";
import { StyledAuth } from "../../componenets/styles/auth.styles";

export const AuthPage = () => {
  return (
    <StyledAuth>
      <Outlet />
    </StyledAuth>
  );
};
