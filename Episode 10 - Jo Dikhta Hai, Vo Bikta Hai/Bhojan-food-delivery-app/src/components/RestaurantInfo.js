export const RestaurantInfo = ({ restaurantInfo }) => {
  const {
    card: {
      card: { info },
    },
  } = restaurantInfo ?? { card: { card: { info: {} } } };

  return (
    <div className="res-details-container mt-7 text-grey400 text-base leading-normal">
      <div className="res-details">
        <div className="res-name text-grey950 text-300 font-bold">
          <h3>{info?.name}</h3>
        </div>
        <div className="res-cuisines">{info?.cuisines?.join(", ")}</div>
        <div className="res-address">
          {info?.areaName}, {info?.sla?.lastMileTravelString}
        </div>
        <div className="res-location py-5 border-b border-dashed border-grey400 text-grey500 font-bold">
          {info?.feeDetails?.message}
        </div>
      </div>
      <div className="delivery py-5 text-100 text-grey700 font-bold flex items-center justify-start gap-16">
        <div className="delivery-time">{info?.sla?.slaString}</div>
        <div className="average-price">{info?.costForTwoMessage}</div>
      </div>
    </div>
  );
};
