import { useSearchSuggestion } from "../hooks/useSearchSuggestion";
import { SuggestionCard } from "./base/cards/SuggestionCard";

export const SearchSuggestion = () => {
  const { suggestionList } = useSearchSuggestion();

  console.log("SUGGESTION LIST IN COMPONENT", suggestionList);

  return (
    <div className="py-3 px-6 mt-3">
      {suggestionList.map((suggestion, index) => (
        <div>
          <SuggestionCard key={index} info={suggestion} />
        </div>
      ))}
    </div>
  );
};
