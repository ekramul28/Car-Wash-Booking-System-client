import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
type TInputProps = {
  type: string;
  name: string;
  placeholder: string;
  label?: string;
  disabled?: boolean;
  className?: string;
};
const CarInput = ({
  type,
  name,
  label,
  disabled,
  placeholder,
  className = "",
}: TInputProps) => {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              {...field}
              type={type}
              id={name}
              disabled={disabled}
              placeholder={placeholder}
              className={`text-black ${className}`}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CarInput;
