import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import { Header } from "./components/molecules/Header";
import { ThemeContext } from "./context/ThemeContext";
import { AppStore } from "./redux/AppStore";

export const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <Provider store={AppStore}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          className={`pt-20 ${
            theme === "dark" ? "bg-purple" : ""
          } min-h-screen`}
        >
          <Header />
          <div className="max-w-screen-xl m-auto py-5 px-4">
            <Outlet />
          </div>
        </div>
      </ThemeContext.Provider>
    </Provider>
  );
};
