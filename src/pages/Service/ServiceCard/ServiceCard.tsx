import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  imageUrl: string;
  description: string;
  price: string;
  duration: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  description,
  price,
  duration,
}) => {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <img
          src={imageUrl}
          alt="Product Image"
          width={400}
          height={300}
          className="rounded-md"
        />
        <CardTitle>{description}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-2">
        <div className="text-lg font-bold text-gray-800">Price: {price}</div>
        <div className="text-sm text-gray-600">Duration: {duration}</div>
        <Button>Add to Cart</Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
