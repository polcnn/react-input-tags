import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import moment from "moment";
import config from "../../config";
import { Footer } from "../../components/X";

describe("Footer Component", () => {
  test("renders the footer", () => {
    render(<Footer />);

    expect(
      screen.getByText(
        (_: string, element: Element | null) =>
          element?.textContent ===
          `Copyright © ${config.siteInfo.name} ${moment().format("YYYY")}.`
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Version: 1.0.0/i)).toBeInTheDocument();
  });
});
