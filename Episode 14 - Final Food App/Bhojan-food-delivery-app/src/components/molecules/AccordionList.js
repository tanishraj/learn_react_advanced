import { useState } from "react";
import { AccordionItem } from "../atoms/AccordionItem";

export const AccordionList = ({ categoriesList }) => {
  const [accordionOpenIndex, setAccordionOpenIndex] = useState(null);

  return (
    <div data-testid="accordionList" className="mt-7">
      {categoriesList?.map((category, index) => (
        <AccordionItem
          key={category?.card?.card?.title}
          categoryItem={category}
          isAccordionOpen={accordionOpenIndex === index ? true : false}
          setAccordionOpenIndex={() =>
            accordionOpenIndex === index
              ? setAccordionOpenIndex(null)
              : setAccordionOpenIndex(index)
          }
        />
      ))}
    </div>
  );
};
