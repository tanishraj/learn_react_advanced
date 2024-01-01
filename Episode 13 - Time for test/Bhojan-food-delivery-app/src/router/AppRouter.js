import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Body } from "../components/Body";
import { RestaurantDetails } from "../components/Restaurant";
import { Cart } from "../components/Cart";
import { PageNotFound } from "../components/PageNotFound";

const About = React.lazy(() => import("../components/About"));

export const AppRouter = createBrowserRouter([
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
      { path: "/restaurant/:resId", element: <RestaurantDetails /> },
      { path: "/cart", element: <Cart /> },
    ],
    errorElement: <PageNotFound />,
  },
]);
