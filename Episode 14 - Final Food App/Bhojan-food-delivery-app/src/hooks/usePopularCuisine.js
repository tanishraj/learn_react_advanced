import { useState, useEffect } from "react";
import { POPULAR_CUISINE_API } from "../utils/constants";

export const usePopularCuisine = () => {
  const [popularCuisine, setPopularCuisine] = useState([]);

  const fetchPopularCuisine = async () => {
    data = await fetch(POPULAR_CUISINE_API);
    response = await data.json();
    const cuisines =
      response?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.info;
    setPopularCuisine(cuisines);
  };

  useEffect(() => {
    fetchPopularCuisine();
  }, []);

  return { popularCuisine };
};
