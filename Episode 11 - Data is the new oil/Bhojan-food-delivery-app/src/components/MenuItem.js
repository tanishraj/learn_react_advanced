import { IMAGE_BASE_URL } from "../utils/constants";
import { Button } from "./Button";
import { DishIndicator } from "./DishIndicator";

export const MenuItem = ({ menuItemInfo }) => {
  const menuItem = menuItemInfo?.card?.info ?? {};

  return (
    <div className="menu-item-container leading-normal py-7 border-b border-grey200">
      <DishIndicator dishType={menuItem?.itemAttribute?.vegClassifier} />
      <div className="flex justify-between items-center gap-5">
        <div className="block">
          <div className="dish-name text-100 font-medium">{menuItem?.name}</div>
          <div className="dish-price font-50 font-medium">
            Rs. {menuItem?.price / 100}
          </div>
          <div className="dish-calorie-info font-50 text-grey400">
            {menuItem?.description}
          </div>
        </div>
        <div className="flex justify-center relative">
          <Button label="+" />
          <img
            className="h-20 w-25"
            src={IMAGE_BASE_URL + menuItem?.imageId}
            alt={menuItem?.name}
          />
        </div>
      </div>
    </div>
  );
};
