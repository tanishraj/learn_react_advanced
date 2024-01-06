import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SEARCH_SUGGESTION_API } from "../utils/constants";

export const useSearchSuggestion = () => {
  const location = useLocation();
  const urlSearchParam = new URLSearchParams(location.search);
  const searchParam = urlSearchParam.get("query");

  const [suggestionList, setSuggestionList] = useState([]);

  const fetchSearchSuggestion = async () => {
    const data = await fetch(
      `${SEARCH_SUGGESTION_API}&str=${searchParam}&trackingId=null`
    );
    const response = await data.json();
    const suggestions = response?.data?.suggestions ?? [];
    setSuggestionList(suggestions);
  };

  useEffect(() => {
    fetchSearchSuggestion();
  }, [searchParam]);

  return { suggestionList };
};
