import { useEffect, useState } from "react";

export const FilterRestaurant = ({
  restaurantList,
  getTopRatedRestaurants,
}) => {
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    if (isFiltered) {
      getTopRatedRestaurants(filterTopRatedRestaurants());
    } else {
      getTopRatedRestaurants();
    }
  }, [isFiltered]);

  const filterTopRatedRestaurants = () => {
    return restaurantList.filter((restaurants) => {
      return Number(restaurants?.info?.avgRating) > 4.2;
    });
  };

  return (
    <div className="filter-card-list-container">
      <div className="filter-container pt-12 pb-2.5">
        <button
          data-testid="topRatedRestaurantButton"
          className={`filter-button border border-primary rounded-md px-4 py-2 font-medium text-primary cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white ${
            isFiltered ? "bg-primary text-white" : ""
          }`}
          onClick={() => setIsFiltered(!isFiltered)}
        >
          Top Rated Restaurants
        </button>
      </div>
    </div>
  );
};
