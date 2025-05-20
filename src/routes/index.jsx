import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "@pages/Home";
import AllWorks from "@pages/AllWorks";
import WorkView from "@pages/WorkView";
import Contact from "@pages/Contact";
import NotFound from "@pages/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/works", element: <AllWorks /> },
  { path: "/works/:id", element: <WorkView /> },
  { path: "/contact", element: <Contact /> },
  { path: "/404", element: <NotFound /> },
  { path: "*", element: <NotFound /> },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
