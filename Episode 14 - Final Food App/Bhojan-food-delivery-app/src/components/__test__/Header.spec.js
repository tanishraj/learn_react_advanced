import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppStore } from "../../redux/AppStore";
import { Header } from "../Header";
import { ThemeContext } from "../../context/ThemeContext";
import "@testing-library/jest-dom";

describe("Testing Header Component", () => {
  test("should check if About link is in the menu", () => {
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const aboutLink = screen.getByText("About");
    expect(aboutLink).toBeInTheDocument();
  });

  test("should check if we have the light mode icon", () => {
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <ThemeContext.Provider
            value={{ theme: "light", setTheme: jest.fn() }}
          >
            <Header />
          </ThemeContext.Provider>
        </Provider>
      </BrowserRouter>
    );
    const lightMode = screen.getByTestId("lightMode");
    expect(lightMode).toBeInTheDocument();
  });
});
