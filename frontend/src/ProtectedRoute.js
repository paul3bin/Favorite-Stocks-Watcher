import { Outlet, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import { PageNotFound } from "./pages/PageNotFound";

export function ProtectedRoute(props) {
  const [cookies] = useCookies(["token"]);

  return cookies.token ? <Outlet /> : <PageNotFound />;
  // return cookies.token ? <Outlet /> : <Navigate to="/login" />;
}
