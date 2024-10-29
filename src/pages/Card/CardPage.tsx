import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useDeleteSingleMyBookingMutation } from "@/redux/features/booking/booking";
import { TBooking } from "@/types/ServiceType";
import { toast } from "sonner";

const CardPage = ({ bookings }: { bookings: TBooking[] }) => {
  const [deleteSingleMyBooking] = useDeleteSingleMyBookingMutation();
  const handleDelete = async (id: string) => {
    const result = await deleteSingleMyBooking(id).unwrap();
    if (result.success) {
      toast.success("Delete Successfully");
    } else {
      toast.error("something went wrong");
    }
  };
  return (
    <div className="relative lg:max-w-sm px-4 py-8 sm:px-6 lg:px-8">
      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {bookings?.map((booking) => (
            <Card key={booking._id}>
              {" "}
              {/* Key moved to Card */}
              <li className="flex items-center gap-4 px-6 py-4">
                <img
                  src={booking?.serviceId?.image?.[0] || ""}
                  alt={booking?.serviceId?.title || "Service image"}
                  className="w-16 h-16 rounded object-cover"
                />

                <div>
                  <h3 className="text-sm text-gray-900 flex gap-3">
                    <p className="w-5/6">{booking?.serviceId?.title}</p>

                    <dd className="w-1/6">
                      {booking?.payment === "nonPaid" ? (
                        <Badge variant="destructive">UnPaid</Badge>
                      ) : (
                        <Badge className="bg-green-500">Paid</Badge>
                      )}
                    </dd>
                  </h3>

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="inline">Status:</dt>
                      <dd
                        className={`inline ${
                          booking?.status === "pending"
                            ? "text-red-500"
                            : "text-green-500"
                        }  uppercase font-bold`}
                      >
                        {booking?.status}
                      </dd>
                    </div>
                    <div>
                      <dt className="inline">Price:</dt>
                      <dd className="inline">{booking?.serviceId?.price}$</dd>
                    </div>
                    <div>
                      <dt className="inline">Time:</dt>
                      <dd className="inline">
                        {booking?.slotId?.startTime} -{" "}
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
                      className="w-4 h-4"
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
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardPage;
