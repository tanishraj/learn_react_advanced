import { useState } from "react";
import { MenuList } from "./MenuList";

export const AccordionItem = ({ categoryItem }) => {
  const [isAccordionOpen, useIsAccordionOpen] = useState(false);
  const title = categoryItem?.card?.card?.title ?? "";
  const menuList = categoryItem?.card?.card?.itemCards ?? [];

  return (
    <div className="block p-2.5 mt-7 bg-grey100 shadow-md">
      <div
        className="flex items-center justify-between hover:cursor-pointer"
        onClick={() => {
          useIsAccordionOpen(!isAccordionOpen);
        }}
      >
        <div className="font-bold tracking-wider text-100 text-grey800 ">
          {title}
        </div>
        <div className="font-semibold text-400">
          {isAccordionOpen ? "↑" : "↓"}
        </div>
      </div>
      {isAccordionOpen && (
        <div className="block border-grey300 border-t-2 pt-3">
          <MenuList menuList={menuList} />
        </div>
      )}
    </div>
  );
};
