import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useGetSlotsQuery } from "@/redux/features/slots/slots";

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
};

const ServiceDetailsCardDialog: React.FC<ServiceDetailsCardProps> = ({
  serviceDetails,
}) => {
  // slots data fetch
  const userInfo = { serviceId: serviceDetails?._id };
  const { data } = useGetSlotsQuery(userInfo);
  console.log(data);

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);

  const handleSlotClick = (slot: TimeSlot) => {
    if (!slot.isBooked) {
      setSelectedSlot(slot);
    }
  };

  // Function to handle booking
  const handleBooking = () => {
    if (selectedSlot) {
      console.log(
        "Booking service:",
        "id",
        serviceDetails._id,
        serviceDetails?.title,
        "at",
        selectedSlot.time,
        "date",
        date
      );
    }
  };

  const availableTimeSlots: TimeSlot[] = [
    { time: "09:00 AM", isBooked: false },
    { time: "10:00 AM", isBooked: true }, // Booked slot
    { time: "11:00 AM", isBooked: false },
    { time: "12:00 PM", isBooked: true }, // Booked slot
    { time: "01:00 PM", isBooked: false },
    { time: "02:00 PM", isBooked: false },
    { time: "03:00 PM", isBooked: true }, // Booked slot
    { time: "04:00 PM", isBooked: false },
    { time: "05:00 PM", isBooked: false },
  ];

  return (
    <DialogContent className="w-[90%] h-[90%] overflow-y-auto overflow-x-hidden">
      <DialogHeader>
        <DialogTitle>{serviceDetails?.title}</DialogTitle>
      </DialogHeader>
      <div className="md:flex justify-center items-center">
        {/* Calendar for date selection */}
        <div className=" ">
          <h3 className="font-medium text-lg  text-gray-700">Select a Date:</h3>
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
          <div className="flex flex-wrap gap-2  max-h-40 ">
            {availableTimeSlots.map((slot) => (
              <button
                key={slot.time}
                className={`p-2 flex-1 text-sm rounded-md transition duration-300 ${
                  slot.isBooked
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : selectedSlot?.time === slot.time
                    ? "bg-red-500 text-white"
                    : "bg-black text-white hover:bg-gray-700"
                }`}
                disabled={slot.isBooked}
                onClick={() => handleSlotClick(slot)}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Book This Service button */}
      {selectedSlot && (
        <Button
          className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-600 transition duration-300 mt-6 md:10 lg:mt-20"
          onClick={handleBooking}
        >
          Book This Service
        </Button>
      )}
    </DialogContent>
  );
};

export default ServiceDetailsCardDialog;
