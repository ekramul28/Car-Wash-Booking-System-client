import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import { BookImageIcon, ShoppingCart } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { CartSheet } from "../CardSheet/CardSheet";
import { useGetMyBookingQuery } from "@/redux/features/booking/booking";

const Navbar = () => {
  const links = [
    { name: "Home", level: "/" },
    { name: "Service", level: "/service" },
    { name: "Contact", level: "/contact" },
    { name: "About", level: "/about" },
  ];

  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  console.log(user);
  const handelLogout = () => {
    dispatch(logout());
  };

  const { data } = useGetMyBookingQuery(undefined);
  const bookings = data?.data;

  return (
    <div className="fixed top-0 left-0 mx-auto z-50 w-full ">
      <header className="my-auto h-28 grid items-center bg-[#161616]">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12 w-40">
              <Link to="/">
                <img
                  src="https://i.ibb.co/W0Cx1nT/ultimate-car-wash-logo-8-300x116.png"
                  alt="Ultimate Car Wash Logo"
                />
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-xl text-white">
                  {links?.map((link, index) => (
                    <li key={index}>
                      <NavLink
                        to={link.level}
                        className={({ isActive }) =>
                          `transition hover:text-gray-500/75 roboto-medium ${
                            isActive ? " bg-[#BE123C] py-6 px-8 text-white" : ""
                          }`
                        }
                      >
                        {link?.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative flex justify-center items-center">
                {/* Badge to show the number 5 */}
                {bookings?.length > 0 ? (
                  <div className="absolute -top-3 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                    {bookings?.length}
                  </div>
                ) : (
                  ""
                )}
                {/* Shopping Cart Icon */}
                <Sheet>
                  <SheetTrigger asChild>
                    <ShoppingCart className="h-5 w-5 text-white" />
                    {/* <Button variant="outline">Open</Button> */}
                  </SheetTrigger>
                  <CartSheet bookings={bookings} />
                </Sheet>
              </div>
              <div className="sm:flex sm:gap-4">
                {user ? (
                  <div className="flex justify-center items-center">
                    <ProfileDropdown
                      image={user?.imageUrl}
                      role={user?.role}
                      handelLogout={handelLogout}
                    />
                  </div>
                ) : (
                  <Link to={"/login"}>
                    <p className="md:font-medium md:text-sm font-normal text-white text-xs flex items-center md:gap-2">
                      <Button variant="secondary" className="text-black">
                        <svg
                          className="md:h-6 md:w-6 h-4 w-4"
                          data-slot="icon"
                          fill="none"
                          stroke-width="1.5"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                          ></path>
                        </svg>
                        Login
                      </Button>
                    </p>
                  </Link>
                )}
              </div>

              {/* Button to open Drawer */}
              <div className="block md:hidden">
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <nav aria-label="Global">
                      <ul className="flex flex-col   items-center gap-4 text-sm pl-6">
                        {links.map((link, index) => (
                          <li key={index}>
                            <NavLink
                              to={link.level}
                              className={({ isActive }) =>
                                `transition hover:text-gray-500/75 roboto-medium  ${
                                  isActive
                                    ? "bg-black w-full sm:bg-black px-20 rounded py-2 text-white"
                                    : ""
                                }`
                              }
                            >
                              {link?.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
