import { IoIosStar } from "react-icons/io";
import { IMAGE_BASE_URL } from "../../../utils/constants";

export const SearchRestaurantCard = ({ restaurantInfo }) => {
  return (
    <div className="flex item-center justify-start gap-3 p-4 border border-grey300">
      <div className="block">
        <img
          className="h-28 aspect-square"
          src={`${IMAGE_BASE_URL}${restaurantInfo?.cloudinaryImageId}`}
          alt={restaurantInfo?.name}
        />
      </div>
      <div className="block">
        <div className="font-bold text-200 text-grey700">
          {restaurantInfo?.name}
        </div>
        <div className="flex items-center justify-start gap-2">
          <span className="flex items-center gap-1">
            <IoIosStar />
            {restaurantInfo?.avgRatingString}
          </span>
          - <span className="uppercase">{restaurantInfo?.sla?.slaString}</span>-{" "}
          <span className="uppercase">{restaurantInfo?.costForTwoMessage}</span>
        </div>
        <div className="flex items-center justify-start gap-2">
          <span className="font-bold text-100 text-gradient11">
            {restaurantInfo?.availability?.opened ? "Open" : "Closed"}
          </span>
          -
          <span className="text-grey400">
            {restaurantInfo?.cuisines?.join(", ")}
          </span>
        </div>
      </div>
    </div>
  );
};
