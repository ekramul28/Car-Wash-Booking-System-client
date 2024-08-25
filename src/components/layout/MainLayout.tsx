import Footer from "@/pages/Footer/Footer";
import Navbar from "@/pages/navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl min-h-screen mx-auto mt-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
