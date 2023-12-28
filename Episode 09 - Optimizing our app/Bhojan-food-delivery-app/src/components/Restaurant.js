import { useParams } from "react-router-dom";
import { RestaurantInfo } from "./RestaurantInfo";
import { MenuList } from "./MenuList";
import { useRestaurantMenu } from "../hooks/useRestaurantMenu";

export const RestaurantDetails = () => {
  const { resId } = useParams();
  const { restaurant, menu } = useRestaurantMenu(resId);

  return (
    <div className="res-cotnainer">
      <RestaurantInfo restaurantInfo={restaurant} />
      <MenuList menuList={menu} key={menu} />
    </div>
  );
};
