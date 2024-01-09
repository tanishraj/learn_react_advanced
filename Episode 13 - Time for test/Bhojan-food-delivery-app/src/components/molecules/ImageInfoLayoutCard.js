import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../utils/constants";

export const ImageInfoLayoutCard = ({ propsData }) => {
  const { id, gridElements } = propsData;
  const cards = gridElements?.infoWithStyle?.info;
  const isBanner = id === "topical_banner";

  return (
    <div className="pb-5 flex gap-4 items-center justify-between overflow-x-scroll overflow-y-hidden scroll-smooth">
      {cards?.map((card) => (
        <Link
          className="w-auto"
          key={card?.id}
          to={`${card?.action?.link.replaceAll("https://www.swiggy.com/", "")}`}
        >
          <img
            className={`${isBanner ? "h-64" : "h-40"} max-w-none`}
            src={`${IMAGE_BASE_URL}${card?.imageId}`}
            alt={card?.accessibility?.altText}
          />
        </Link>
      ))}
    </div>
  );
};
