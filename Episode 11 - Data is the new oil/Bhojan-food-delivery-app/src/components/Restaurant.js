import { useParams } from "react-router-dom";
import { RestaurantInfo } from "./RestaurantInfo";
import { MenuList } from "./MenuList";
import { useRestaurantMenu } from "../hooks/useRestaurantMenu";
import { AccordionList } from "./AccordionList";
import { ITEM_CATEGORY_TEXT } from "../utils/constants";
import { useEffect, useState } from "react";

export const RestaurantDetails = () => {
  const { resId } = useParams();
  const { restaurant, menu } = useRestaurantMenu(resId);
  const [categoriesList, setCategoriesList] = useState([]);

  const getCategoryList = () => {
    const categoryList = menu?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) => {
        return item?.card?.card?.["@type"] === ITEM_CATEGORY_TEXT;
      }
    );
    setCategoriesList(categoryList);
  };

  useEffect(() => {
    getCategoryList();
  }, [menu]);

  return (
    <div className="res-cotnainer">
      <RestaurantInfo restaurantInfo={restaurant} />
      <AccordionList categoriesList={categoriesList} />
    </div>
  );
};
