import { useGetMyBookingQuery } from "@/redux/features/booking/booking";
import CardDetailsPage from "./CardDetailsPage";
import CardPage from "./CardPage";
import { TBooking } from "@/types/ServiceType";

const Card = () => {
  const { data } = useGetMyBookingQuery(undefined);
  const bookings: TBooking[] = data?.data;
  return (
    <>
      <div className="h-[300px] bg-image1  mt-0 bg-fixed flex justify-center items-center">
        <h1 className="text-center  text-4xl font-black text-amber-500">
          See Your Card Information
        </h1>
      </div>
      <div className="md:flex md:h-[450px] gap-4">
        <div
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="md:w-1/3 overflow-auto scroll-smooth scrollbar-hide "
        >
          <CardPage bookings={bookings} />
        </div>
        <div className="md:w-2/3 mt-10">
          <CardDetailsPage bookings={bookings} />
        </div>
      </div>
    </>
  );
};

export default Card;
