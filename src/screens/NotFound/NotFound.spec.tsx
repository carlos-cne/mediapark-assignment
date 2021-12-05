import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";

describe("<NotFound/>", () => {
  it("should render NotFound message", () => {
    render(<NotFound />);
    expect(screen.getByRole("heading", { name: "404" })).toBeInTheDocument();
    expect(screen.getByText(/Not found/i)).toBeInTheDocument();
  });
});
