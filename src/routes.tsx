import { RouteObject } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Musicians from "./pages/Musicians";
import Bands from "./pages/Bands";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "musicians",
        element: <Musicians />,
      },
      {
        path: "bands",
        element: <Bands />,
      },
    ],
  },
];
