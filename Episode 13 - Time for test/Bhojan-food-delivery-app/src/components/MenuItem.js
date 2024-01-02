import { useDispatch } from "react-redux";
import { IMAGE_BASE_URL } from "../utils/constants";
import { Button } from "./Button";
import { DishIndicator } from "./DishIndicator";
import { addToCart } from "../redux/slices/cartSlice";

export const MenuItem = ({ menuItemInfo }) => {
  const menuItem = menuItemInfo?.card?.info ?? {};
  const dispatch = useDispatch();

  const clickHandler = (menuItem) => {
    dispatch(addToCart(menuItem));
  };

  return (
    <div
      data-testid="menuItem"
      className="menu-item-container leading-normal py-7 border-b border-grey200"
    >
      <DishIndicator dishType={menuItem?.itemAttribute?.vegClassifier} />
      <div className="flex justify-between items-center gap-5">
        <div className="block w-11/12">
          <div className="dish-name text-100 font-medium">{menuItem?.name}</div>
          <div className="dish-price font-50 font-medium">
            Rs. {menuItem?.price / 100}
          </div>
          <div className="dish-calorie-info font-50 text-grey400">
            {menuItem?.description}
          </div>
        </div>
        <div className="flex justify-center relative w-1/12">
          <Button
            data-testid="menuButton"
            label="+"
            onClick={() => clickHandler(menuItemInfo)}
          />
          <img
            className="block  max-w-full h-auto w-full"
            src={
              menuItem?.imageId
                ? IMAGE_BASE_URL + menuItem?.imageId
                : "https://picsum.photos/300/300"
            }
            alt={menuItem?.name}
          />
        </div>
      </div>
    </div>
  );
};
