import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useDeleteSingleMyBookingMutation } from "@/redux/features/booking/booking";
import {
  useAmrpayPaymentMutation,
  // usePaymentMutation,
} from "@/redux/features/payment/paymentApi";
import { TBooking } from "@/types/ServiceType";
// import { loadStripe } from "@stripe/stripe-js";
import { toast } from "sonner";

export function CartSheet({
  bookings,
}: // userId,
{
  bookings: TBooking[];
  userId: string | undefined;
}) {
  // const [payment, { isLoading }] = usePaymentMutation();
  const [deleteSingleMyBooking] = useDeleteSingleMyBookingMutation();
  const [amrpayPayment, { isLoading }] = useAmrpayPaymentMutation();

  // delete function

  const handleDelete = async (id: string) => {
    const result = await deleteSingleMyBooking(id).unwrap();
    if (result.success) {
      toast.success("Delete Successfully");
    } else {
      toast.error("something went wrong");
    }
  };

  const totalPrice = bookings?.reduce((total, booking) => {
    const price = parseFloat(booking.serviceId.price);
    return total + price;
  }, 0);

  const totalMin = bookings?.reduce((total, booking) => {
    const durationInMinutes = parseFloat(booking.serviceId.duration);
    return total + durationInMinutes;
  }, 0);

  const totalHoursInDecimal = totalMin / 60;
  //payment function here

  // const handelMakePayment = async () => {
  //   const stripe = await loadStripe(
  //     "pk_test_51OEnEtL2pc8251OJIpKkvcI0a5dYheFy8fPTEUoGZcKf5ivh3KFiM2V2G7uP0ks4pIL9oViusE7QFpW76DP4I85100LbdwsY0M"
  //   );

  //   const session = await payment({ id: userId });

  //   if (bookings.length === 0) {
  //     toast.error("No Booking quantity ");
  //     return;
  //   }

  //   if (stripe) {
  //     const result = stripe.redirectToCheckout({
  //       sessionId: session?.data.data.id,
  //     });
  //     console.log(result);
  //   } else {
  //     console.error("Stripe is not initialized.");
  //   }
  // };

  const handelPayment = async () => {
    if (bookings.length === 0) {
      toast.error("No Booking quantity ");
      return;
    }
    const result = await amrpayPayment({
      totalPrice,
      totalHoursInDecimal,
    }).unwrap();
    if (result.success) {
      console.log("result", result.data.payment_url);
      window.location.href = result?.data?.payment_url;
    }
  };

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit Booking</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>

      <Card className="overflow-auto h-[80vh]">
        <div className="relative  max-w-sm border  bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mt-4 space-y-6">
            <ul className="space-y-4 ">
              {bookings?.map((booking) => (
                <li key={booking._id} className="flex items-center gap-4 ">
                  <img
                    src={booking?.serviceId?.image[0]}
                    alt="image"
                    className="size-16 rounded object-cover"
                  />

                  <div>
                    <h3 className="text-sm text-gray-900">
                      {booking?.serviceId?.title}
                    </h3>

                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <div>
                        <dt className="inline">Price:</dt>
                        <dd className="inline">{booking?.serviceId?.price}$</dd>
                      </div>
                      <div>
                        <dt className="inline">Time:</dt>
                        <dd className="inline">
                          {booking?.slotId?.startTime}-
                          {booking?.slotId?.endTime}
                        </dd>
                      </div>

                      <div>
                        <dt className="inline">Date:</dt>
                        <dd className="inline">
                          {booking?.slotId?.date.slice(0, 10)}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="flex flex-1 items-center justify-end gap-2">
                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="text-gray-600 transition hover:text-red-600"
                    >
                      <span className="sr-only">Remove item</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="space-y-4 text-center ">
              <Button
                onClick={handelPayment}
                className="px-5 py-3 lock rounded w-[80%] text-center text-sm text-gray-100 transition hover:bg-gray-600"
              >
                {isLoading ? "Loading..." : "Pay Now"}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </SheetContent>
  );
}
