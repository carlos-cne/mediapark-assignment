import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("<Button/>", () => {
  it("should render button with correct label", () => {
    render(
      <Button label="Get started Now" onClick={jest.fn} color="primary" />
    );
    const button = screen.getByText(/Get started Now/i);
    expect(button).toBeInTheDocument();
  });

  it("should render button with primary background-color", () => {
    render(
      <Button label="Get started Now" onClick={jest.fn} color="primary" />
    );
    const button = screen.getByText(/Get started Now/i);
    expect(button).toHaveStyle(`background-color: rgb(49, 75, 206)`);
  });

  it("should render button with secondary background-color", () => {
    render(
      <Button label="Get started Now" onClick={jest.fn} color="secondary" />
    );
    const button = screen.getByText(/Get started Now/i);
    expect(button).toHaveStyle(`background-color: rgb(255, 137, 126)`);
  });

  it("should render button with gray background-color", () => {
    render(<Button label="Get started Now" onClick={jest.fn} color="gray" />);
    const button = screen.getByText(/Get started Now/i);
    expect(button).toHaveStyle(`background-color: rgb(170, 173, 183)`);
  });

  it("should render button with light background-color", () => {
    render(<Button label="Get started Now" onClick={jest.fn} color="light" />);
    const button = screen.getByText(/Get started Now/i);
    expect(button).toHaveStyle(`background-color: rgb(245, 246, 250)`);
  });

  it("should render button with children component", () => {
    render(
      <Button label="Get started Now" onClick={jest.fn} color="light">
        <h1>children text</h1>
      </Button>
    );
    const heading = screen.getByRole("heading", { name: "children text" });
    expect(heading).toBeInTheDocument();
  });
});
