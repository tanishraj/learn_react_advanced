import { useLocation, useNavigate } from "react-router-dom";
import { Input } from "./base/form-elements/Input";
import { usePopularCuisine } from "../hooks/usePopularCuisine";
import { useEffect, useState } from "react";
import { PopularCuisine } from "./PopularCuisine";
import { SearchSuggestion } from "./SearchSuggestion";
import { SearchResult } from "./SearchResult";

export const GlobalSearch = () => {
  const { popularCuisine } = usePopularCuisine();
  const [searchKeyword, setSearchKeyword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const urlSearchParam = new URLSearchParams(location.search);
  const searchParam = urlSearchParam.get("query");

  useEffect(() => {
    setSearchKeyword(searchParam || "");
  }, [searchParam]);

  const clearSearchSuggestion = () => {
    setSearchKeyword("");
    navigate("/search");
  };

  const handletextInputEnter = () => {
    urlSearchParam.set("query", searchKeyword);
    const newSearch = `?${urlSearchParam.toString()}`;
    navigate({ search: newSearch });
  };

  const handleSearchSuggestions = (value) => {
    if (typeof value === "string") {
      setSearchKeyword(value);
    } else {
      setSearchKeyword(value?.target?.value);
    }
  };

  const handleSuggestionCardClick = (value) => {
    urlSearchParam.set("query", value);
    const newSearch = `?${urlSearchParam.toString()}`;
    navigate({ search: newSearch });
  };

  return (
    <div className="mt-20">
      <Input
        value={searchKeyword}
        showClearButton={searchParam || searchKeyword}
        showBackButton={searchParam}
        onClear={clearSearchSuggestion}
        onEnter={handletextInputEnter}
        onChange={handleSearchSuggestions}
        placeholder="search for restaurants or dishes..."
      />
      {searchKeyword && !searchParam && (
        <SearchSuggestion
          searchKeyword={searchKeyword}
          suggestionCardClickHandler={handleSuggestionCardClick}
        />
      )}
      {searchParam && searchKeyword && <SearchResult />}
      {!searchParam && !searchKeyword && (
        <div className="mt-20">
          <h4 className="font-bold capitalize text-250">Popular Cuisine</h4>
          <PopularCuisine
            popularCuisine={popularCuisine}
            handleSearchSuggestions={handleSearchSuggestions}
          />
        </div>
      )}
    </div>
  );
};
