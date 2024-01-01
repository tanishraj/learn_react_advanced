import { fireEvent, render, screen } from "@testing-library/react";
import { FilterRestaurant } from "../FilterRestaurant";
import MOCK_RESTAURANT_LIST from "../../mock-data/MockRestaurantList.json";
import "@testing-library/jest-dom";

describe("Testing Filter Restaurant Component", () => {
  test("should render the component properly", () => {
    render(
      <FilterRestaurant
        restaurantList={MOCK_RESTAURANT_LIST}
        getTopRatedRestaurants={jest.fn()}
      />
    );
    expect(screen.getByText("Top Rated Restaurants")).toBeInTheDocument();
  });

  test("should render the component properly", () => {
    const { container } = render(
      <FilterRestaurant
        restaurantList={MOCK_RESTAURANT_LIST}
        getTopRatedRestaurants={jest.fn()}
      />
    );
    const filterButton = screen.getByTestId("topRatedRestaurantButton");
    fireEvent.click(filterButton);
    const elements = container.getElementsByClassName("bg-primary text-white");
    expect(elements.length).toBe(1);
  });
});
