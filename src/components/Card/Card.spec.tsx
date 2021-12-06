import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

const obj = {
  id: "1",
  photo:
    "https://images.unsplash.com/photo-1530281700549-e8…58MHx8fHwxNjM4NzM1NTA0&ixlib:rb-1.2.1&q:80&w:1080",
  alt_description: "dog running on beach during daytime",
  description: "string",
  likes: 255,
  user: {
    name: "Oscar Sutton",
    profile_photo:
      "https://images.unsplash.com/photo-1530281700549-e8…58MHx8fHwxNjM4NzM1NTA0&ixlib=rb-1.2.1&q=80&w=1080"
  }
};

describe("<Card/>", () => {
  it("should render Card with correct properties", () => {
    render(<Card photo={obj} />);

    expect(
      screen.getByAltText("dog running on beach during daytime")
    ).toBeInTheDocument();
    expect(screen.getByText("255 likes")).toBeInTheDocument();
    expect(screen.getByAltText("Oscar Sutton")).toBeInTheDocument();
    expect(screen.getByText("Oscar Sutton")).toBeInTheDocument();
  });
});
