import { FaArrowRight } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { DishIndicator } from "./DishIndicator";
import { IMAGE_BASE_URL } from "../../utils/constants";

export const SearchDishCard = ({ dish }) => {
  const dishInfo = dish?.card?.card?.info;
  const restaurantInfo = dish?.card?.card?.restaurant?.info;

  if (!(dishInfo || restaurantInfo)) return;

  return (
    <div className="border border-solid border-grey300 p-4 rounded-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col gap-2">
          <div className="font-bold text-100 text-grey700">
            By {restaurantInfo?.name}
          </div>
          <div className="flex items-center justify-start gap-2">
            <span className="flex items-center justify-start gap-1">
              <IoIosStar />
              {restaurantInfo?.avgRatingString}
            </span>
            - <span>{restaurantInfo?.sla?.slaString}</span>
          </div>
        </div>
        <FaArrowRight className="text-grey400 text-300 font-medium" />
      </div>
      <div className="border-dotted border-b-2 border-grey300 gap-2"></div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-start gap-3">
            <span className="">
              <DishIndicator dishType={"VEG"} />
            </span>
            {dishInfo?.ribbon?.text && (
              <span className="flex items-center justify-start gap-1">
                <IoIosStar />
                <span className="uppercase text-50 text-gradient11 font-medium">
                  {dishInfo?.ribbon?.text}
                </span>
              </span>
            )}
          </div>
          <div className="font-medium text-100">{dishInfo?.name}</div>
          <div className="text-50">{restaurantInfo?.costForTwoMessage}</div>
        </div>
        <div className="">
          <img
            className="h-28 aspect-square"
            src={`${IMAGE_BASE_URL}${dishInfo?.imageId}`}
            alt={dishInfo?.name}
          />
          <button className=" bg-grey300 font-medium w-full p-1 hover:bg-primary hover:text-white transition-all">
            Add +
          </button>
        </div>
      </div>
    </div>
  );
};
