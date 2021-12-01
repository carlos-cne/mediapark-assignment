import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("<Input>", () => {
  it("should render input component", () => {
    render(
      <Input
        name="name"
        type="text"
        onChange={jest.fn}
        placeholder="Full Name"
      />
    );

    const input = screen.getByPlaceholderText("Full Name") as HTMLInputElement;
    expect(input).toBeInTheDocument();
  });

  it("should render input with correct input value", () => {
    render(
      <Input
        name="name"
        type="text"
        onChange={jest.fn}
        placeholder="Full Name"
        endIcon
      />
    );

    const input = screen.getByPlaceholderText("Full Name") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "João Paulo Rodrigues" } });
    expect(input.value).toBe("João Paulo Rodrigues");
  });

  it("should render input with endIcon", () => {
    render(
      <Input
        name="name"
        type="text"
        onChange={jest.fn}
        placeholder="Full Name"
        endIcon={<h1>End Icon</h1>}
      />
    );

    const endIcon = screen.getByRole("heading", { name: "End Icon" });
    expect(endIcon).toBeInTheDocument();
  });

  it("should render input with type number", () => {
    render(
      <Input
        name="name"
        type="number"
        onChange={jest.fn}
        placeholder="Full Name"
      />
    );

    const input = screen.getByPlaceholderText("Full Name") as HTMLInputElement;
    expect(input.type).toBe("number");
  });

  it("should render input with correct background-colorw", () => {
    render(
      <Input
        name="name"
        type="number"
        onChange={jest.fn}
        placeholder="Full Name"
      />
    );

    const wrapper = screen.getByTestId("custom-input");
    expect(wrapper).toHaveStyle(`background-color:rgb(245, 246, 250)`);
  });
});
