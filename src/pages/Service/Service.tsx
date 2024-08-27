import FunctionalityComponent from "./Functionality/FunctionalityCom";
import ProductCard from "./ServiceCard/ServiceCard";

const Service = () => {
  return (
    <div className="grid grid-cols-4  min-h-screen pt-10">
      <div className="grid-cols-1 border">
        <FunctionalityComponent />
      </div>
      <div className="grid-col-3 text-white px-2">
        <ProductCard
          imageUrl="/path/to/image.jpg"
          description="Awesome Product"
          price="$99.99"
          duration="30 days"
        />
      </div>
    </div>
  );
};

export default Service;
