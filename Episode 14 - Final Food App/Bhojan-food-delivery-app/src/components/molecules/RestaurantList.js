import { RestaurantItem } from "../atoms/RestaurantItem";

export const RestaurantList = ({ layoutData, restaurantList }) => {
  return (
    <div
      className={`pb-5 h-full grid ${layoutData?.rows && "grid-flow-col"} ${
        layoutData?.columns && `grid-cols-${layoutData?.columns}`
      } gap-x-4 gap-y-8 overflow-x-scroll overflow-y-hidden scroll-smooth`}
    >
      {restaurantList?.map((restaurant, index) => (
        <div key={index} className="min-w-64">
          <RestaurantItem propsData={restaurant} />
        </div>
      ))}
    </div>
  );
};
