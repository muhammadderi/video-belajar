import { Navigate } from "react-router-dom";
import useUserLogin from "../zustand/User";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserLogin();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
