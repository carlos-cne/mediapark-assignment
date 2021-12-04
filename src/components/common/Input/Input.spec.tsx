import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("<Input>", () => {
  it("should render input component", () => {
    render(
      <Input
        value="Joao"
        name="name"
        type="text"
        onChange={jest.fn}
        placeholder="Full Name"
      />
    );

    const input = screen.getByPlaceholderText("Full Name") as HTMLInputElement;
    expect(input).toBeInTheDocument();
  });

  it("should render input with correct input value", async () => {
    render(
      <Input
        name="name"
        type="text"
        onChange={jest.fn}
        placeholder="Full Name"
      />
    );

    const input = screen.getByPlaceholderText("Full Name");
    userEvent.type(input, "João Paulo Rodrigues");
    expect(input).toHaveValue("João Paulo Rodrigues");
  });

  it("should render input with type number", () => {
    render(
      <Input
        value={99999999}
        name="number"
        type="number"
        onChange={jest.fn}
        placeholder="Phone Number"
      />
    );

    const input = screen.getByPlaceholderText(
      "Phone Number"
    ) as HTMLInputElement;
    expect(input.type).toBe("number");
  });

  it("should render input with correct background-color", () => {
    render(
      <Input
        value="joao@email.com"
        name="email"
        type="email"
        onChange={jest.fn}
        placeholder="Email"
      />
    );

    const wrapper = screen.getByTestId("custom-input");
    expect(wrapper).toHaveStyle(`background-color:rgb(245, 246, 250)`);
  });
});
