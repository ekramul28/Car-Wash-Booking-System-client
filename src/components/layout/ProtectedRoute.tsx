import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, useCurrentToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
import { verifyToken } from "@/utils/VeryfiedToken";

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRoute): JSX.Element => {
  const token = useAppSelector(useCurrentToken);
  const dispatch = useAppDispatch();

  let user;

  if (token) {
    try {
      user = verifyToken(token);
    } catch (error) {
      console.error("Invalid token:", error);
      dispatch(logout());
      return <Navigate to="/login" replace />;
    }
  }
  console.log(user);
  if (!token || (role && user?.role !== role)) {
    dispatch(logout());
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
