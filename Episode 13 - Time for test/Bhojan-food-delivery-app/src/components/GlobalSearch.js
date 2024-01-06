import { Input } from "./base/form-elements/Input";
import { POPULAR_CUISINE_IMAGE_PATH } from "../utils/constants";
import { MiniCard } from "./base/cards/MiniCard";
import { Link } from "react-router-dom";
import { usePopularCuisine } from "../hooks/usePopularCuisine";

export const GlobalSearch = () => {
  const { popularCuisine } = usePopularCuisine();

  return (
    <div className="mt-20">
      <Input placeholder="search for restaurants or dishes..." />
      <div className="mt-20">
        <h4 className="font-bold capitalize text-250">Popular Cuisine</h4>
        <div className="mt-4 flex gap-4 flex-wrap items-center justify-start">
          {popularCuisine.map((cuisine) => (
            <Link
              key={cuisine?.action?.link
                ?.split("swiggy://explore?query=")[1]
                ?.replaceAll("%20", "+")}
              to={`/search/?query=${cuisine?.action?.link
                ?.split("swiggy://explore?query=")[1]
                ?.replaceAll("%20", "+")}`}
            >
              <MiniCard
                className="h-40 border border-grey200"
                imagePath={`${POPULAR_CUISINE_IMAGE_PATH}${cuisine?.imageId}`}
                imageAltText={cuisine?.id}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
