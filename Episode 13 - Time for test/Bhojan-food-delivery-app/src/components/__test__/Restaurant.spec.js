import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { AppStore } from "../../redux/AppStore";
import { RestaurantDetails } from "../Restaurant";
import { BrowserRouter } from "react-router-dom";
import { useRestaurantMenu } from "../../hooks/useRestaurantMenu";
import MOCK_RESTAURANT_DETAILS from "../../mock-data/MockRestaurantDetails.json";
import "@testing-library/jest-dom";

// mocking the hook with some mock data
jest.mock("../../hooks/useRestaurantMenu");

describe("Testing Restaurant Details Component", () => {
  test("should render the component", () => {
    useRestaurantMenu.mockReturnValue(MOCK_RESTAURANT_DETAILS);

    render(
      <BrowserRouter>
        <RestaurantDetails />
      </BrowserRouter>
    );

    const restaurantName = screen.getByTestId("restaurantName");
    expect(restaurantName).toBeInTheDocument();
  });

  test("should load the menu items when we click on categories", () => {
    useRestaurantMenu.mockReturnValue(MOCK_RESTAURANT_DETAILS);

    render(
      <Provider store={AppStore}>
        <BrowserRouter>
          <RestaurantDetails />
        </BrowserRouter>
      </Provider>
    );

    const categoryHeader = screen.getByText("Personal Slice Veg Pizza.");
    fireEvent.click(categoryHeader);
    const menuItem = screen.getAllByTestId("menuItem");
    expect(menuItem.length).toBe(27);

    fireEvent.click(categoryHeader);
    const closedMenuItem = screen.queryAllByTestId("menuItem");
    expect(closedMenuItem.length).toBe(0);
  });
});
