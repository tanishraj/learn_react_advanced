import { fireEvent, render, screen, act } from "@testing-library/react";
import { Body } from "../Body";
import { useRestaurantList } from "../../hooks/useRestaurantList";
import MOCK_RESTAURANT_LIST from "../../mock-data/MockRestaurantList.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

// mocking custom hooks
jest.mock("../../hooks/useRestaurantList");

describe("Testing Body Component", () => {
  test("should render the component", () => {
    useRestaurantList.mockReturnValue({ restaurantList: MOCK_RESTAURANT_LIST });
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
    const restaurantList = screen.getAllByTestId("restaurantCard");
    expect(restaurantList.length).toBe(9);
  });

  test("should render top rated restaurant button", () => {
    useRestaurantList.mockReturnValue({ restaurantList: MOCK_RESTAURANT_LIST });
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
    const topRatedRestaurantButton = screen.getByText("Top Rated Restaurants");
    expect(topRatedRestaurantButton).toBeInTheDocument();
  });

  test("should render the shimmer cards when data is null", () => {
    useRestaurantList.mockReturnValue(null);
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
    const restaurantList = screen.getAllByTestId("shimmerCard");
    expect(restaurantList.length).toBe(4);
  });

  test("should render top rated restaurants", () => {
    useRestaurantList.mockReturnValue({ restaurantList: MOCK_RESTAURANT_LIST });
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
    const topRatedRestaurantButton = screen.getByTestId(
      "topRatedRestaurantButton"
    );
    fireEvent.click(topRatedRestaurantButton);
    const restaurantList = screen.getAllByTestId("restaurantCard");
    expect(restaurantList.length).toBe(6);
  });

  test("should render search component", () => {
    useRestaurantList.mockReturnValue({ restaurantList: MOCK_RESTAURANT_LIST });
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
    const searchInput = screen.getByTestId("searchInput");
    const searchButton = screen.getByTestId("searchButton");
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test("should filter the restaurant based on the search input", () => {
    useRestaurantList.mockReturnValue({ restaurantList: MOCK_RESTAURANT_LIST });
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "Pizza" } });
    const searchButton = screen.getByTestId("searchButton");
    fireEvent.click(searchButton);
    const filteredRestaurants = screen.getAllByTestId("restaurantCard");
    expect(filteredRestaurants.length).toBe(1);
  });

  test("should load all the restaurants when the search keyword is empty", () => {
    useRestaurantList.mockReturnValue({ restaurantList: MOCK_RESTAURANT_LIST });
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "" } });
    const searchButton = screen.getByTestId("searchButton");
    fireEvent.click(searchButton);
    const filteredRestaurants = screen.getAllByTestId("restaurantCard");
    expect(filteredRestaurants.length).toBe(9);
  });
});
