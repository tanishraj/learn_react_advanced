import { RestaurantList } from "./RestaurantList";

export const FavouriteRestaurantInfoWithStyle = ({ propsData }) => {
  const layoutData = propsData?.layout;
  const restaurantList = propsData?.gridElements?.infoWithStyle?.restaurants;
  return (
    <div className="block">
      <RestaurantList layoutData={layoutData} restaurantList={restaurantList} />
    </div>
  );
};
