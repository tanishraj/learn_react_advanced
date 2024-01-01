import { render, act, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeContext } from "../../context/ThemeContext";
import { AppStore } from "../../redux/AppStore";
import { BrowserRouter } from "react-router-dom";
import { App } from "../../App";
import "@testing-library/jest-dom";

describe("Testing App Component", () => {
  beforeEach(async () => {
    await act(async () =>
      render(
        <Provider store={AppStore}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      )
    );
  });
  test("should render the component", () => {
    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
  });

  test("should render darkMode when we click on theme toggler button", () => {
    const themeTogglerButton = screen.getByTestId("themeToggler");

    fireEvent.click(themeTogglerButton);
    const darkMode = screen.getByTestId("darkMode");
    expect(darkMode).toBeInTheDocument();

    fireEvent.click(themeTogglerButton);
    const lightMode = screen.getByTestId("lightMode");
    expect(lightMode).toBeInTheDocument();
  });
});
