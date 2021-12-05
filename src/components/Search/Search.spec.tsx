import React from "react";
import { screen, render } from "@testing-library/react";
import Search from "./Search";
import userEvent from "@testing-library/user-event";

describe("<Search/>", () => {
  it("should render search component", () => {
    render(<Search onClick={jest.fn} onChange={jest.fn} value="" />);
    expect(screen.getByPlaceholderText("Searching...")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  it("should not display 'Invalid value' on click 'Submit' button", () => {
    render(<Search onClick={jest.fn} onChange={jest.fn} />);
    const input = screen.getByPlaceholderText("Searching...");
    userEvent.type(input, "João Paulo Rodrigues");
    userEvent.click(screen.getByRole("button", { name: "Submit" }));
    expect(screen.queryByText("Invalid value")).not.toBeInTheDocument();
  });

  it("should display 'Invalid value' on click 'Submit' button when input value is empty", () => {
    render(
      <Search onClick={jest.fn} onChange={jest.fn} value="" errorMessage />
    );
    userEvent.click(screen.getByRole("button", { name: "Submit" }));
    expect(screen.getByText("Invalid value")).toBeInTheDocument();
  });
});
