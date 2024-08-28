import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TService } from "../Service";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ServiceDetailsPage from "../ServiceDetailsPage/ServiceDetailsPage";

const ProductCard: React.FC<TService> = ({
  image,
  title,
  price,
  duration,
  _id,
}) => {
  console.log(price);
  return (
    <Card className="max-w-sm bg-[#1C1F26] text-white">
      <CardHeader>
        <img
          src={image[0]}
          alt="Product Image"
          width={400}
          height={300}
          className="rounded-md"
        />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-2">
        <div className="text-lg font-bold ">Price: ${price}</div>
        <div className="text-sm ">Duration: {duration} Min</div>

        <Dialog>
          <DialogTrigger className="bg-white text-black font-bold">
            Book Now
          </DialogTrigger>
          <DialogContent>
            <ServiceDetailsPage id={_id} />
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
