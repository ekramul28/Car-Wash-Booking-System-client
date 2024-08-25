import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";

const Navbar = () => {
  const links = [
    { name: "Home", level: "/" },
    { name: "About", level: "/about" },
    { name: "Service", level: "/service" },
    { name: "Contact", level: "/contact" },
  ];

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
                  {links.map((link, index) => (
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
              <div className="sm:flex sm:gap-4">
                <Link to="/login">
                  <Button variant="secondary" className="text-black">
                    Login
                  </Button>
                </Link>
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
