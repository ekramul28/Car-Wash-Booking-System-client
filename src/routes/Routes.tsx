import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import Contact from "@/pages/Contact/Contact";
import About from "@/pages/About/About";
import Service from "@/pages/Service/Service";
import ServiceDetailsPage from "@/pages/Service/ServiceDetailsPage/ServiceDetailsPage";
import { Dashboard } from "@/components/layout/DashboardLayout";
import Booking from "@/pages/Dashboard/Booking/Booking";
import { DashboardHome } from "@/pages/Dashboard/DashboardHome/DashboardHome";
import AllUser from "@/pages/Dashboard/AllUser/AllUser";
import ProtectedRoute from "@/components/layout/ProtectedRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "service",
        element: <Service />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <ProtectedRoute role="admin">
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <DashboardHome />,
      },
      {
        path: "dashboard/booking",
        element: <Booking />,
      },
      {
        path: "dashboard/allUser",
        element: <AllUser />,
      },
    ],
  },
]);

export default routes;
