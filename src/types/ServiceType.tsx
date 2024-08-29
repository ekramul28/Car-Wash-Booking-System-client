import { TService } from "@/pages/Service/Service";

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
