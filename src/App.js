import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Heading } from "./components/Heading";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import FunctionalAbout from "./components/FunctionalAbout";
import Contact from "./components/Contact";
const Grocery = lazy(() => import("../src/components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app-container">
      <Heading />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <FunctionalAbout />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/grocery",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Grocery />
      </Suspense>
    ),
  },
  {
    path: "/restaurant/:resId",
    element: <RestaurantMenu />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
