import { useGetServiceQuery } from "@/redux/features/service/serviceApi";
import FunctionalityComponent from "./Functionality/FunctionalityCom";
import ProductCard from "./ServiceCard/ServiceCard";

// types/ServiceType.ts
export type TService = {
  id: number;
  _id: string;
  image: string[];
  title: string;
  description: string;
  price: string;
  duration: string;
  isDeleted: boolean;
};

const Service = () => {
  const { data, isLoading, isError } = useGetServiceQuery(undefined);
  const services: TService[] = data?.data?.result || [];
  if (isLoading) {
    return <div className="text-center text-white  pt-10">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 pt-10">
        Error fetching services.
      </div>
    );
  }
  return (
    <div className="md:grid grid-cols-4 bg-[#0E1217] pt-10 gap-4">
      <div className="md:col-span-1 border mx-2 ">
        <FunctionalityComponent />
      </div>
      <div className="col-span-3 ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center text-white px-2">
          {services?.map((service) => (
            <ProductCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
