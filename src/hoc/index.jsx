import { useAuth } from "../utils/index";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to={"/auth/login"} state={{ from: location }} />;
  }

  return children;
};
