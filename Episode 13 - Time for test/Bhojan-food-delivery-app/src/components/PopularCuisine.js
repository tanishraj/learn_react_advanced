import { Link } from "react-router-dom";
import { MiniCard } from "./base/cards/MiniCard";
import { POPULAR_CUISINE_IMAGE_PATH } from "../utils/constants";

export const PopularCuisine = ({ popularCuisine, handleSearchSuggestions }) => {
  return (
    <div className="mt-4 pb-5 flex gap-4 items-center justify-start overflow-x-scroll overflow-y-hidden scroll-smooth">
      {popularCuisine.map((cuisine) => (
        <Link
          className="p-0 flex-shrink-0"
          key={cuisine?.action?.link
            ?.split("swiggy://explore?query=")[1]
            ?.replaceAll("%20", "+")}
          // to={{
          //   pathname: "/search",
          //   search: `?query=${cuisine?.action?.link
          //     ?.split("swiggy://explore?query=")[1]
          //     ?.replaceAll("%20", "+")}`,
          // }}
          onClick={() => {
            handleSearchSuggestions(
              cuisine?.action?.link
                ?.split("swiggy://explore?query=")[1]
                ?.replaceAll("%20", " ")
            );
          }}
        >
          <MiniCard
            className="h-40 border border-grey200"
            imagePath={`${POPULAR_CUISINE_IMAGE_PATH}${cuisine?.imageId}`}
            imageAltText={cuisine?.id}
          />
        </Link>
      ))}
    </div>
  );
};
