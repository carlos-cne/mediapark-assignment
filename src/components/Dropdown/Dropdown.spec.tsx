import React from "react";
import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("<Dropdown/>", () => {
  it("should render Dropdown with correct properties", () => {
    render(<Dropdown suggestions={["dog", "cat"]} setSearchValue={jest.fn} />);

    expect(screen.getByText("dog")).toBeInTheDocument();
    expect(screen.getByText("cat")).toBeInTheDocument();
  });
});
