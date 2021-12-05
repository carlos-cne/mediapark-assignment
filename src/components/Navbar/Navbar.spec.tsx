import React from "react";
import { screen, render } from "@testing-library/react";
import Navbar from "./Navbar";

describe("<Navbar/>", () => {
  it("should display a Logo image", () => {
    render(<Navbar onClick={jest.fn} />);
    expect(
      screen.getByAltText("Unplash black logo on left side")
    ).toBeInTheDocument();
  });

  it("should render a logout button", () => {
    render(<Navbar onClick={jest.fn} />);
    expect(screen.getByRole("button", { name: "Log out" })).toBeInTheDocument();
  });
});
