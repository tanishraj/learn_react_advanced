import { render, screen } from "@testing-library/react";
import { AccordionItem } from "../AccordionItem";
import "@testing-library/jest-dom";

describe("Testing Accordion Item", () => {
  test("should not render the menu details and menu list", () => {
    render(<AccordionItem />);
    const menuList = screen.queryAllByTestId("menuItem");
    expect(menuList.length).toBe(0);
  });
});
