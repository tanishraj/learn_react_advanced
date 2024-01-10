import { MenuList } from "../molecules/MenuList";

export const AccordionItem = ({
  categoryItem,
  isAccordionOpen,
  setAccordionOpenIndex,
}) => {
  const title = categoryItem?.card?.card?.title ?? "";
  const menuList = categoryItem?.card?.card?.itemCards ?? [];

  return (
    <div
      data-testid="accordionItem"
      className="block p-2.5 mt-7 bg-grey100 shadow-md"
    >
      <div
        data-testid="categoryHeader"
        className="flex items-center justify-between hover:cursor-pointer"
        onClick={() => {
          setAccordionOpenIndex();
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
