import React from "react";
import { render, screen } from "@testing-library/react";
import DescriptionSection from "./DescriptionSection";

describe("<DescriptionSection/>", () => {
  it("should render DescriptionSection with correct properties", () => {
    render(
      <DescriptionSection description="dog running on beach during daytime" />
    );

    expect(
      screen.getByText("dog running on beach during daytime")
    ).toBeInTheDocument();
  });
});
