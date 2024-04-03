import { useEffect, useState } from "react";
import { SEARCH_SUGGESTION_API } from "../utils/constants";

export const useSearchSuggestion = (searchKeyword) => {
  const [suggestionList, setSuggestionList] = useState([]);

  const fetchSearchSuggestion = async () => {
    const data = await fetch(
      `${SEARCH_SUGGESTION_API}&str=${searchKeyword}&trackingId=null`,
      {
        headers: {
          "x-cors-api-key": "temp_907965272042a5006e2ff57757f88d22",
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
