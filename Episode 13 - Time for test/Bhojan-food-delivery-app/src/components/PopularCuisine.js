import { Link } from "react-router-dom";
import { MiniCard } from "./base/cards/MiniCard";
import { POPULAR_CUISINE_IMAGE_PATH } from "../utils/constants";

export const PopularCuisine = ({ popularCuisine }) => {
  return (
    <div className="mt-4 flex gap-4 flex-wrap items-center justify-start">
      {popularCuisine.map((cuisine) => (
        <Link
          key={cuisine?.action?.link
            ?.split("swiggy://explore?query=")[1]
            ?.replaceAll("%20", "+")}
          to={{
            pathname: "/search",
            search: `?query=${cuisine?.action?.link
              ?.split("swiggy://explore?query=")[1]
              ?.replaceAll("%20", "+")}`,
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
