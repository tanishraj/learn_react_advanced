export const RestaurantInfo = ({ restaurantInfo }) => {
  const {
    card: {
      card: { info },
    },
  } = restaurantInfo ?? { card: { card: { info: {} } } };

  return (
    <div className="res-details-container">
      <div className="res-details">
        <div className="res-name">
          <h3>{info?.name}</h3>
        </div>
        <div className="res-cuisines">{info?.cuisines?.join(", ")}</div>
        <div className="res-address">
          {info?.areaName}, {info?.sla?.lastMileTravelString}
        </div>
        <div className="res-location">{info?.feeDetails?.message}</div>
      </div>
      <div className="delivery">
        <div className="delivery-time">{info?.sla?.slaString}</div>
        <div className="average-price">{info?.costForTwoMessage}</div>
      </div>
    </div>
  );
};
