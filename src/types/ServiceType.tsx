import { TService } from "@/pages/Service/Service";
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
  startTime: string;
  endTime: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};
