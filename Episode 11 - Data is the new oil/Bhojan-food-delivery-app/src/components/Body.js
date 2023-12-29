import React, { useCallback, useEffect, useState } from "react";
import { Search } from "./Search";
import { RestaurantList } from "./RestaurantList";
import { useRestaurantList } from "../hooks/useRestaurantList";
import { FilterRestaurant } from "./FilterRestaurant";

export const Body = () => {
  const { restaurantList } = useRestaurantList() ?? {};
  const [finalRestaurantList, setFinalRestaurantList] = useState([]);

  useEffect(() => {
    setFinalRestaurantList(restaurantList);
  }, [restaurantList]);

  const getFilteredRestaurants = (filteredRestauratns = restaurantList) => {
    setFinalRestaurantList(filteredRestauratns);
  };

  return (
    <div className="container">
      <Search
        restaurantList={restaurantList}
        getSearchResults={getFilteredRestaurants}
      />
      <FilterRestaurant
        restaurantList={restaurantList}
        getTopRatedRestaurants={getFilteredRestaurants}
      />
      <RestaurantList restaurantList={finalRestaurantList} />
    </div>
  );
};
