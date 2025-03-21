import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InputTags } from "../../components/X";

describe("InputTags Component", () => {
  test("renders input field with placeholder", () => {
    render(<InputTags placeholder="Enter tags" />);

    const input = screen.getByPlaceholderText("Enter tags");

    expect(input).toBeInTheDocument();
  });

  test("renders default tags from value prop", () => {
    render(<InputTags value={["tag1", "tag2"]} />);

    expect(screen.getByText("tag1")).toBeInTheDocument();
    expect(screen.getByText("tag2")).toBeInTheDocument();
  });

  test("adds a tag when Enter is pressed", () => {
    render(<InputTags />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "newTag" } });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(screen.getByText("newTag")).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  test("removes a tag when clicking remove button", () => {
    render(<InputTags value={["removableTag"]} />);

    const removeButton = screen.getByRole("button");

    fireEvent.click(removeButton);

    expect(screen.queryByText("removableTag")).not.toBeInTheDocument();
  });

  test("removes last tag when Backspace is pressed in empty input", () => {
    render(<InputTags value={["lastTag"]} />);

    const input = screen.getByRole("textbox");

    fireEvent.keyDown(input, { key: "Backspace" });

    expect(screen.queryByText("lastTag")).not.toBeInTheDocument();
  });

  test("calls onChange when tags change", () => {
    const mockOnChange = jest.fn();

    render(<InputTags onChange={mockOnChange} />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "testTag" } });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(mockOnChange).toHaveBeenCalledWith(["testTag"]);
  });

  test("does not add duplicate tags", () => {
    render(<InputTags />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "tag1" } });
    fireEvent.keyDown(input, { key: "Enter" });

    fireEvent.change(input, { target: { value: "tag1" } });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(screen.getAllByText("tag1")).toHaveLength(1);
  });

  test("does not exceed maxTags limit", () => {
    render(<InputTags maxTags={2} />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "tag1" } });
    fireEvent.keyDown(input, { key: "Enter" });

    fireEvent.change(input, { target: { value: "tag2" } });
    fireEvent.keyDown(input, { key: "Enter" });

    fireEvent.change(input, { target: { value: "tag3" } });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(screen.getAllByRole("button")).toHaveLength(2);
  });
});
