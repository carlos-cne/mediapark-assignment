import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("<Button/>", () => {
  it("should render button with correct label", () => {
    render(
      <Button onClick={jest.fn} color="primary">
        Get started Now
      </Button>
    );
    const button = screen.getByText(/Get started Now/i);
    expect(button).toBeInTheDocument();
  });

  it("should render button with primary background-color", () => {
    render(
      <Button onClick={jest.fn} color="primary">
        Get started Now
      </Button>
    );
    const button = screen.getByText(/Get started Now/i);
    expect(button).toHaveStyle(`background-color: rgb(49, 75, 206)`);
  });

  it("should render button with secondary background-color", () => {
    render(
      <Button onClick={jest.fn} color="secondary">
        Get started Now
      </Button>
    );
    const button = screen.getByText(/Get started Now/i);
    expect(button).toHaveStyle(`background-color: rgb(255, 137, 126)`);
  });

  it("should render button with gray background-color", () => {
    render(
      <Button onClick={jest.fn} color="gray">
        Get started Now
      </Button>
    );
    const button = screen.getByText(/Get started Now/i);
    expect(button).toHaveStyle(`background-color: rgb(170, 173, 183)`);
  });

  it("should render button with light background-color", () => {
    render(
      <Button onClick={jest.fn} color="light">
        Get started Now
      </Button>
    );
    const button = screen.getByText(/Get started Now/i);
    expect(button).toHaveStyle(`background-color: rgb(245, 246, 250)`);
  });

  it("should render button with children component", () => {
    render(
      <Button onClick={jest.fn} color="light">
        <h1>children text</h1>
      </Button>
    );
    const heading = screen.getByRole("heading", { name: "children text" });
    expect(heading).toBeInTheDocument();
  });
});
