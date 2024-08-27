import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChangeEvent, useState } from "react";

const FunctionalityComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);
  };

  const handleSortChange = (value: string) => {
    setSortOrder(value);
  };

  const handleApply = () => {
    console.log("Search:", searchTerm);
    console.log("Filter:", selectedFilter);
    console.log("Sort:", sortOrder);
  };

  return (
    <div className="flex flex-col space-y-4 p-4">
      <div>
        <Label htmlFor="search">Search</Label>
        <Input
          id="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div>
        <Label htmlFor="filter">Filter</Label>
        <Select onValueChange={handleFilterChange}>
          <SelectTrigger id="filter">
            <SelectValue placeholder="Select Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="filter1">Filter 1</SelectItem>
            <SelectItem value="filter2">Filter 2</SelectItem>
            <SelectItem value="filter3">Filter 3</SelectItem>
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
            <SelectItem value="asc">Ascending</SelectItem>
            <SelectItem value="desc">Descending</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button variant={"outline"} onClick={handleApply}>
        Apply
      </Button>
    </div>
  );
};

export default FunctionalityComponent;
