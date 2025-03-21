import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import config from "../../config";
import { Header } from "../../components/X";

describe("Header Component", () => {
  test("renders the header", () => {
    render(<Header />);

    expect(screen.getByText(config.siteInfo.name)).toBeInTheDocument();
  });
});
