import { AccordionItem } from "./AccordionItem";

export const AccordionList = ({ categoriesList }) => {
  return (
    <div className="mt-7">
      {categoriesList?.map((category) => (
        <AccordionItem
          key={category?.card?.card?.title}
          categoryItem={category}
        />
      ))}
    </div>
  );
};
