import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Badge } from "../../components/Common";

describe("Badge Component", () => {
  test("renders badge with common text", () => {
    render(<Badge>Tag 1</Badge>);
    expect(screen.getByText("Tag 1")).toBeInTheDocument();

    render(<Badge>Tag 2</Badge>);
    expect(screen.getByText("Tag 2")).toBeInTheDocument();
  });

  test("calls onRemove() when close button is clicked", () => {
    const cb = jest.fn();

    render(<Badge onRemove={cb}>Tag with close</Badge>);

    const closeButton = screen.getByRole("button", { hidden: true });
    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);

    expect(cb).toHaveBeenCalledTimes(1);
  });
});
