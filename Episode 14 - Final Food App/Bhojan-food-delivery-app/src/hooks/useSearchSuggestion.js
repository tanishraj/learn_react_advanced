import { useEffect, useState } from "react";
import { SEARCH_SUGGESTION_API } from "../utils/constants";

export const useSearchSuggestion = (searchKeyword) => {
  const [suggestionList, setSuggestionList] = useState([]);

  const fetchSearchSuggestion = async () => {
    const data = await fetch(
      `${SEARCH_SUGGESTION_API}&str=${searchKeyword}&trackingId=null`,
      {
        headers: {
          "x-cors-api-key": process.env.X_CORS_API_KEY,
        },
      }
    );
    const response = await data.json();
    const suggestions = response?.data?.suggestions ?? [];
    setSuggestionList(suggestions);
  };

  useEffect(() => {
    fetchSearchSuggestion();
  }, [searchKeyword]);

  return { suggestionList };
};
