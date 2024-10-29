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
