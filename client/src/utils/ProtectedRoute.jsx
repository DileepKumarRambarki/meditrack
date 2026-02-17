import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./Authcontext";

function ProtectedRoute({ allowedRole }) {
  const { isValid, role } = useAuth();

  if (!isValid) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
