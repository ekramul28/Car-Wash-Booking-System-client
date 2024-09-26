import ServiceDetailsCard from "../servicedetailsCard/serviceDetailsCard";
import { useGetSingleServiceQuery } from "@/redux/features/service/serviceApi";

const ServiceDetailsPage = ({
  id,
  role,
}: {
  id: string | undefined;
  role?: string;
}) => {
  // const { id } = useParams();
  console.log(id);
  const { data } = useGetSingleServiceQuery(id);
  const service = data?.data;
  console.log(service);

  return (
    <div>
      <ServiceDetailsCard serviceDetails={service} role={role} />
    </div>
  );
};

export default ServiceDetailsPage;
