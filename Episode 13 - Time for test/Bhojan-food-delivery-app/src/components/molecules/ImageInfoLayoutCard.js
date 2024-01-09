import { IMAGE_BASE_URL } from "../../utils/constants";

export const ImageInfoLayoutCard = ({ propsData }) => {
  const { id, gridElements } = propsData;
  const cards = gridElements?.infoWithStyle?.info;
  const isBanner = id === "topical_banner";

  return (
    <div className="pb-5 flex gap-4 items-center justify-between overflow-x-scroll overflow-y-hidden scroll-smooth">
      {cards?.map((card) => (
        <img
          key={card?.id}
          className={`max-w-full ${isBanner ? "h-64" : "h-40"}`}
          src={`${IMAGE_BASE_URL}${card?.imageId}`}
          alt={card?.accessibility?.altText}
        />
      ))}
    </div>
  );
};
