import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function CartSheet({ bookings }) {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>

      <Card>
        <div className="relative  max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mt-4 space-y-6">
            <ul className="space-y-4">
              {bookings?.map((booking) => (
                <li key={booking._id} className="flex items-center gap-4">
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
                    <button className="text-gray-600 transition hover:text-red-600">
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
              <Button className="px-5 py-3 lock rounded w-[80%] text-center text-sm text-gray-100 transition hover:bg-gray-600">
                Checkout
              </Button>
              <a
                href="#"
                className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
              >
                Continue shopping
              </a>
            </div>
          </div>
        </div>
      </Card>
    </SheetContent>
  );
}
