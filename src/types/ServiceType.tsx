import { TUser } from "@/redux/features/auth/authSlice";

export type TServiceData = {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
};

export type TSlot = {
  _id: string;
  createdAt: string;
  date: string;
  endTime: string;
  isBooked: string;
  service: TService;
  startTime: string;
  updatedAt: string;
};

export type TSlotData = {
  date: string;
  startTime: string;
  endTime: string;
  serviceId: string;
  slotId: string;
  userId?: string;
};

export type TBooking = {
  _id: string;
  userId: TUser;
  serviceId: TService;
  slotId: TSlot;
  date: string;
  payment: string;
  status: string;
  startTime: string;
  endTime: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TService = {
  id: number;
  _id: string;
  image: string[];
  title: string;
  description: string;
  price: string;
  duration: string;
  isDeleted: boolean;
};
export type TMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};

export type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  role: "user" | "admin";
  imageUrl: string; // Assuming role can be either "user" or "admin"
  address: string;
  isDeleted: boolean;
  userStatus: "in-progress" | "block" | "inactive"; // Assuming userStatus could have additional statuses
  createdAt: string; // Date as ISO string
  updatedAt: string; // Date as ISO string
};
