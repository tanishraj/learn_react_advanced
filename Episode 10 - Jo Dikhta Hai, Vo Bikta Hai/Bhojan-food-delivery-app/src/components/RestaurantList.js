import { RestaurantCard } from "./RestaurantCard";
import { CardShimmer } from "./shimmer/CardShimmer";

const shimmerSize = new Array(4).fill(1);

export const RestaurantList = ({ restaurantList }) => {
  return (
    <div className="card-list-container my-7 grid grid-cols-4 gap-8">
      {restaurantList?.length
        ? restaurantList.map((cardData) => (
            <RestaurantCard key={cardData?.info?.id} cardData={cardData} />
          ))
        : shimmerSize.map((_item, index) => <CardShimmer key={index} />)}
    </div>
  );
};
