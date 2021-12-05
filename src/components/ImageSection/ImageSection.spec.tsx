import React from "react";
import { render, screen } from "@testing-library/react";
import ImageSection from "./ImageSection";

describe("<ImageSection/>", () => {
  it("should render ImageSection with correct properties", () => {
    render(
      <ImageSection
        photo="https://images.unsplash.com/photo-1530281700549-e8…58MHx8fHwxNjM4NzM1NTA0&ixlib=rb-1.2.1&q=80&w=1080"
        alt_description="dog running on beach during daytime"
        likes={1000}
      />
    );

    expect(
      screen.getByAltText("dog running on beach during daytime")
    ).toBeInTheDocument();

    expect(screen.getByText("1000 likes")).toBeInTheDocument();
  });

  it("should render ImageSection with one like", () => {
    render(
      <ImageSection
        photo="https://images.unsplash.com/photo-1530281700549-e8…58MHx8fHwxNjM4NzM1NTA0&ixlib=rb-1.2.1&q=80&w=1080"
        alt_description="dog running on beach during daytime"
        likes={1}
      />
    );

    expect(
      screen.getByAltText("dog running on beach during daytime")
    ).toBeInTheDocument();

    expect(screen.getByText("1 like")).toBeInTheDocument();
  });
});
