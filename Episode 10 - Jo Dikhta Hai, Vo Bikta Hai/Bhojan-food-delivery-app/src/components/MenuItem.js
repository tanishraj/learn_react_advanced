export const MenuItem = ({ menuItemInfo }) => {
  const menuItem = menuItemInfo?.card?.info ?? {};

  return (
    <div className="menu-item-container">
      <div
        className={`indicator ${
          menuItem?.itemAttribute?.vegClassifier === "VEG" ? "veg" : "non-veg"
        } `}
      >
        <div className="indicator-circle"></div>
      </div>
      <div className="dish-name">{menuItem?.name}</div>
      <div className="dish-price">Rs. {menuItem?.price / 100}</div>
      <div className="dish-calorie-info">{menuItem?.description}</div>
    </div>
  );
};
