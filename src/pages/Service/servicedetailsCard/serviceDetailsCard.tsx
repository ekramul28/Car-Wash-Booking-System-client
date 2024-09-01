import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  useBookingSlotsMutation,
  useGetSlotsQuery,
  useUpdateSlotsMutation,
} from "@/redux/features/slots/slots";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { TSlot, TSlotData } from "@/types/ServiceType";
import { toast } from "sonner";

type TimeSlot = {
  time: string;
  isBooked: boolean;
};

type ServiceDetails = {
  _id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  availableTimeSlots: TimeSlot[];
};

type ServiceDetailsCardProps = {
  serviceDetails: ServiceDetails;
  role: string;
};

const ServiceDetailsCardDialog: React.FC<ServiceDetailsCardProps> = ({
  serviceDetails,
  role,
}) => {
  const user = useAppSelector(selectCurrentUser);
  const [bookingSlots, { isLoading }] = useBookingSlotsMutation();
  const [updateSlots] = useUpdateSlotsMutation();

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<TSlotData | null>(null);

  const formattedDate = date?.toISOString().slice(0, 10);
  console.log(formattedDate);
  console.log({ formattedDate });
  const userInfo = { serviceId: serviceDetails?._id, date: formattedDate };

  // slots data fetch
  const { data } = useGetSlotsQuery(userInfo);
  const slotTime = data?.data;

  //handleSlot
  const handleSlotClick = (slot: TSlot) => {
    if (slot.isBooked === "available") {
      const slotData: TSlotData = {
        date: slot.date,
        startTime: slot.startTime,
        endTime: slot.endTime,
        serviceId: slot.service._id,
        slotId: slot._id,
        userId: user?.userId,
      };

      setSelectedSlot(slotData);
    }
  };

  // Function to handle booking
  const handleBooking = async () => {
    if (selectedSlot) {
      const result = await bookingSlots(selectedSlot).unwrap();
      if (result.success) {
        const updateData = {
          id: selectedSlot.slotId,
          dataUp: { isBooked: "booked" },
        };
        const update = await updateSlots(updateData);
        if (update.data.success) {
          toast.success("Booking successful");
        }
      }
    }
    setTimeout(() => {
      document.getElementById("dialog-close-btn")?.click();
    }, 100);
  };

  return (
    <DialogContent className="w-[90%] h-[90%] overflow-y-auto overflow-x-hidden">
      <DialogHeader>
        <DialogTitle>{serviceDetails?.title}</DialogTitle>
      </DialogHeader>
      <div className="md:flex justify-center items-center">
        {/* Calendar for date selection */}
        <div className=" ">
          <h3 className="font-medium text-lg text-gray-700">Select a Date:</h3>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>

        {/* Time slots with Flexbox */}
        <div className="md:w-1/2 px-2">
          <h3 className="font-medium text-lg text-gray-700">
            Available Time Slots:
          </h3>
          <div className="flex flex-wrap gap-2 max-h-40">
            {slotTime && slotTime.length > 0 ? (
              slotTime.map((slot: TSlot) => (
                <button
                  onClick={() => handleSlotClick(slot)}
                  key={slot._id}
                  className={`p-2 flex-1 text-sm rounded-md transition duration-300 ${
                    slot.isBooked === "booked"
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : selectedSlot?.startTime === slot.startTime &&
                        selectedSlot?.endTime === slot.endTime
                      ? "bg-red-500 text-white"
                      : "bg-black text-white hover:bg-gray-700"
                  }`}
                  disabled={slot.isBooked === "booked"}
                >
                  {slot.startTime}-{slot.endTime}
                </button>
              ))
            ) : (
              <p className="text-gray-500">No slot created</p>
            )}
          </div>
        </div>
      </div>
      {/* Book This Service button */}
      <div>
        {selectedSlot && role === "user" ? (
          <>
            <Button
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-600 transition duration-300 mt-6 md:10 "
              onClick={handleBooking}
            >
              {isLoading ? "Booking...." : "Book This Service"}
            </Button>
            {/* Hidden DialogClose button */}
            <DialogClose asChild>
              <button id="dialog-close-btn" className="hidden"></button>
            </DialogClose>
          </>
        ) : (
          ""
        )}
      </div>
    </DialogContent>
  );
};

export default ServiceDetailsCardDialog;
