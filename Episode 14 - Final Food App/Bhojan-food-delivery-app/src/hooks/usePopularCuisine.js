import { useState, useEffect } from "react";
import { POPULAR_CUISINE_API } from "../utils/constants";

export const usePopularCuisine = () => {
  const [popularCuisine, setPopularCuisine] = useState([]);

  const fetchPopularCuisine = async () => {
    const popularCuisineData = await fetch(POPULAR_CUISINE_API, {
      headers: {
        "x-cors-api-key": process.env.X_CORS_API_KEY,
      },
    });
    const cuisineResponse = await popularCuisineData.json();
    const cuisines =
      cuisineResponse?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.info;
    setPopularCuisine(cuisines);
  };

  useEffect(() => {
    fetchPopularCuisine();
  }, []);

  return { popularCuisine };
};
