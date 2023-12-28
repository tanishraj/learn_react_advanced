import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_DETAILS_API_URL } from "../utils/constants";
import { RestaurantInfo } from "./RestaurantInfo";
import { MenuList } from "./MenuList";

export const RestaurantDetails = () => {
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const [restaurant, _offers, menu] = restaurantDetails ?? [];
  const { resId } = useParams();

  const fetchRestaurantDetails = async () => {
    const restaurantDetails = await fetch(RESTAURANT_DETAILS_API_URL(resId));
    const {
      data: { cards },
    } = (await restaurantDetails.json()) ?? {};
    setRestaurantDetails(cards);
  };

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  return (
    <div className="res-cotnainer">
      <RestaurantInfo restaurantInfo={restaurant} />
      <MenuList menuList={menu} key={menu} />
    </div>
  );
};
