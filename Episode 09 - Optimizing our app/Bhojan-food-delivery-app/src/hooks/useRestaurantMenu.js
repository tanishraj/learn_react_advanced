import { useState, useEffect } from "react";
import { RESTAURANT_DETAILS_API_URL } from "../utils/constants";

export const useRestaurantMenu = (resId) => {
  console.log(resId);
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const [restaurant, _offers, menu] = restaurantDetails ?? [];

  const getRestaurantDetails = async () => {
    const restaurantDetails = await fetch(RESTAURANT_DETAILS_API_URL(resId));
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
