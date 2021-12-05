import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("<Card/>", () => {
  it("should render <Card/> with correct style", async () => {
    render(
      <Card>
        <button>children</button>
      </Card>
    );

    expect(screen.getByTestId(/custom-modal-element/i)).toHaveStyle(
      `box-shadow: rgba(0,0,0,0.15) 0px 3px 8px`
    );
  });

  it("should render children component", () => {
    render(
      <Card>
        <button>children</button>
      </Card>
    );

    expect(
      screen.getByRole("button", { name: "children" })
    ).toBeInTheDocument();
  });
});
