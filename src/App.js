import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Heading } from "./components/Heading";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import FunctionalAbout from "./components/FunctionalAbout";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import UserContext from "./utils/UserContext";
const Grocery = lazy(() => import("../src/components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Sulthanul Arief",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="app-container min-h-screen flex flex-col">
        <Heading />
        <main className="flex-grow">
          <Outlet />
        </main>

        <Footer />
      </div>
    </UserContext.Provider>
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
