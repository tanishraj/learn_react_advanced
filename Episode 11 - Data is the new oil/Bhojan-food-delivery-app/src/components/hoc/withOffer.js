export const withOffer = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="withOffer flex relative">
        {props.cardData.info.aggregatedDiscountInfoV3?.header !== "" ? (
          <div className="absolute bg-primary top-2 left-2 px-2 py-1 rounded-xs z-10 text-50 font-semibold text-black">
            {props.cardData.info.aggregatedDiscountInfoV3?.header} {" - "}
            {props.cardData.info.aggregatedDiscountInfoV3?.subHeader}
          </div>
        ) : null}

        <RestaurantCard {...props} />
      </div>
    );
  };
};
