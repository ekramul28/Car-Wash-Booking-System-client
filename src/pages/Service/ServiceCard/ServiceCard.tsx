import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TService } from "../Service";

const ProductCard: React.FC<TService> = ({ image, title, price, duration }) => {
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
        <Button variant={"outline"} className="text-black">
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
