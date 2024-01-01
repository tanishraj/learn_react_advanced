import { MenuItem } from "./MenuItem";

export const MenuList = ({ menuList }) => {
  return (
    <div data-testid="menuList" className="menu-container">
      {menuList?.map((menuItem) => (
        <MenuItem key={menuItem?.card?.info?.id} menuItemInfo={menuItem} />
      ))}
    </div>
  );
};
