import { MenuItem } from "./MenuItem";

export const MenuList = ({ menuList }) => {
  const menuItemList =
    menuList?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card
      ?.itemCards ?? [];

  return (
    <div className="menu-container mt-7">
      {menuItemList?.map((menuItem) => (
        <MenuItem key={menuItem?.card?.info?.id} menuItemInfo={menuItem} />
      ))}
    </div>
  );
};
