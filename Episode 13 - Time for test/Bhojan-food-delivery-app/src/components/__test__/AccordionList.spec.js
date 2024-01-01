import { render, screen } from "@testing-library/react";
import { AccordionList } from "../AccordionList";
import MOCK_CATEGORIES_LIST from "../../mock-data/MockCategoriesList.json";
import "@testing-library/jest-dom";

describe("Testing Accordion List", () => {
  test("should render the component", () => {
    render(<AccordionList categoriesList={MOCK_CATEGORIES_LIST} />);
    const accordionItem = screen.getAllByTestId("accordionItem");
    expect(accordionItem.length).toBe(5);
  });
});
