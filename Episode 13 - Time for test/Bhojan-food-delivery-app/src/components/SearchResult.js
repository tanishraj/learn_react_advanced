import { useSearchResult } from "../hooks/useSearchResult";
import { SearchDishCard } from "./base/cards/SearchDishCard";
import { SearchRestaurantCard } from "./base/cards/SearchRestaurantCard";

export const SearchResult = () => {
  const { searchResult } = useSearchResult();
  const { searchResultsForDishes, searchResultsForRestaurants } =
    searchResult ?? {};

  return (
    <div className="grid grid-cols-1">
      <div className="grid mt-8 grid-cols-2 gap-4">
        {searchResultsForDishes &&
          searchResultsForDishes.map((dish, index) => (
            <SearchDishCard key={index} dish={dish} />
          ))}

        {searchResultsForRestaurants &&
          searchResultsForRestaurants.map((restaurant, index) => (
            <SearchRestaurantCard key={index} restaurant={restaurant} />
          ))}
      </div>

      {!searchResultsForDishes && !searchResultsForRestaurants && (
        <div className="block text-center px-4 py-8 text-grey400 font-medium text-250">
          Sorry, we haven't found anything. Try to search for other dishes or
          restaurnats.
        </div>
      )}
    </div>
  );
};
