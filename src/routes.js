import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/Routes/protectedRoute";
import LoginRoute from "./components/Routes/loginRoute";
import PublicRoute from "./components/Routes/publicRoute";
import {
  loginRoutes,
  protectedRoutes,
  publicRoutes,
} from "./constants/routeNavigators";

const Router = () => {
  return (
    <Routes>
      <Route element={<LoginRoute />}>
        {loginRoutes.map((route, index) => {
          return (
            <Route
              path={route.path}
              element={route.element}
              key={String(index)}
            />
          );
        })}
      </Route>


      <Route element={<ProtectedRoute />}>
        {protectedRoutes.map((route, index) => {
          return (
            <Route
              path={route.path}
              element={route.element}
              key={String(index)}
            />
          );
        })}
      </Route>

      <Route element={<PublicRoute />}>
        {publicRoutes.map((route, index) => {
          return (
            <Route
              path={route.path}
              element={route.element}
              key={String(index)}
            />
          );
        })}
      </Route>
    </Routes>
  );
};

export default Router;
