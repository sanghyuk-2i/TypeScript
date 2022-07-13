import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter Test", () => {
  it("should be render counter", () => {
    render(<Counter />);

    const target = screen.getByRole("button", { name: "+" });
    userEvent.click(target);

    expect(screen.getByText("1")).toBeTruthy();
  });
});
