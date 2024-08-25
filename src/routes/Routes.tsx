import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default routes;
