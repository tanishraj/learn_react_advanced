import { useSearchResult } from "../hooks/useSearchResult";
import { SearchRestaurantList } from "./SearchRestaurantList";
import { SearchDishCard } from "./base/cards/SearchDishCard";

export const SearchResult = () => {
  const { searchResult } = useSearchResult();

  const { searchResultsForDishes, searchResultsForRestaurants } =
    searchResult ?? {};

  if (!(searchResultsForDishes || searchResultsForRestaurants))
    return (
      <div className="block text-center px-4 py-8 text-grey400 font-medium text-250">
        Wait! we are fetching the details for you...
      </div>
    );
  return (
    <div className="">
      {searchResultsForDishes && (
        <div className="grid mt-8 grid-cols-2 gap-4">
          {searchResultsForDishes.map((dish, index) => (
            <SearchDishCard key={index} dish={dish} />
          ))}
        </div>
      )}

      {searchResultsForRestaurants &&
        searchResultsForRestaurants.map((restaurant, index) => (
          <SearchRestaurantList key={index} restaurant={restaurant} />
        ))}

      {searchResultsForDishes?.length === 0 &&
        searchResultsForRestaurants?.length === 0 && (
          <div className="block text-center px-4 py-8 text-grey400 font-medium text-250">
            Sorry, we haven't found anything. Try to search for other dishes or
            restaurnats.
          </div>
        )}
    </div>
  );
};
