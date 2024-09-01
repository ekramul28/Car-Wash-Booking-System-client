import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
} from "react-hook-form";

type TFormConfig = UseFormProps<FieldValues>;

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  className?: string;
} & TFormConfig;

const CarForm = ({
  children,
  onSubmit,
  defaultValues,
  resolver,
  className,
}: TFormProps) => {
  const methods = useForm({
    defaultValues,
    resolver,
  });

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)} className={`${className}`}>
        {children}
      </form>
    </FormProvider>
  );
};

export default CarForm;
