import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CardDetailsPage = () => {
  return (
    <Card>
      <div className="mt-8 flex justify-center items-center border-t h-[400px] p-5 border-gray-100 pt-8">
        <div className="w-screen max-w-lg space-y-4">
          <dl className="space-y-0.5 text-sm text-gray-700">
            <div className="flex justify-between">
              <dt>Subtotal</dt>
              <dd>£250</dd>
            </div>

            <div className="flex justify-between">
              <dt>VAT</dt>
              <dd>£25</dd>
            </div>

            <div className="flex justify-between">
              <dt>Discount</dt>
              <dd>-£20</dd>
            </div>

            <div className="flex justify-between text-base font-medium">
              <dt>Total</dt>
              <dd>£200</dd>
            </div>
          </dl>

          <div className="flex justify-end">
            <Badge
              variant="secondary"
              className="inline-flex items-center px-2.5 py-0.5 text-indigo-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="-ml-1 mr-1.5 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                />
              </svg>
              <p className="whitespace-nowrap text-xs">2 Discounts Applied</p>
            </Badge>
          </div>

          <div className="flex justify-end">
            <Button
              variant="secondary"
              className="bg-gray-700 text-gray-100 hover:bg-gray-600"
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardDetailsPage;
