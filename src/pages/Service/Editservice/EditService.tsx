/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import CarForm from "@/components/form/CarForm";
import CarInput from "@/components/form/CarInput";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

interface ServiceFormProps {
  onSubmit: (data: any) => void;
  defaultValues?: {
    image?: string[] | undefined;
    title?: string | undefined;
    description?: string | undefined;
    price?: string | 0;
    duration?: string | 0;
  };
  UpdateLoading?: boolean;
}

const EditService: React.FC<ServiceFormProps> = ({
  onSubmit,
  defaultValues,
  UpdateLoading,
}) => {
  const [message, setMessage] = useState(defaultValues?.description || "");
  const [imageInput, setImageInput] = useState<string>(
    defaultValues?.image?.join("  , ") || "    "
  );
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleFormSubmit = (data: any) => {
    const formDataImg = {
      ...defaultValues,
      image: imageInput.split(",").map((url) => url.trim()), // Split and trim the input
    };
    console.log(formDataImg);
    onSubmit({ ...data, message, formDataImg });
  };

  // Handle the change in the image input
  const handleImageInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setImageInput(e.target.value);
  };
  return (
    <Card className="w-[80%] mx-auto mt-4 p-6">
      <CarForm
        onSubmit={handleFormSubmit}
        defaultValues={defaultValues}
        className="space-y-4 "
      >
        {/* title Field */}
        <div>
          <CarInput
            type="text"
            name="title"
            label="Title"
            placeholder="Title"
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

        {/* description Field */}
        <div>
          <label htmlFor="message">Description</label>
          <Textarea
            id="description"
            name="description"
            placeholder="Type your description here."
            value={message}
            onChange={handleTextareaChange}
          />
        </div>

        {/* image Field */}
        <div>
          <label htmlFor="message">
            Image URLs (comma-separated)Like <span> , </span>{" "}
          </label>
          <Textarea
            name="image"
            placeholder="Image URLs"
            value={imageInput}
            onChange={handleImageInputChange}
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          {UpdateLoading ? "Loading..." : " Submit"}
        </Button>
      </CarForm>
    </Card>
  );
};

export default EditService;
