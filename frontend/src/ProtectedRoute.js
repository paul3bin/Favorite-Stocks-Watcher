import { Outlet, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export function ProtectedRoute(props) {
  const [cookies] = useCookies(["token"]);

  return cookies["token"] ? <Outlet /> : <Navigate to="/login" />;
}
