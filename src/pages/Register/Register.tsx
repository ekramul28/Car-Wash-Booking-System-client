import CarInput from "@/components/form/CarInput";
import CarForm from "@/components/form/CarForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const Register = () => {
  const defaultValues = {
    full_name: "",
    phoneNo: "",
    email: "",
    password: "",
    image: null,
  };

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="mt-40 text-white">
      <section className="flex justify-center items-center min-h-screen ">
        <div className="relative  w-[80%]">
          <div className="absolute w-32 h-32 bg-primary rounded-full top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 z-[-1]"></div>
          <div className="border border-gray-200 shadow-lg rounded-lg p-8 backdrop-blur-lg">
            <h1 className="text-3xl mb-3 roboto-bold">Register</h1>
            <div>
              <CarForm onSubmit={onSubmit} defaultValues={defaultValues}>
                <div className="mt-8 grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <CarInput
                      label="Full Name"
                      placeholder="Type your Full Name"
                      type="text"
                      name="full_name"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <CarInput
                      label="Phone No"
                      placeholder="Type your Phone No"
                      type="number"
                      name="phoneNo"
                    />
                  </div>

                  <div className="col-span-6">
                    <CarInput
                      label="Email"
                      placeholder="Type your Email"
                      type="email"
                      name="email"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <CarInput
                      label="Password"
                      placeholder="Type your Password"
                      type="password"
                      name="password"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <FormField
                      name="image"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Image</FormLabel>
                          <FormControl>
                            <Input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                field.onChange(file);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  variant="outline"
                  className="mt-8 text-black"
                >
                  Register
                </Button>
              </CarForm>
            </div>
            <div className="flex justify-between opacity-60 mt-4">
              <p className="text-primary text-white">
                Already have an account?{" "}
                <Link to="/login">
                  <span className="underline cursor-pointer">Log in</span>
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="absolute w-32 h-32 bg-primary rounded-full bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 z-[-1]"></div>
        </div>
        <div className="absolute left-0 bottom-8">
          <div className="cursor-pointer transition-all duration-300 hover:w-10"></div>
        </div>
      </section>
    </div>
  );
};

export default Register;
