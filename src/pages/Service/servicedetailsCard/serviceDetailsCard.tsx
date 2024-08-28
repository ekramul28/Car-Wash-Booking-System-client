import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

type TimeSlot = {
  time: string;
  isBooked: boolean;
};

type ServiceDetails = {
  id: string;
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
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
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
        serviceDetails?.title,
        "at",
        selectedSlot.time
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
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="mt-2"
          />
        </div>

        {/* Time slots with Flexbox */}
        <div className="md:w-1/2 p-2">
          <h3 className="font-medium text-lg text-gray-700">
            Available Time Slots:
          </h3>
          <div className="flex flex-wrap gap-2 mt-2 max-h-40 ">
            {availableTimeSlots.map((slot) => (
              <button
                key={slot.time}
                className={`p-2 flex-1 text-sm rounded-md transition duration-300 ${
                  slot.isBooked
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-green-500 text-white hover:bg-green-600"
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
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 mt-6 md:10 lg:mt-20"
          onClick={handleBooking}
        >
          Book This Service
        </Button>
      )}
    </DialogContent>
  );
};

export default ServiceDetailsCardDialog;
