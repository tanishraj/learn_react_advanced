import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../About";

describe("Testing About Component", () => {
  test("should render the About component", () => {
    render(<About />);
    const title = screen.getByRole("heading");
    expect(title).toBeInTheDocument();
  });

  test("should render the text Tanish!", () => {
    render(<About />);
    const titleText = screen.getByText("Tanish!");
    expect(titleText).toBeInTheDocument();
  });
});
