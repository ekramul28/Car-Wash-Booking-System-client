/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import CarInput from "@/components/form/CarInput";
import CarForm from "@/components/form/CarForm";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/VeryfiedToken";
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const [login] = useLoginMutation();
  const defaultValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (data: any) => {
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in");
      const redirectTo = location.state?.from || "/";
      navigate(redirectTo, { replace: true });
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  // demoAdmin
  const demoAdmin = async () => {
    try {
      const data = {
        email: "mdekramulhassan168@gmail.com",
        password: "Ekramul28",
      };
      const res = await login(data).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in");
      const redirectTo = location.state?.from || "/";
      navigate(redirectTo, { replace: true });
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  // demoUser
  const demoUser = async () => {
    try {
      const data = {
        email: "ekramulhassan80@gmail.com",
        password: "Ekramul28",
      };
      const res = await login(data).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in");
      const redirectTo = location.state?.from || "/";
      navigate(redirectTo, { replace: true });
    } catch (error) {
      toast.error("Something went wrong");
    }
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

            <div className="text-center  my-4 ">
              <span className="text-white">
                Don't have Account
                <Link to="/register" className="text-primary  text-red-600">
                  REGISTER
                </Link>
              </span>
            </div>

            <div className="flex justify-evenly">
              <div>
                <Button
                  onClick={demoAdmin}
                  className="inline-block w-full rounded-lg bg-white hover:bg-slate-300 font-medium text-black sm:w-auto"
                >
                  Demo Admin
                </Button>
              </div>
              <div>
                <Button
                  onClick={demoUser}
                  className="inline-block w-full rounded-lg bg-white hover:bg-slate-300 font-medium text-black sm:w-auto"
                >
                  Demo User
                </Button>
              </div>
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
