import { useState, useEffect } from "react";
import { POPULAR_CUISINE_API } from "../utils/constants";

export const usePopularCuisine = () => {
  const [popularCuisine, setPopularCuisine] = useState([]);

  const fetchPopularCuisine = async () => {
    const popularCuisineData = await fetch(POPULAR_CUISINE_API, {
      headers: {
        "x-cors-api-key": "temp_907965272042a5006e2ff57757f88d22",
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
