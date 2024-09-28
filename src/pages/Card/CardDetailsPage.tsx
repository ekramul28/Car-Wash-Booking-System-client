import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAmrpayPaymentMutation } from "@/redux/features/payment/paymentApi";
import { TBooking } from "@/types/ServiceType";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const CardDetailsPage = ({ bookings }: { bookings: TBooking[] }) => {
  const [amrpayPayment, { isLoading }] = useAmrpayPaymentMutation();
  const [min, setMin] = useState(false);
  // Calculate total price
  const totalPrice = bookings?.reduce((total, booking) => {
    const price = parseFloat(booking.serviceId.price);
    return total + price;
  }, 0);

  // Calculate total duration in minutes
  const totalMin = bookings?.reduce((total, booking) => {
    const durationInMinutes = parseFloat(booking.serviceId.duration);
    return total + durationInMinutes;
  }, 0);

  const totalHoursInDecimal = totalMin / 60;

  useEffect(() => {
    if (totalMin < 60) {
      setMin(true);
    } else {
      setMin(false);
    }
  }, [totalMin]);

  const handelPayment = async () => {
    if (bookings.length === 0) {
      toast.error("No Booking quantity ");
      return;
    }

    const data = {
      totalPrice,
      totalHoursInDecimal,
    };

    const result = await amrpayPayment(data).unwrap();

    if (result.success) {
      console.log("result", result.data.payment_url);
      window.location.href = result?.data?.payment_url;
    }
  };

  return (
    <Card>
      <div className="mt-8 flex justify-center items-center border-t h-[400px] p-5 border-gray-100 pt-8">
        <div className="w-screen max-w-lg space-y-4">
          <dl className="space-y-0.5 text-sm text-gray-700">
            <div className="flex justify-between">
              <dt>Subtotal</dt>
              <dd>$0</dd>
            </div>

            <div className="flex justify-between">
              <dt>VAT</dt>
              <dd>$0</dd>
            </div>

            <div className="flex justify-between">
              {min ? <dt>Total Minutes</dt> : <dt>Total Hours</dt>}
              <dd>{min ? totalMin : totalHoursInDecimal?.toFixed(0)}</dd>
            </div>

            <div className="flex justify-between text-base font-medium">
              <dt>Total</dt>
              <dd>${totalPrice?.toFixed(2)}</dd>
            </div>
          </dl>

          <div className="flex justify-end">
            <Button
              onClick={handelPayment}
              className="bg-black text-gray-100 hover:bg-gray-600"
            >
              {isLoading ? "Loading..." : "Checkout"}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardDetailsPage;
