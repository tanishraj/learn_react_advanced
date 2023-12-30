import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { PageNotFound } from "./components/PageNotFound";
import { RestaurantDetails } from "./components/Restaurant";
import { ThemeContext } from "./context/ThemeContext";
import { AppStore } from "./redux/AppStore";
import { Cart } from "./components/Cart";

const About = React.lazy(() => import("./components/About"));

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <Provider store={AppStore}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`pt-20 ${theme === "dark" ? "bg-purple" : ""}`}>
          <Header />
          <div className="max-w-screen-xl m-auto py-5 px-4">
            <Outlet />
          </div>
        </div>
      </ThemeContext.Provider>
    </Provider>
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
      { path: "/restaurant/:resId", element: <RestaurantDetails /> },
      { path: "/cart", element: <Cart /> },
    ],
    errorElement: <PageNotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
