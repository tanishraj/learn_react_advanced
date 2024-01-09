import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { RestaurantDetails } from "../components/Restaurant";
import { Cart } from "../components/Cart";
import { PageNotFound } from "../components/PageNotFound";
import { GlobalSearch } from "../components/GlobalSearch";
import { Collections } from "../components/pages/Collections";
import { Home } from "../components/pages/Home";

const About = React.lazy(() => import("../components/About"));

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/collections/:collectionId",
        element: <Collections />,
      },
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
      { path: "/search", element: <GlobalSearch /> },
    ],
    errorElement: <PageNotFound />,
  },
]);
