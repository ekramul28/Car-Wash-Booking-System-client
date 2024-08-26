import CarInput from "@/components/form/CarInput";
import CarForm from "@/components/form/CarForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  const defaultValues = {
    email: "",
    password: "",
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="mt-40 text-white">
      <section className="flex justify-center items-center h-screen ">
        <div className="relative w-72 md:w-80">
          <div className="absolute w-32 h-32 bg-primary rounded-full top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 z-[-1]"></div>
          <div className="border  border-gray-200 shadow-lg rounded-lg p-8 backdrop-blur-lg ">
            <img
              src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
              alt="illustration"
              className="absolute top-[-14%] right-[-2px] w-[90%] -z-10 "
            />
            <h1 className="text-3xl roboto-bold mb-3">LOGIN</h1>

            <div className="z-50">
              <CarForm onSubmit={onSubmit} defaultValues={defaultValues}>
                <CarInput
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="Inter Your email"
                />
                <CarInput
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Inter Your password"
                  className="text-black"
                />

                <Button variant="outline" className="mt-4 text-black">
                  Login
                </Button>
              </CarForm>
            </div>

            <div className="flex justify-between opacity-60 mt-4">
              <Link to="/register" className="text-primary text-green-400">
                REGISTER
              </Link>
              <a href="" className="text-primary text-green-400">
                FORGOT PASSWORD
              </a>
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

export default Login;
