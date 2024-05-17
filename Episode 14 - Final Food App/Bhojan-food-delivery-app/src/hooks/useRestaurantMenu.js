import { useState, useEffect } from "react";
import { RESTAURANT_DETAILS_API_URL } from "../utils/constants";

export const useRestaurantMenu = (resId) => {
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const [_empty, _empty2, restaurant, _offers, menu] = restaurantDetails ?? [];

  const getRestaurantDetails = async () => {
    const restaurantDetails = await fetch(RESTAURANT_DETAILS_API_URL(resId), {
      headers: {
        "x-cors-api-key": process.env.X_CORS_API_KEY
      }
    });
    const {
      data: { cards }
    } = (await restaurantDetails.json()) ?? {};
    setRestaurantDetails(cards);
  };

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  return { restaurant, menu };
};
