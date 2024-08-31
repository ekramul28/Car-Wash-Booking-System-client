import { jwtDecode } from "jwt-decode";
export interface CustomJwtPayload {
  userId: string;
  role: string;
  imageUrl: string;
  email: string;
  sub?: string;
  exp?: number;
  iat?: number;
}

export const verifyToken = (token: string): CustomJwtPayload => {
  return jwtDecode<CustomJwtPayload>(token);
};
