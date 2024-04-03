import { useState, useEffect } from "react";
import { RESTAURANT_DETAILS_API_URL } from "../utils/constants";

export const useRestaurantMenu = (resId) => {
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const [restaurant, _offers, menu] = restaurantDetails ?? [];

  const getRestaurantDetails = async () => {
    const restaurantDetails = await fetch(RESTAURANT_DETAILS_API_URL(resId), {
      headers: {
        "x-cors-api-key": "temp_907965272042a5006e2ff57757f88d22",
      },
    });
    const {
      data: { cards },
    } = (await restaurantDetails.json()) ?? {};
    setRestaurantDetails(cards);
  };

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  return { restaurant, menu };
};
