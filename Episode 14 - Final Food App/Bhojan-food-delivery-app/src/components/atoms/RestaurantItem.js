import { FaStar } from "react-icons/fa";
import { IMAGE_BASE_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

export const RestaurantItem = ({ propsData }) => {
  const restaurant = propsData;

  return (
    <Link to={`/restaurant/${propsData?.info?.id}`}>
      <div className="flex flex-col gap-4">
        <div className="relative">
          <div className="flex w-full relative">
            <img
              className="object-cover aspect-video rounded-lg"
              src={`${IMAGE_BASE_URL}${restaurant?.info?.cloudinaryImageId}`}
              alt={restaurant?.info?.name}
            />
            <div className="flex rounded-lg flex-col justify-end w-full h-20 absolute bottom-0 p-2 bg-gradient-to-t from-grey800">
              <div className="block z-10 text-white font-bold">
                {restaurant?.info?.aggregatedDiscountInfoV3?.header}{" "}
                {restaurant?.info?.aggregatedDiscountInfoV3?.subHeader}
              </div>
            </div>
          </div>
        </div>
        <div className="details">
          <div className="font-bold text-grey-800 text-100 tracking-wide line-clamp-1">
            {restaurant?.info?.name}
          </div>
          <div className="font-medium text-grey700 text-100">
            <span className="flex items-center justify-start gap-1">
              <FaStar size={13} />
              {restaurant?.info?.avgRatingString} -{" "}
              {restaurant?.info?.sla?.slaString}
            </span>
          </div>
          <div className="text-grey400 line-clamp-1">
            {restaurant?.info?.cuisines?.join(", ")}
          </div>
          <div className="text-grey400 line-clamp-1">
            {restaurant?.info?.areaName}
          </div>
        </div>
      </div>
    </Link>
  );
};
