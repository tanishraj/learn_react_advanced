import { useLocation, useNavigate } from "react-router-dom";
import { Input } from "./base/form-elements/Input";
import { usePopularCuisine } from "../hooks/usePopularCuisine";
import { useEffect, useRef } from "react";
import { PopularCuisine } from "./PopularCuisine";
import { SearchSuggestion } from "./SearchSuggestion";

export const GlobalSearch = () => {
  const { popularCuisine } = usePopularCuisine();
  const searchInputRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();
  const urlSearchParam = new URLSearchParams(location.search);
  const searchParam = urlSearchParam.get("query");

  useEffect(() => {
    searchInputRef.current.value = searchParam;
  }, [searchParam, searchInputRef]);

  const clearSearchSuggestion = () => {
    searchInputRef.current.value = "";
    navigate("/search");
  };

  const handletextInputEnter = () => {
    urlSearchParam.set("query", searchInputRef.current.value);
    const newSearch = `?${urlSearchParam.toString()}`;
    navigate({ search: newSearch });
  };

  return (
    <div className="mt-20">
      <Input
        ref={searchInputRef}
        showClearButton={searchParam}
        showBackButton={searchParam}
        onClear={clearSearchSuggestion}
        onEnter={handletextInputEnter}
        placeholder="search for restaurants or dishes..."
      />
      {searchParam ? (
        <SearchSuggestion />
      ) : (
        <div className="mt-20">
          <h4 className="font-bold capitalize text-250">Popular Cuisine</h4>
          <PopularCuisine popularCuisine={popularCuisine} />
        </div>
      )}
    </div>
  );
};
