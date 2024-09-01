/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import CarForm from "@/components/form/CarForm";
import CarInput from "@/components/form/CarInput";

interface ServiceFormProps {
  onSubmit: (data: any) => void;
  defaultValues?: {
    _id?: string;
    id?: string;
    image?: string[];
    title?: string;
    description?: string;
    price?: number;
    duration?: number;
    isDeleted?: boolean;
  };
}

const EditService: React.FC<ServiceFormProps> = ({
  onSubmit,
  defaultValues,
}) => {
  return (
    <CarForm
      onSubmit={onSubmit}
      defaultValues={defaultValues}
      className="space-y-4"
    >
      {/* _id Field */}
      <div>
        <CarInput type="text" name="_id" label="ID" placeholder="ID" disabled />
      </div>

      {/* id Field */}
      <div>
        <CarInput
          type="text"
          name="id"
          label="Service ID"
          placeholder="Service ID"
        />
      </div>

      {/* image Field */}
      <div>
        <CarInput
          type="text"
          name="image"
          label="Image URLs (comma-separated)"
          placeholder="Image URLs"
        />
      </div>

      {/* title Field */}
      <div>
        <CarInput type="text" name="title" label="Title" placeholder="Title" />
      </div>

      {/* description Field */}
      <div>
        <CarInput
          type="textarea"
          name="description"
          label="Description"
          placeholder="Description"
        />
      </div>

      {/* price Field */}
      <div>
        <CarInput
          type="number"
          name="price"
          label="Price"
          placeholder="Price"
        />
      </div>

      {/* duration Field */}
      <div>
        <CarInput
          type="number"
          name="duration"
          label="Duration (minutes)"
          placeholder="Duration"
        />
      </div>

      {/* isDeleted Field */}
      <div className="flex items-center space-x-2">
        <Checkbox id="isDeleted" name="isDeleted" />
        <label htmlFor="isDeleted">Is Deleted?</label>
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </CarForm>
  );
};

export default EditService;
