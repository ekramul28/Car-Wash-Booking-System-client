import { useGetSingleServiceQuery } from "@/redux/features/service/serviceApi";
import { useParams } from "react-router-dom";
import DynamicImage from "./Dynamicimage";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "react-day-picker";

const DynamicDetailsPage = () => {
  const { id } = useParams();
  const { data } = useGetSingleServiceQuery(id);
  const service = data?.data;
  const image = data?.data?.image;
  console.log(service);
  return (
    <div>
      <div>
        <DynamicImage image={image} />
      </div>
      <div>
        <Card className="w-full max-w-2xl mx-auto mt-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              {service?.title}
            </CardTitle>
            <CardDescription className="text-gray-500">
              Service Details
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="mt-4">
              <h2 className="text-lg font-semibold">Description</h2>
              <p className="text-gray-700">{service?.description}</p>
            </div>

            <div className="mt-4">
              <h2 className="text-lg font-semibold">Price</h2>
              <p className="text-gray-700">${service?.price}</p>
            </div>

            <div className="mt-4">
              <h2 className="text-lg font-semibold">Duration</h2>
              <p className="text-gray-700">{service?.duration} minutes</p>
            </div>
          </CardContent>

          <CardFooter className="flex justify-end">
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Book Now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default DynamicDetailsPage;
