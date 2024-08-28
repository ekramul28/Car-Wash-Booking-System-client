import ServiceDetailsCard from "../servicedetailsCard/serviceDetailsCard";
import { useGetSingleServiceQuery } from "@/redux/features/service/serviceApi";

const ServiceDetailsPage = ({ id }: { id: string }) => {
  // const { id } = useParams();
  console.log(id);
  const { data } = useGetSingleServiceQuery(id);
  const service = data?.data;
  console.log(service);

  return (
    <div>
      <ServiceDetailsCard serviceDetails={service} />
    </div>
  );
};

export default ServiceDetailsPage;
