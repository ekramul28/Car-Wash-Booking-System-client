/* eslint-disable @typescript-eslint/no-explicit-any */
import CarForm from "@/components/form/CarForm";
import CarInput from "@/components/form/CarInput";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define the props type
interface FunctionalityComponentProps {
  setSearch: React.Dispatch<
    React.SetStateAction<{ name: string; value: string | undefined }>
  >;
  setFilter: React.Dispatch<
    React.SetStateAction<{ name: string; value: string | undefined }>
  >;
  setSort: React.Dispatch<
    React.SetStateAction<{ name: string; value: string | undefined }>
  >;
}
const FunctionalityComponent: React.FC<FunctionalityComponentProps> = ({
  setSearch,
  setFilter,
  setSort,
}) => {
  const handleSearchChange = (data: any) => {
    setSearch((prev) => ({ ...prev, value: data?.search }));
  };

  const handleFilterChange = (value: string) => {
    setFilter({ name: "title", value });
  };

  const handleSortChange = (value: string) => {
    setSort((prev) => ({ ...prev, value }));
  };
  const handleAllData = () => {
    setSearch((prev) => ({ ...prev, value: "" }));
    setFilter({ name: "", value: "" });
    setSort((prev) => ({ ...prev, value: "" }));
  };
  return (
    <div className="flex flex-col space-y-4 p-4">
      <div className="">
        <CarForm
          onSubmit={handleSearchChange}
          className="flex space-x-2 items-center "
        >
          <CarInput
            type="text"
            label="Search"
            name="search"
            placeholder="Search..."
            // className="flex-grow" // Allows the input to take up available space
          />
          <Button
            className="text-black bg-white mt-8 hover:bg-slate-100"
            type="submit"
          >
            Search
          </Button>
        </CarForm>
      </div>
      <div>
        <Label htmlFor="filter">Filter</Label>
        <Select onValueChange={handleFilterChange}>
          <SelectTrigger id="filter">
            <SelectValue placeholder="Select Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Exterior Wash">Exterior Wash</SelectItem>
            <SelectItem value="Interior Detailing">
              Interior Cleaning
            </SelectItem>
            <SelectItem value="Tire Cleaning">Tire Cleaning</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="pb-6">
        <Label htmlFor="sort">Sort</Label>
        <Select onValueChange={handleSortChange}>
          <SelectTrigger id="sort">
            <SelectValue placeholder="Select Sort Order" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price">Price</SelectItem>
            <SelectItem value="updatedAt">New Product</SelectItem>
            <SelectItem value="title">A-Z</SelectItem>
            <SelectItem value="-rating">Rating</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button
        onClick={handleAllData}
        className="bg-white text-black hover:bg-slate-300"
      >
        All Data
      </Button>
    </div>
  );
};

export default FunctionalityComponent;
