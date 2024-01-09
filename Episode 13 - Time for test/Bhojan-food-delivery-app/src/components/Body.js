import React, { useEffect, useState } from "react";
import { Search } from "./Search";
import { RestaurantList } from "./RestaurantList";
import { useRestaurantList } from "../hooks/useRestaurantList";
import { FilterRestaurant } from "./FilterRestaurant";
import { Home } from "./pages/Home";

export const Body = () => {
  const {
    restaurantList: { restaurants, bestoffers },
  } = useRestaurantList() ?? {};
  const [finalRestaurantList, setFinalRestaurantList] = useState([]);

  useEffect(() => {
    setFinalRestaurantList(restaurants);
  }, [restaurants]);

  const getFilteredRestaurants = (filteredRestauratns = restaurants) => {
    setFinalRestaurantList(filteredRestauratns);
  };

  return (
    <div className="container m-auto">
      <Home />
      <Search
        restaurantList={restaurants}
        getSearchResults={getFilteredRestaurants}
      />
      <FilterRestaurant
        restaurantList={restaurants}
        getTopRatedRestaurants={getFilteredRestaurants}
      />
      <RestaurantList restaurantList={finalRestaurantList} />
    </div>
  );
};
