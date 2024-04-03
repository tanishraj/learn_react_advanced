import { useEffect, useState } from "react";
import { RESTAURANT_LIST_API_URL } from "../utils/constants";

export const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const getRestaurantList = async () => {
    const apiResponse = await fetch(RESTAURANT_LIST_API_URL, {
      headers: {
        "x-cors-api-key": "temp_907965272042a5006e2ff57757f88d22",
      },
    });
    const swiggyData = await apiResponse.json();

    const {
      data: { cards },
    } = swiggyData;

    const bestoffers = cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
    const restaurants =
      cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setRestaurantList({ restaurants, bestoffers, cards });
  };

  useEffect(() => {
    getRestaurantList();
  }, []);

  return { restaurantList };
};
