import React, { useState } from "react";
import { TService } from "../Service";
import { Card } from "@/components/ui/card";
import { Button } from "react-day-picker";
import { DatePicker } from "@/components/Datpicker/DatePicker";

interface ServiceDetailsPageProps {
  service: TService;
  availableSlots: string[];
  onBook: (slot: string) => void;
}

const ServiceDetailsPage: React.FC<ServiceDetailsPageProps> = ({
  service,
  availableSlots,
  onBook,
}) => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleSlotClick = (slot: string) => {
    setSelectedSlot(slot);
  };

  const handleBookClick = () => {
    if (selectedSlot) {
      onBook(selectedSlot);
    }
  };

  return (
    <div className="p-4">
      <Card>
        <div className="bg-gray-100 p-4 border-b border-gray-300">
          <h1 className="text-xl font-semibold">{service.title}</h1>
        </div>
        <div className="p-4">
          <img
            src={service.image[0]}
            alt={service.title}
            className="w-full h-auto mb-4"
          />
          <p className="text-gray-700 mb-2">{service.description}</p>
          <p className="font-bold">Price: ${service.price}</p>
          <p className="font-bold">Duration: {service.duration}</p>
        </div>
      </Card>
      <div className="mt-4">
        <DatePicker
          selectedDate={selectedDate}
          onChange={setSelectedDate}
        />
        <div className="grid grid-cols-3 gap-2 mt-4">
          {availableSlots.map((slot) => (
            <Button
              key={slot}
              disabled={false} // Replace with actual logic to disable booked slots
              onClick={() => handleSlotClick(slot)}
              className={`p-2 ${
                selectedSlot === slot ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {slot}
            </Button>
          ))}
        </div>
        <Button
          onClick={handleBookClick}
          disabled={!selectedSlot}
          className="mt-4 bg-green-500 text-white"
        >
          Book This Service
        </Button>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
