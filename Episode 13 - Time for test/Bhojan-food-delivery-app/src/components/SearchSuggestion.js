import { useSearchSuggestion } from "../hooks/useSearchSuggestion";
import { SuggestionCard } from "./base/cards/SuggestionCard";

export const SearchSuggestion = ({
  searchKeyword,
  suggestionCardClickHandler,
}) => {
  const { suggestionList } = useSearchSuggestion(searchKeyword);

  return (
    <div className="py-3 px-6 mt-3">
      {suggestionList.map((suggestion, index) => (
        <SuggestionCard
          key={index}
          info={suggestion}
          suggestionCardClickHandler={suggestionCardClickHandler}
        />
      ))}
    </div>
  );
};
