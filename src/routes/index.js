import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "../hoc";
import { DashboardPage } from "../pages/Dashboard";
import { AuthPage } from "../pages/AuthPage";
import { Registration } from "../componenets/Registration";
import { Login } from "../componenets/Login";
import { Main } from "../componenets/Main";

export const RouteComponents = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <DashboardPage />
          </RequireAuth>
        }
      >
        <Route path="/" element={<Main />} />
      </Route>
      <Route path="auth" element={<AuthPage />}>
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};
