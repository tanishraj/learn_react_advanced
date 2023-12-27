import React, { useEffect, useState } from "react";
import { Search } from "./Search";
import { RestaurantList } from "./RestaurantList";
import { RESTAURANT_LIST_API_URL } from "../utils/constants";

export const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const fetchSwiggyData = async () => {
    const apiResponse = await fetch(RESTAURANT_LIST_API_URL);
    const swiggyData = await apiResponse.json();
    const {
      data: { cards },
    } = swiggyData;

    const restaurantList =
      cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurantList(restaurantList);
    setFilteredList(restaurantList);
  };

  useEffect(() => {
    fetchSwiggyData();
  }, []);

  const filterRestaurants = (searchText) => {
    const filterList = restaurantList.filter((restaurant) => {
      return restaurant?.info?.name
        ?.toLowerCase()
        ?.includes(searchText.toLowerCase());
    });
    setFilteredList(filterList);
  };

  return (
    <div className="container">
      <Search filterRestaurants={filterRestaurants} />
      <RestaurantList restaurantList={filteredList} />
    </div>
  );
};
