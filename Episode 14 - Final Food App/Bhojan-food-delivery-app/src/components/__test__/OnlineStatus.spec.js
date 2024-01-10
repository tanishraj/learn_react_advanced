import { render, screen } from "@testing-library/react";
import { OnlineStatus } from "../OnlineStatus";
import { AppStore } from "../../redux/AppStore";
import { Provider } from "react-redux";
import { useOnlineStatus } from "../../hooks/useOnlineStatus";
import "@testing-library/jest-dom";

//mock the custom hook
jest.mock("../../hooks/useOnlineStatus");

describe("Testing Online Status Component", () => {
  test("should render the component", () => {
    useOnlineStatus.mockReturnValue({ onlineStatus: true });
    const { container } = render(<OnlineStatus />);
    expect(
      container.firstChild.classList.contains("animate-pulse-animation")
    ).toBe(true);
  });

  test("should render the green signal", () => {
    useOnlineStatus.mockReturnValue({ onlineStatus: true });
    const { container } = render(<OnlineStatus />);
    expect(container.firstChild.classList.contains("bg-primary")).toBe(true);
  });

  test("should render the red signal", () => {
    useOnlineStatus.mockReturnValue({ onlineStatus: false });
    const { container } = render(<OnlineStatus />);
    expect(container.firstChild.classList.contains("bg-red")).toBe(true);
  });
});
