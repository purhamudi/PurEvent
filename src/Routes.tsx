import { createBrowserRouter } from "react-router-dom";
import ComingSoon from "./ComingSoon";
import AboutUs from "./Pages/AboutUs";
import HomePage from "./Pages/HomePage";
import Layout from "./Pages/Layout";
import NotFound from "./Pages/NotFound";

export function pCreateBrowserRouter() {
  return createBrowserRouter([
    {
      path: "",
      element: <ComingSoon />,
    },
    // {
    //   path: "*",
    //   element: <ComingSoon />,
    // },
    {
      path: "v1",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "uber-uns",
          element: <AboutUs />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
}
