import { createBrowserRouter } from "react-router-dom";
import ComingSoon from "./ComingSoon";
import AboutUs from "./Pages/AboutUs";
import HomePage from "./Pages/HomePage";
import Layout from "./Pages/Layout";
import NotFound from "./Pages/NotFound";
import FoodGallery from "./sections/Gallery/Gallery.component";

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
          path: "gallery",
          element: <FoodGallery />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
}
