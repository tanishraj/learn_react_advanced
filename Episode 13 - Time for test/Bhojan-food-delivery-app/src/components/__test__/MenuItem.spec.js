import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MenuItem } from "../MenuItem";
import "@testing-library/jest-dom";
import { AppStore } from "../../redux/AppStore";

describe("Testing MenuItem component", () => {
  test("should render component properly", () => {
    render(
      <Provider store={AppStore}>
        <MenuItem />
      </Provider>
    );
    screen.debug();
  });
});
