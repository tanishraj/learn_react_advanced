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
      <div className="filter-container">
        <button
          className={`filter-button ${isFiltered ? "selected" : ""}`}
          onClick={() => setIsFiltered(!isFiltered)}
        >
          Top Rated Restaurants
        </button>
      </div>
    </div>
  );
};
