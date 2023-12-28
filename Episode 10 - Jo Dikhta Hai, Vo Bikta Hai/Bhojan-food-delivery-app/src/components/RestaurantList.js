import { RestaurantCard } from "./RestaurantCard";
import { CardShimmer } from "./shimmer/CardShimmer";

const shimmerSize = new Array(4).fill(1);

export const RestaurantList = ({ restaurantList }) => {
  return (
    <div className="card-list-container">
      {restaurantList?.length
        ? restaurantList.map((cardData) => (
            <RestaurantCard key={cardData?.info?.id} cardData={cardData} />
          ))
        : shimmerSize.map((_item, index) => <CardShimmer key={index} />)}
    </div>
  );
};
