import { createBrowserRouter } from "react-router-dom";
// import NotFound from "./Pages/NotFound";
// import { Layout } from "./Pages/Layout";
// import AboutUs from "./Pages/AboutUs";
// import HomePage from "./Pages/HomePage";
import ComingSoon from "./ComingSoon";

export default function pCreateBrowserRouter() {
  return createBrowserRouter(
    [
      {
        path: "*",
        element: <ComingSoon />,
      },
      // {
      //   path: "v1",
      //   element: <Layout/>,
      //   children:[
      //     {
      //       path: "",
      //       element: <HomePage />,
      //     },
      //     {
      //       path: "uber-uns",
      //       element: <AboutUs />,
      //     },
      //     {
      //       path: "*",
      //       element: <NotFound />,
      //     },
      //   ]
      // },
    ],
    {
      // basename: (window.location.pathname === "/robots.txt") ? undefined : "/",
    }
  );
}
