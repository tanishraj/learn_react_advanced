import { IoIosStar } from "react-icons/io";
import { SearchRestaurantCard } from "./base/cards/SearchRestaurantCard";

export const SearchRestaurantList = ({ restaurant }) => {
  const restaurantInfo = restaurant?.card?.card?.info ?? {};
  const restaurantList = restaurant?.card?.card?.restaurants ?? [];

  if (!restaurantInfo) return;

  return (
    <div>
      {restaurant?.card?.card?.info ? (
        <div className="grid mt-8 grid-cols-2 gap-4">
          <SearchRestaurantCard restaurantInfo={restaurantInfo} />
        </div>
      ) : (
        restaurantList?.length > 0 && (
          <div>
            <div className="border-dotted mt-6 border-b-2 border-grey300 gap-2"></div>
            <h3 className="font-bold mt-2 mb-2 text-250 text-primary text-center">
              {restaurant?.card?.card?.title}
            </h3>
            <div className="border-dotted border-b-2 border-grey300 gap-2"></div>
            <div className="grid mt-8 grid-cols-2 gap-4">
              {restaurantList.map((restaurant, index) => (
                <SearchRestaurantCard
                  key={index}
                  restaurantInfo={restaurant?.info}
                />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};
