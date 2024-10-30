import { useGetServiceQuery } from "@/redux/features/service/serviceApi";
import FunctionalityComponent from "./Functionality/FunctionalityCom";
import ProductCard from "./ServiceCard/ServiceCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";
import { TService, TMeta } from "@/types/ServiceType"; // Update the import path according to your project structure

const Service = () => {
  const [pagination, setPagination] = useState<{ name: string; value: number }>(
    {
      name: "page",
      value: 1,
    }
  );
  const [searchTerm, setSearch] = useState<{
    name: string;
    value: string | undefined;
  }>({
    name: "searchTerm",
    value: "",
  });
  const [filter, setFilter] = useState<{
    name: string;
    value: string | undefined;
  }>({
    name: "",
    value: "",
  });
  const [sort, setSort] = useState<{ name: string; value: string | undefined }>(
    {
      name: "sort",
      value: "",
    }
  );
  // Adjusted API call for better parameter passing
  const { data, isError } = useGetServiceQuery([
    searchTerm,
    filter,
    pagination,
    sort,
  ]);
  const services: TService[] = data?.data?.result || [];
  const meta: TMeta = data?.data?.meta;

  const handlePageChange = (newPage: number) => {
    setPagination((prev) => ({ ...prev, value: newPage }));
  };

  // if (isLoading) {
  //   return <div className="text-center text-white pt-10">Loading...</div>;
  // }

  if (isError) {
    return (
      <div className="text-center text-red-500 pt-10">
        Error fetching services.
      </div>
    );
  }

  return (
    <div className="md:grid grid-cols-4 bg-[#0E1217] pt-10 gap-4">
      <div className="md:col-span-1 border mx-2">
        <FunctionalityComponent
          setSearch={setSearch}
          setFilter={setFilter}
          setSort={setSort}
        />
      </div>
      <div className="col-span-3">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center text-white px-2">
          {services.map((service) => (
            <ProductCard key={service.id} {...service} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-8">
          <Pagination className="text-black">
            <PaginationContent className="bg-white">
              <PaginationItem>
                {pagination.value > 1 ? (
                  <PaginationPrevious
                    onClick={() =>
                      handlePageChange(Math.max(1, pagination.value - 1))
                    }
                  />
                ) : (
                  <PaginationPrevious className="disabled">
                    Previous
                  </PaginationPrevious> // A visual indicator for disabled state
                )}
              </PaginationItem>

              {[...Array(meta?.totalPage || 1)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    onClick={() => handlePageChange(index + 1)}
                    isActive={pagination.value === index + 1} // Changed 'active' to 'isActive'
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    handlePageChange(
                      Math.min(meta?.totalPage || 1, pagination.value + 1)
                    )
                  }
                  className={`pagination-next ${
                    pagination.value === meta?.totalPage ? "disabled" : ""
                  }`}
                >
                  Next
                </PaginationNext>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Service;
