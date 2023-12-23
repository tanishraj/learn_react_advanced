import { Card } from "./Card";
import { zomatoData } from "../utils/zomato-data";
import { useState } from "react";

export const CardList = () => {
  const [topRatedRestaurants, setTopRatedRestaurants] = useState(zomatoData);
  const [isFiltered, setIsFiltered] = useState(false);

  const filterTopRatedRestaurants = () => {
    setIsFiltered((oldValue) => {
      if (oldValue === false) {
        const filteredData = topRatedRestaurants.filter((restaurants) => {
          return Number(restaurants?.info?.rating?.aggregate_rating) > 4;
        });
        setTopRatedRestaurants(filteredData);
        return true;
      }
      setTopRatedRestaurants(zomatoData);
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
        {topRatedRestaurants.map((cardData) => (
          <Card key={cardData?.info?.resId} cardData={cardData} />
        ))}
      </div>
    </div>
  );
};
