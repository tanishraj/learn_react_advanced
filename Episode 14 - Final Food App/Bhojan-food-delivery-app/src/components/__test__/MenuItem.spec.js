import { fireEvent, render, screen } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import { MenuItem } from "../MenuItem";
import { AppStore } from "../../redux/AppStore";
import MOCK_MENU_ITEM_INFO from "../../mock-data/MockMenuItemInfo.json";
import "@testing-library/jest-dom";

jest.mock("react-redux", () => {
  const originalModule = jest.requireActual("react-redux");

  return {
    ...originalModule,
    useDispatch: () => jest.fn(),
  };
});

describe("Testing MenuItem component", () => {
  test("should render component properly", () => {
    render(
      <Provider store={AppStore}>
        <MenuItem menuItemInfo={MOCK_MENU_ITEM_INFO} />
      </Provider>
    );
    expect(
      screen.getByText("Nandhana Special Andhra Veg Carrier Meal")
    ).toBeInTheDocument();
  });

  test("should render empty component when props not passed", () => {
    render(
      <Provider store={AppStore}>
        <MenuItem menuItemInfo={{}} />
      </Provider>
    );
    expect(
      screen.queryByText("Nandhana Special Andhra Veg Carrier Meal")
    ).not.toBeInTheDocument();
  });

  test("should add items to cart when we click on menu items", () => {
    render(
      <Provider store={AppStore}>
        <MenuItem menuItemInfo={MOCK_MENU_ITEM_INFO} />
      </Provider>
    );
    const menuButton = screen.getByTestId("menuButton");
    fireEvent.click(menuButton);
  });
});
