import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  SUBMIT_ACTION_SUGGESTION_API,
  SUBMIT_ACTION_SUGGESTION_API_FRACTION,
} from "../utils/constants";

export const useSearchResult = () => {
  const [searchResult, setSearchResult] = useState({});
  const location = useLocation();
  const urlSearchParam = new URLSearchParams(location.search);
  const searchParam = urlSearchParam.get("query");

  console.log(searchParam);

  const fetchSearchResult = async () => {
    data = await fetch(
      `${SUBMIT_ACTION_SUGGESTION_API}${searchParam}${SUBMIT_ACTION_SUGGESTION_API_FRACTION}`
    );
    response = await data.json();
    const _searchResultTypeTabsData =
      response?.data?.cards?.[0]?.card?.card?.tab;
    const searchResultsForDishes =
      response?.data?.cards?.[1]?.groupedCard?.cardGroupMap?.DISH?.cards;
    const searchResultsForRestaurants =
      response?.data?.cards?.[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;
    setSearchResult({ searchResultsForDishes, searchResultsForRestaurants });
  };

  useEffect(() => {
    fetchSearchResult();
  }, [searchParam]);

  return { searchResult };
};
