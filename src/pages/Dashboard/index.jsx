import { useCallback, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { StyledDashboard } from "../../componenets/styles/dashboard.styles";
import { generateQuery, removeToken } from "../../utils";
import { WorkspaceContext } from "../../context";
import { getWorkSpacesThunk } from "../../redux/slices/workspace";
import { Loader } from "../../componenets/shared/Loader";
import { Header } from "../../Layout/Header";

export const DashboardPage = () => {
  const { workspaces } = useSelector((state) => state.workspace);
  const { queryObject } = useContext(WorkspaceContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cb = useCallback(() => {
    removeToken();
    navigate("/auth/login");
  }, [navigate]);

  useEffect(() => {
    const query = generateQuery(queryObject);
    dispatch(getWorkSpacesThunk({ query, cb }));
  }, [dispatch, cb, queryObject]);

  if (!workspaces) {
    return <Loader />;
  }
  return (
    <>
      <Header cb={cb} />
      <StyledDashboard>
        <Outlet />
      </StyledDashboard>
    </>
  );
};
