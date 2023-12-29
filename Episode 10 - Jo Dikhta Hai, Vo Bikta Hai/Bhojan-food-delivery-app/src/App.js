import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Contact } from "./components/Contact";
import { PageNotFound } from "./components/PageNotFound";
import { RestaurantDetails } from "./components/Restaurant";

const About = React.lazy(() => import("./components/About"));

const App = () => {
  return (
    <div className="pt-20">
      <Header />
      <div className="max-w-screen-xl m-auto py-5">
        <Outlet />
      </div>
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:resId", element: <RestaurantDetails /> },
    ],
    errorElement: <PageNotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
