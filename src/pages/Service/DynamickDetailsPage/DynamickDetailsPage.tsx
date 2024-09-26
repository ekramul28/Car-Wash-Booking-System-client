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
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ServiceDetailsPage from "../ServiceDetailsPage/ServiceDetailsPage";

const DynamicDetailsPage = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useGetSingleServiceQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching service details</div>;
  }

  const service = data?.data;
  const image = service?.image;

  return (
    <>
      {image && image.length > 1 ? (
        <div className="relative bg-center h-[400px]  text-5xl flex justify-center items-center">
          {/* Blurred background */}
          <div
            className="absolute inset-0 bg-cover bg-center filter blur-sm"
            style={{ backgroundImage: `url(${image[0]})` }}
          ></div>

          {/* Clear content on top */}
          <h1 className="relative z-10 text-center font-black text-amber-500">
            {service?.description}
          </h1>
        </div>
      ) : (
        <div className="absolute inset-0 bg-cover bg-center filter blur-sm bg-image2"></div>
      )}

      <div className="flex text-white gap-3 justify-center items-center">
        {/* Dynamic Image Section */}
        <div className="w-1/2">
          <DynamicImage image={image} />
        </div>

        {/* Service Details Section */}
        <div className="w-1/2">
          <Card className="w-full max-w-2xl mx-auto mt-6">
            <CardHeader>
              <CardTitle className="text-2xl font-bold roboto-bold">
                {service?.title}
              </CardTitle>
              <CardDescription className="text-gray-500">
                Service Details
              </CardDescription>
            </CardHeader>

            <CardContent>
              {/* Description */}
              <div className="mt-4">
                <h2 className="text-lg font-semibold roboto-bold">
                  Description
                </h2>
                <p className="text-gray-700">{service?.description}</p>
              </div>

              {/* Price */}
              <div className="mt-4">
                <h2 className="text-lg font-semibold roboto-bold">Price</h2>
                <p className="text-gray-700">${service?.price}</p>
              </div>

              {/* Duration */}
              <div className="mt-4">
                <h2 className="text-lg font-semibold roboto-bold">Duration</h2>
                <p className="text-gray-700">{service?.duration} minutes</p>
              </div>
            </CardContent>

            {/* Book Now Button */}
            <CardFooter className="flex justify-end">
              <Dialog>
                <DialogTrigger>
                  <Button className="w-[80%]">Book Now</Button>
                </DialogTrigger>
                <DialogContent>
                  <ServiceDetailsPage id={id} />
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DynamicDetailsPage;
