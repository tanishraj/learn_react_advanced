import { IMAGE_BASE_URL } from "../../utils/constants";

export const SuggestionCard = ({
  info,
  suggestionCardClickHandler,
  ...restProps
}) => {
  return (
    <div
      className="px-6 py-3 flex items-center gap-4 cursor-pointer"
      onClick={() => {
        suggestionCardClickHandler(info?.text);
      }}
      {...restProps}
    >
      <img
        className="h-16 aspect-square"
        src={`${IMAGE_BASE_URL}${info?.cloudinaryId}`}
        alt={info?.text}
      />
      <div>
        <div className="font-medium text-100">{info?.text}</div>
        <div className="font-normal text-grey400 capitalize text-50">
          {info?.type?.toLowerCase()}
        </div>
      </div>
    </div>
  );
};
