import { useEffect, useState, useRef } from "react";
import { Card } from "./Card";
import { CardShimmer } from "./CardShimmer";

export const CardList = ({ restaurantList }) => {
  const [topRatedRestaurants, setTopRatedRestaurants] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [intersection, setIntersection] = useState(false);
  const cardListRef = useRef(null);

  useEffect(() => {
    if (restaurantList?.length > 0) {
      setTopRatedRestaurants(restaurantList);
    }
  }, [restaurantList]);

  const filterTopRatedRestaurants = () => {
    setIsFiltered((oldValue) => {
      if (oldValue === false) {
        const filteredData = topRatedRestaurants.filter((restaurants) => {
          return Number(restaurants?.info?.avgRating) > 4.5;
        });
        setTopRatedRestaurants(filteredData);
        return true;
      }
      setTopRatedRestaurants(restaurantList);
      return false;
    });
  };

  return (
    <div className="filter-card-list-container">
      <div className="filter-container">
        <button
          className={`filter-button ${isFiltered ? "selected" : ""}`}
          onClick={filterTopRatedRestaurants}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="card-list-container">
        {restaurantList?.length ? (
          topRatedRestaurants?.map((cardData) => (
            <Card key={cardData?.info?.id} cardData={cardData} />
          ))
        ) : (
          <>
            <CardShimmer />
            <CardShimmer />
            <CardShimmer />
            <CardShimmer />
          </>
        )}
      </div>
      <div ref={cardListRef}></div>
    </div>
  );
};
