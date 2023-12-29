export const MenuItem = ({ menuItemInfo }) => {
  const menuItem = menuItemInfo?.card?.info ?? {};

  return (
    <div className="menu-item-container leading-normal py-7 border-b border-grey200">
      <div
        className={`indicator w-5 h-5 flex items-center justify-center border border-primary mb-1.5 ${
          menuItem?.itemAttribute?.vegClassifier === "VEG"
            ? "border-primary"
            : "border-red"
        } `}
      >
        <div
          className={`indicator-circle w-2.5 h-2.5 bg-primary rounded-full ${
            menuItem?.itemAttribute?.vegClassifier === "VEG"
              ? "bg-primary"
              : "bg-red"
          } `}
        ></div>
      </div>
      <div className="dish-name text-100 font-medium">{menuItem?.name}</div>
      <div className="dish-price font-50 font-medium">
        Rs. {menuItem?.price / 100}
      </div>
      <div className="dish-calorie-info font-50 text-grey400">
        {menuItem?.description}
      </div>
    </div>
  );
};
