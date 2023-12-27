import React, { useEffect, useState } from "react";
import { Search } from "./Search";
import { CardList } from "./CardList";

const API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const fetchSwiggyData = async () => {
    const apiResponse = await fetch(API_URL);
    const swiggyData = await apiResponse.json();
    const {
      data: { cards },
    } = swiggyData;
    const restaurantList =
      cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(restaurantList);
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
      <CardList restaurantList={filteredList} />
    </div>
  );
};
