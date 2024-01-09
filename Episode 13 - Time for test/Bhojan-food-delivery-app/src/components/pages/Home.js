import { useRestaurantList } from "../../hooks/useRestaurantList";
import { ComponentMapper } from "../templates/ComponentMapper";

export const Home = () => {
  const {
    restaurantList: { cards },
  } = useRestaurantList();

  return (
    <div>
      {cards?.map((section, index) => (
        <div key={index}>
          <ComponentMapper propsData={section?.card?.card} />
        </div>
      ))}
    </div>
  );
};
